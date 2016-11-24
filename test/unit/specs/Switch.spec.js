import Vue from 'vue'
import Switch from '../../../src/elems/Switch'

describe('Switch.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Switch
          name='test'
        >
          Hello World
        </Switch>
      }
    })
    expect(vm.$el.textContent.trim()).to.equal('Hello World')
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Switch
          name='test'
          value='on'
        >
          Hello World
        </Switch>
      }
    })
    let onIpt = vm.$el.querySelector('input[value=on]')
    let offIpt = vm.$el.querySelector('input[value=off]')
    expect(onIpt.checked).to.be.true
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        offIpt.checked = true
        offIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(onIpt.checked).to.be.false
          expect(offIpt.checked).to.be.true
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(onIpt.checked).to.be.true
          resolve()
        })
      }))
  })

})
