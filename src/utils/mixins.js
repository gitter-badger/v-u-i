export const eventEmitter = {
  methods: {
    /*
     * Dispatch to all parent
     * - - - - - - - - - -
     * this.dispatch(...params)
     */
    dispatchAll(...params) {
      let component = this
      while (component.$parent) {
        component = component.$parent
        component.$emit.apply(component, params)
      }
    },
    /*
     * Dispatch to parent by name
     * - - - - - - - - - -
     * this.dispatch('ComponentName', ...params)
     */
    dispatch(name, ...params) {
      let component = this.$parent
      while (component && component.$options.name != name) {
        component = component.$parent
      }
      if (component) {
        component.$emit.apply(component, params)
      }
    },
    /*
     * Broadcast to all children
     * - - - - - - - - - -
     * this.broadcastAll(...params)
     */
    broadcastAll(...params) {
      let emitChildren = function(){
        this.$children.forEach((component) => {
          component.$emit.apply(component, params)
          emitChildren.call(component)
        })
      }
      emitChildren.call(this)
    },
    /*
     * Broadcast to children by name
     * - - - - - - - - - -
     * this.broadcast('ComponentName', ...params)
     * this.broadcast('ComponentA,ComponentB', ...params)
     */
    broadcast(name, ...params) {
      let noticedNames = name.split(',')
      let noticedComponents = []
      let emitChildren = function(){
        this.$children.forEach((component) => {
          if (noticedNames.indexOf(component.$options.name) > -1) {
            noticedComponents.push(component)
          } else {
            emitChildren.call(component)
          }
        })
      }
      emitChildren.call(this)
      noticedComponents.forEach((c)=>c.$emit.apply(c, params))
    },
  },
}
