<template>
  <div
    class='i-col'
    :class='[
      "xs-" + (xs),
      "sm-" + (sm || xs),
      "md-" + (md || sm || xs),
      "lg-" + (lg || md || sm || xs),
      xsOffset ? "xs-offset-" + xsOffset : "",
      smOffset ? "sm-offset-" + smOffset : "",
      mdOffset ? "md-offset-" + mdOffset : "",
      lgOffset ? "lg-offset-" + lgOffset : ""
    ]'
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ICol',
  props: {
    xs: { type: Number, default: 12 },
    sm: { type: Number },
    md: { type: Number },
    lg: { type: Number },
    xsOffset: { type: Number },
    smOffset: { type: Number },
    mdOffset: { type: Number },
    lgOffset: { type: Number },
  },
}
</script>
