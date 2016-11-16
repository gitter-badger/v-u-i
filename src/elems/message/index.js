import Vue    from 'vue'

let Component = Vue.extend(require('./Message.vue'))

export default function(options){
  document.body.appendChild(new Component({ propsData: options }).$mount().$el)
}
