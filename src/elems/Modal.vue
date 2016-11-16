<template>
  <div
    class='i-modal dimmer-clear'
    :class='{ "opened": opened }'
    dimmer
    @click='closeModalByDimmer'
  >
    <div
      class='modal'
      :style='{ width: width }'
    >
      <div
        v-if='closeable'
        class='close'
        @click='closeModal'
      >
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'IModal',
  props: {
    value: { type: Boolean },
    width: { type: String },
    closeable: { type: Boolean, default: true },
    noHeaderSpacing: { type: Boolean },
    noContentSpacing: { type: Boolean },
    noFooterSpacing: { type: Boolean },
  },
  data(){
    return {
      opened: this.value,
      bodyOverflow: '',
      bodyPaddingRight: 0,
      bodyScrollWidth: 0,
    }
  },
  methods: {
    openModal(){
      this.opened = true
      // hidden scroll
      this.bodyOverflow = document.body.style.overflow
      this.bodyPaddingRight = parseInt(document.body.style.paddingRight || 0)
      let hasScrollWidth = document.body.offsetWidth
      document.body.style.overflow = 'hidden'
      this.bodyScrollWidth = Math.max(0, document.body.offsetWidth - hasScrollWidth)
      document.body.style.paddingRight = `${this.bodyPaddingRight+this.bodyScrollWidth}px`
      // set background
      document.body.className = document.body.className
        .split(/\s+/).concat('modal-opened').join(' ')
      // emit event
      this.$emit('input', this.opened)
    },
    closeModalByDimmer(e){
      if(this.closeable && e.target.hasAttribute('dimmer')){
        this.closeModal()
      }
    },
    closeModal(){
      this.opened = false
      // show scroll
      document.body.style.overflow = this.bodyOverflow
      document.body.style.paddingRight = `${this.bodyPaddingRight}px`
      // set background
      document.body.className = document.body.className
        .split(/\s+/).filter((i)=>i!='modal-opened').join(' ')
      // emit event
      this.$emit('input', this.opened)
    },
  },
  mounted(){
    if(this.value){
      this.openModal()
    }
    document.body.appendChild(this.$el)
  },
  destroyed(){
    this.$el.parentNode.removeChild(this.$el)
  },
  watch: {
    value(){
      if(this.value){
        this.openModal()
      }else{
        this.closeModal()
      }
    },
  },
}
</script>
