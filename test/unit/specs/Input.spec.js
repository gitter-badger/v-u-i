import Vue from 'vue'
import Input from '../../../src/elems/Input'

describe('Input.vue', () => {

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Input
          name='test'
          value='Hello World'
        >
        </Input>
      }
    })
    expect(vm.$el.value).to.equal('Hello World')
    expect(vm.$el.type).to.equal('text')
  })

  it('password', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Input
          name='test'
          password
        >
        </Input>
      }
    })
    expect(vm.$el.type).to.equal('password')
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Input
          name='test'
          value='Hello World'
        >
        </Input>
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
