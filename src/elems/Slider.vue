<template>
  <div
    class='i-slider'
    :class='{ "disabled": disabled }'
  >
    <input
      v-model='iptValue'
      type='hidden'
      :name='name'
    />
    <div class='line'></div>
    <div
      class='bar'
      :style='{ width: leftWidth }'
    >
    </div>
    <div
      class='btn'
      :class='{ "dropping": dropping }'
      :style='{ left: leftWidth }'
      @mousedown='dragStart'
    >
    </div>
    <div
      class='tip'
      :style='{ left: leftWidth }'
    >
      {{iptValue}}
    </div>
    <div class='base'></div>
  </div>
</template>

<script>
import { eventEmitter } from '../utils/mixins'
import { throttle } from '../utils/funcUtil'

export default {
  name: 'ISlider',
  mixins: [eventEmitter],
  props: {
    name: { type: String, required: true },
    value: { type: Number, default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: { type: Boolean },
  },
  data(){
    return {
      iptValue: this.value,
      dropping: false
    }
  },
  computed: {
    leftWidth(){
      return this.iptValue / this.max * 100 + '%'
    },
  },
  methods: {
    dragStart(e){
      e.preventDefault()
      if(this.readonly || this.disabled || this.dropping){
        return
      }
      this.dropping = true
      let baseWidth = Math.max(e.target.parentElement.clientWidth, 10)
      let startX = e.clientX
      let startValue = this.iptValue
      let tip = e.target.nextElementSibling
      this.$nextTick(()=>{
        tip.style.marginLeft = tip.clientWidth/-2 + 'px'
      })
      let updateIptValue = (clientX, emit)=>{
        let lenPercent = Math.min(1, (clientX - startX) / baseWidth)
        let iptValue = Math.ceil(startValue + this.max*lenPercent)
        let step = iptValue % this.step
        if(step >= this.step/2){
          iptValue = iptValue - step + this.step
        }else{
          iptValue = iptValue - step
        }
        this.iptValue = Math.max(this.min, Math.min(this.max, iptValue))
        if(emit){
          this.onInput()
        }
      }
      let dragMove = throttle((me)=>{
        me.preventDefault()
        tip.style.marginLeft = tip.clientWidth/-2 + 'px'
        updateIptValue(me.clientX)
      })
      let dragStop = (se)=>{
        se.preventDefault()
        this.dropping = false
        updateIptValue(se.clientX, true)
        window.removeEventListener('mousemove', dragMove)
        window.removeEventListener('mouseup', dragStop)
      }
      window.addEventListener('mousemove', dragMove)
      window.addEventListener('mouseup', dragStop)
    },
    onInput(){
      this.$emit('input', this.iptValue)
      this.dispatch('IForm', 'fieldValidate', this.name, this.iptValue)
    },
    onValidate(errors){
      let iptError = errors[this.name] || []
      this.dispatch('IFormItem', 'formItemValidate', iptError.length>0, iptError[0])
    },
  },
  created(){
    this.$on('formReseted', ()=>{
      this.iptValue = this.value
    })
    this.$on('formValidate', this.onValidate)
    this.$on(`formValidate-${this.name}`, this.onValidate)
  },
}
</script>
