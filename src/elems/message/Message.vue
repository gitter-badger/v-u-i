<template>
  <transition appear name='slide-top'>
    <div
      class='i-message dimmer-clear'
      :class='type'
      v-show='opened'
      @click='close'
    >
      <div class='type'></div>
      <div class='content' v-html='message'></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IMessage',
  props: {
    type: { type: String },
    message: { type: String },
    time: { type: Number, default: 3000 },
    value: { type: Boolean, default: true },
  },
  data(){
    return {
      opened: this.value
    }
  },
  methods: {
    close(){
      this.opened = false
      this.$emit('close')
    },
  },
  mounted(){
    if(this.time > 0){
      setTimeout(()=>{
        this.opened = false
        this.$emit('close')
      }, this.time)
    }
  },
  watch: {
    opened(open){
      if(!open){
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy()
      }
    },
  },
}
</script>
