<template>
  <button
    class='i-btn'
    :class='[
      type,
      radius,
      size,
      display,
      {
        "loading" : loading,
      }
    ]'
    :disabled='disabled'
    :type='htmlType || "button"'
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IBtn',
  props: {
    size: { type: String },
    type: { type: String },
    radius: { type: String },
    display:  { type: String },
    loading:  { type: Boolean },
    disabled: { type: Boolean },
    htmlType: { type: String },
  },
}
</script>
