<template>
  <div
    class='i-tab'
    :class='[
      type,
      {
        "justified": justified
      }
    ]'
  >
    <ul>
      <li
        v-for='item in items' :key='item.name'
        :class='{ "opened": opened==item.name }'
        @click='onToggleOpen(item)'
      >
        {{item.text}}
      </li>
    </ul>
    <transition-group
      name='flip-list'
      tag='div'
      class='content'
    >
      <div
        v-for='item in contents' :key='item.name'
        :class='{ "opened": opened==item.name }'
      >
        <slot :name='item.name'></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ITab',
  props: {
    items: { type: Array, required: true },
    justified: { type: Boolean, default: false },
    value: { type: String },
    type: { type: String },
  },
  data(){
    return {
      opened: this.value || (this.items.length>0 ? this.items[0].name : undefined),
      contents: [].concat(this.items),
    }
  },
  methods: {
    onToggleOpen(item){
      this.opened = item.name
      this.contents.sort((i)=>i.name==item.name ? 0 : 1)
      this.$emit('input', this.opened)
    },
  },
}
</script>
