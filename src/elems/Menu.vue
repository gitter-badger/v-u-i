<template>
  <div
    class='i-menu'
    :class='type'
  >
    <ul>
      <li
        v-for='item in items' :key='item.name'
        :class='[
          item.className,
          {
            "multiple": item.children,
            "active": iptValue && activePaths[iptValue] && activePaths[iptValue].indexOf(item.name)>-1,
            "disabled": item.disabled,
            "right": item.right
          }
        ]'
        @click='changeActive(item)'
      >
        <slot :name='item.name'>
          <a @click.prevent='void(0)'>
            <i
              v-if='item.icon'
              :class='item.icon'
            >
            </i>
            {{item.text}}
          </a>
        </slot>
        <div class='i-menu' v-if='item.children'>
          <ul>
            <li
              v-for='childenItem in item.children' :key='childenItem.name'
              :class='[
                childenItem.className,
                {
                  "active": iptValue && activePaths[iptValue] && activePaths[iptValue].indexOf(childenItem.name)>-1,
                  "disabled": childenItem.disabled
                }
              ]'
              @click='changeActive(childenItem)'
            >
              <slot :name='childenItem.name'>
                <a @click.prevent='void(0)'>
                  <i
                    v-if='childenItem.icon'
                    :class='childenItem.icon'
                  >
                  </i>
                  {{childenItem.text}}
                </a>
              </slot>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IMenu',
  props: {
    type: { type: String },
    items: { type: Array, required: true },
    value: { type: String },
  },
  data(){
    let getActivePaths = (items, parentPath=[])=>{
      let activePaths = {}
      items.forEach((i)=>{
        if(activePaths[i.name]){
          return
        }
        activePaths[i.name] = [i.name].concat(parentPath)
        if(i.children){
          Object.assign(activePaths, getActivePaths(
            i.children, activePaths[i.name]
          ))
        }
      })
      return activePaths
    }
    return {
      iptValue: this.value,
      activePaths: getActivePaths(this.items),
    }
  },
  methods: {
    changeActive(item){
      if(item.disabled || item.children){
        return
      }
      this.iptValue = item.name
    },
  },
  watch: {
    iptValue(){
      this.$emit('input', this.iptValue)
    },
  },
}
</script>
