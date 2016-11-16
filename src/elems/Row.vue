<template>
  <div
    class='i-row'
    :class='{ "wrapper": wrapper }'
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IRow',
  props: {
    wrapper: { type: Boolean },
  },
}
</script>
