<template>
  <div>
    <div
      v-for='opt in options' :key='opt.value'
      class='i-checkbox'
      :class='{ "disabled": opt.disabled }'
    >
      <div class='selector'>
        <input
          v-model='iptValue'
          type='checkbox'
          :name='name'
          :value='opt.value'
          :disabled='opt.disabled'
          @change.stop='onInput'
        />
        <div class='checker'></div>
      </div>
      {{opt.text}}
    </div>
  </div>
</template>

<script>
import { eventEmitter } from '../utils/mixins'

export default {
  name: 'ICheckbox',
  mixins: [eventEmitter],
  props: {
    name: { type: String, required: true },
    value: { type: Array, default: ()=>{return []} },
    options: { type: Array, default: ()=>{return []} },
  },
  data(){
    return {
      iptValue: this.value,
    }
  },
  methods: {
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
