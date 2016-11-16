<template>
  <div
    class='i-btn-grp'
    :class='type'
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IBtnGrp',
  props: {
    type: { type: String },
  },
}
</script>
