<template>
  <div
    class='i-form-item'
    :class='{ "error": hasError }'
  >
    <div
      v-if='label'
      class='label'
      :style='{ "width": labelWidth }'
    >
      {{label}}
    </div>
    <div
      class='content'
      :style='{ "width": contentWidth }'
    >
      <slot></slot>
      <div
        v-if='helperText'
        class='helper'
      >
        {{helperText}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IFormItem',
  props: {
    label: { type: String },
    helper: { type: String },
    labelWidth: { type: String },
    contentWidth: { type: String },
  },
  data(){
    return {
      helperText: this.helper,
      hasError: null,
    }
  },
  created(){
    this.$on('formItemValidate', (hasError, helper)=>{
      this.hasError = hasError
      this.helperText = helper
    })
  },
}
</script>
