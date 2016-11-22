<template>
  <div
    class='i-select'
    :class='{
      "multiple": multiple,
      "selecting": selecting,
      "disabled": disabled
    }'
  >
    <select
      v-model='iptValue'
      :name='name'
      :multiple='multiple'
      :disabled='disabled'
    >
      <option
        v-for='opt in options' :key='opt.value'
        :value='opt.value'
      >
        {{opt.text}}
      </option>
    </select>
    <div
      class='selector'
      @click.prevent='openContent'
    >
      <span v-for='item in selecteds' :key='item.value'>
        {{item.text}}
      </span>
      <div
        v-if='selecteds.length==0'
        class='placeholder'
      >
        {{placeholder}}
      </div>
    </div>
    <div
      class='content'
      :style='{ maxHeight: height }'
    >
      <div
        v-for='opt in options' :key='opt.value'
        class='i-select-item'
      >
        <input
          type='checkbox'
          :checked='iptValue && iptValue.indexOf(opt.value)>-1'
          @change.prevent='onSelectItem(opt)'
        />
        <div class='content'>
          {{opt.text}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventEmitter } from '../utils/mixins'

export default {
  name: 'ISelect',
  mixins: [eventEmitter],
  props: {
    name: { type: String, required: true },
    options: { type: Array, default: ()=>{return []} },
    value: { type: [String, Array] },
    multiple: { type: Boolean, default: false },
    placeholder: { type: String },
    height: { type: String },
    disabled: { type: Boolean },
  },
  data(){
    let defValue = this.value || (this.multiple ? [] : undefined)
    let defOpts = this.value
      ? this.options.filter((i)=>defValue.indexOf(i.value)>-1)
      : []
    return {
      iptValue: defValue,
      selecteds: defOpts,
      selecting: false,
    }
  },
  methods: {
    onSelectItem(option){
      let selecteds = this.selecteds
      let iptValue = this.multiple
        ? this.iptValue
        : this.iptValue || ''
      if(iptValue.indexOf(option.value)<0){
        iptValue = this.multiple
          ? iptValue.concat(option.value)
          : option.value
        selecteds = this.multiple
          ? selecteds.concat(option)
          : [option]
      }else if(this.multiple){
        iptValue = iptValue.filter((i)=>i!==option.value)
        selecteds = selecteds.filter((i)=>i.value!==option.value)
      }
      this.selecteds = selecteds
      this.iptValue = iptValue
      if(!this.multiple){
        this.selecting = false
      }
      this.onInput()
    },
    openContent(){
      if(this.disabled || this.selecting){
        return
      }
      this.selecting = true
      let selecting = (se)=>{
        se.preventDefault()
        if(this.$el.contains(se.target)){
          return
        }
        this.selecting = false
        window.removeEventListener('mousedown', selecting)
      }
      window.addEventListener('mousedown', selecting)
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
      this.iptValue = this.value || (this.multiple ? [] : undefined)
      this.selecteds = this.value
        ? this.options.filter((i)=>this.iptValue.indexOf(i.value)>-1)
        : []
    })
    this.$on('formValidate', this.onValidate)
    this.$on(`formValidate-${this.name}`, this.onValidate)
  },
}
</script>
