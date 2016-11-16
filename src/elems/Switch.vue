<template>
  <div
    class='i-switch'
    :class='{ "disabled": disabled }'
  >
    <div class='selector'>
      <input
        v-model='iptValue'
        type='radio'
        value='off'
        :name='name'
        :disabled='disabled'
        @change.stop='onInput'
      />
      <input
        v-model='iptValue'
        type='radio'
        value='on'
        :name='name'
        :disabled='disabled'
        @change.stop='onInput'
      />
      <div class='checker'></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { eventEmitter } from '../utils/mixins'

export default {
  name: 'ISwitch',
  mixins: [eventEmitter],
  props: {
    name: { type: String, required: true },
    value: { type: String, default: 'off' },
    disabled: { type: Boolean },
  },
  data(){
    return {
      iptValue: this.value,
    }
  },
  methods: {
    onInput(e){
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
