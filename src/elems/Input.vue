<template>
  <input
    v-if='!password'
    v-model.trim='iptValue'
    class='i-input'
    type='text'
    :name='name'
    @input.stop='onInput'
  />
  <input
    v-else
    v-model.trim='iptValue'
    class='i-input'
    type='password'
    :name='name'
    @input.stop='onInput'
  />
</template>

<script>
import { eventEmitter } from '../utils/mixins'

export default {
  name: 'IInput',
  mixins: [eventEmitter],
  props: {
    password: { type: Boolean },
    name: { type: String, required: true },
    value: { type: String },
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
