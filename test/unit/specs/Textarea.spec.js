import Vue from 'vue'
import Textarea from '../../../src/elems/Textarea'

describe('Textarea.vue', () => {

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Textarea
          name='test'
          value='Hello World'
        >
        </Textarea>
      }
    })
    expect(vm.$el.value).to.equal('Hello World')
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Textarea
          name='test'
          value='Hello World'
        >
        </Textarea>
      }
    })
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.value = 'test'
        vm.$el.dispatchEvent(new Event('input'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.equal('test')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.equal('Hello World')
          resolve()
        })
      }))
  })
})
