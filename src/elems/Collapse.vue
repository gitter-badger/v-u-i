<template>
  <div class='i-collapse'>
    <div
      v-for='item in items' :key='item.name'
      :class='{ "opened": opened && opened.indexOf(item.name)>-1}'
    >
      <div
        class='label'
        @click='onToggleOpen(item)'
      >
        {{item.text}}
      </div>
      <div class='content'>
        <slot :name='item.name'></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICollapse',
  props: {
    items: { type: Array, required: true },
    value: { type: [Array, String] },
    multiple: { type: Boolean, default: false },
  },
  data(){
    return {
      opened: this.multiple
       ? (this.value || [])
       : this.value,
    }
  },
  methods: {
    onToggleOpen(item){
      let opened = this.opened || ''
      if(opened.indexOf(item.name)<0){
        opened = this.multiple
          ? opened.concat(item.name)
          : item.name
      }else{
        opened = this.multiple
          ? opened.filter((i)=>i!==item.name)
          : undefined
      }
      this.opened = opened
      this.$emit('input', this.opened)
    },
  },
}
</script>
