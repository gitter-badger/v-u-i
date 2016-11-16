<template>
  <div
    class='i-input-number'
    :class='{
      "readonly": readonly,
      "disabled": disabled
    }'
  >
    <input
      v-model='iptValue'
      class='i-input'
      type='number'
      :name='name'
      :min='min'
      :max='max'
      :step='step'
      :placeholder='placeholder'
      :readonly='readonly'
      :disabled='disabled'
      @input='onInput'
      @blur='onBlur'
    >
    <div
      class='minus'
      @click.prevent='crement(-1*step)'
    ></div>
    <div
      class='plus'
      @click.prevent='crement(1*step)'
    ></div>
  </div>
</template>

<script>
import { eventEmitter } from '../utils/mixins'

export default {
  name: 'IInputNumber',
  mixins: [eventEmitter],
  props: {
    name: { type: String, required: true },
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number, default: 1 },
    placeholder: { type: String },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
  },
  data(){
    return {
      iptValue: this.value
    }
  },
  methods: {
    crement(step){
      if(this.readonly || this.disabled){
        return
      }
      let iptValue = this.iptValue || 0
      iptValue += step
      this.iptValue = Math.min(this.max, Math.max(this.min, iptValue))
      this.$emit('input', this.iptValue)
      this.dispatch('IForm', 'fieldValidate', this.name, this.iptValue)
    },
    onInput(e){
      e.target.value = this.iptValue
      this.$emit('input', this.iptValue)
      this.dispatch('IForm', 'fieldValidate', this.name, this.iptValue)
    },
    onBlur(e){
      let iptValue = parseInt(e.target.value) || 0
      this.iptValue = Math.min(this.max, Math.max(this.min, iptValue))
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
