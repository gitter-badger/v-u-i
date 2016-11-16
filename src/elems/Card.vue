<template>
  <div class='i-card'>
    <div class='header' :class='{ "no-spacing": noHeaderSpacing}'>
      <slot name='header'></slot>
    </div>
    <div class='content' :class='{ "no-spacing": noContentSpacing}'>
      <slot></slot>
    </div>
    <div class='footer' :class='{ "no-spacing": noFooterSpacing}'>
      <slot name='footer'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICard',
  props: {
    noHeaderSpacing: { type: Boolean },
    noContentSpacing: { type: Boolean },
    noFooterSpacing: { type: Boolean },
  },
}
</script>
