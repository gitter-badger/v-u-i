<template>
  <div
    class='i-popup dimmer-clear'
    :class='[
      position,
      {
        "opened": this.opened
      }
    ]'
    :style='{
      maxWidth: width,
      top: top,
      left: left
    }'
  >
    <slot></slot>
    <slot name='content'></slot>
  </div>
</template>

<script>
let openedPopup = null
export default {
  name: 'IPopup',
  props: {
    width: { type: String },
    position: { type: String, default: 'top' },
    trigger: { type: String, default: 'hover' },
  },
  data(){
    return {
      opened: false,
      top: '0px',
      left: '0px',
    }
  },
  methods: {
    updatePosition(dom){
      let getLeft = (d)=> d ? getLeft(d.offsetParent) + d.offsetLeft : 0
      let getTop = (d)=> d ? getTop(d.offsetParent) + d.offsetTop : 0
      let popupWidth = this.$el.offsetWidth
      let popupHeight = this.$el.offsetHeight
      let width = dom.offsetWidth
      let height = dom.offsetHeight
      let clientRect = dom.getBoundingClientRect ? dom.getBoundingClientRect() : null
      let top = clientRect ? clientRect.top : getTop(dom)
      let left = clientRect ? clientRect.left : getLeft(dom)
      if(['top', 'bottom'].indexOf(this.position)>-1){
        this.left = left + (width - popupWidth) / 2 + 'px'
        if(this.position=='top'){
          this.top = top - popupHeight + 'px'
        }else{
          this.top = top + height + 'px'
        }
      }else{
        this.top = top + (height - popupHeight) / 2 + 'px'
        if(this.position=='left'){
          this.left = left - popupWidth + 'px'
        }else{
          this.left = left + width + 'px'
        }
      }
    },
    clickSwitch(e){
      e.preventDefault()
      e.stopPropagation()
      if(this.opened){
        this.closePopup()
      }else{
        this.openPopup(e)
      }
    },
    clickGlobal(e){
      if(this.$el.contains(e.target) && e.target.hasAttribute('close-popup')==false){
        return
      }
      this.closePopup()
    },
    openPopup(e){
      if(openedPopup){
        openedPopup.closePopup()
      }
      this.opened = true
      openedPopup = this
      this.updatePosition(e.target)
      window.addEventListener('click', this.clickGlobal)
    },
    closePopup(){
      this.opened = false
      openedPopup = null
      window.removeEventListener('click', this.clickGlobal)
    },
  },
  destroyed(){
    this.closePopup()
    this.$slots.default.forEach((child)=>{
      child.elm.parentNode.removeChild(child.elm)
    })
    this.$el.parentNode.removeChild(this.$el)
  },
  mounted(){
    this.$slots.default.forEach((child)=>{
      this.$el.parentNode.insertBefore(child.elm, this.$el)
      if(this.trigger=='hover'){
        child.elm.addEventListener('mouseenter', this.openPopup)
        child.elm.addEventListener('mouseleave', this.closePopup)
      }else if(this.trigger=='hover-click'){
        child.elm.addEventListener('mouseenter', this.openPopup)
      }else{
        child.elm.addEventListener(this.trigger, this.clickSwitch)
      }
    })
    document.body.appendChild(this.$el)
  },
}
</script>
