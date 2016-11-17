<template>
  <div>
    <h3>$message</h3>

    <i-card>
      <h5 slot='header'>types</h5>
      <i-btn @click.native='openMessage()'>Default</i-btn>
      <i-btn @click.native='openMessage("success")'>Success</i-btn>
      <i-btn @click.native='openMessage("info")'>Info</i-btn>
      <i-btn @click.native='openMessage("warning")'>Warning</i-btn>
      <i-btn @click.native='openMessage("error")'>Error</i-btn>
    </i-card>
  </div>
</template>

<script>
export default {
  methods: {
    openMessage(type, msg='Lorem ipsum dolor sit amet.'){
      this.$message({
        type: type,
        message: msg
      })
    }
  },
  components: {
  }
}
</script>
