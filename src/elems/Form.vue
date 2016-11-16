<template>
  <form
    class='i-form'
    :class='{
      "inline": inline,
      "horizontal": horizontal
    }'
    @reset.prevent='onReset'
    @submit='onSubmit'
  >
    <slot></slot>
  </form>
</template>

<script>
import { eventEmitter } from '../utils/mixins'
import { getValues, validateValue } from '../utils/formHelper'

export default {
  name: 'IForm',
  mixins: [eventEmitter],
  props: {
    inline: { type: Boolean },
    horizontal: { type: Boolean },
    validators: { type: Object, default: ()=>{return {}} },
  },
  data(){
    return {
      errors: {},
      values: {},
    }
  },
  methods: {
    onReset(){
      this.broadcastAll('formReseted')
    },
    onSubmit(e){
      this.validate()
      if(Object.keys(this.errors).length){
        e.preventDefault()
      }
    },
    validate(name, value){
      let values = Object.assign({}, this.values, name
        ? { [name]: value }
        : getValues(this.$el)
      )
      let errors = Object.entries(
        this.validators
      ).reduce((res, [name, rules])=>{
        res[name] = validateValue(values[name], rules, values)
        return res
      }, {})
      if(name){
        this.errors[name] = errors[name]
        this.values[name] = values[name]
        this.broadcastAll(`formValidate-${name}`, errors)
      }else{
        this.errors = errors
        this.values = values
        this.broadcastAll(`formValidate`, errors)
      }
    },
  },
  created(){
    this.$on('fieldValidate', this.validate)
  }
}
</script>
