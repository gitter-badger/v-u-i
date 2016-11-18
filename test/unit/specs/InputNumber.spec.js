import Vue from 'vue'
import InputNumber from '../../../src/elems/InputNumber'

describe('InputNumber.vue', () => {

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <InputNumber
          name='test'
          value={20}
        >
        </InputNumber>
      }
    })
    let input = vm.$el.querySelector('input')
    expect(parseInt(input.value)).to.equal(20)
  })

  it('default value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <InputNumber
          name='test'
        >
        </InputNumber>
      }
    })
    let input = vm.$el.querySelector('input')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        input.dispatchEvent(new Event('blur'))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(0)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.minus').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(-1)
          resolve()
        })
      }))
  })

  it('readonly', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <InputNumber
          name='test'
          value={20}
          readonly
        >
        </InputNumber>
      }
    })
    let input = vm.$el.querySelector('input')
    expect(input.readOnly).to.be.true
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.minus').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(20)
          resolve()
        })
      }))
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <InputNumber
          name='test'
          value={20}
          max={60}
        >
        </InputNumber>
      }
    })
    let input = vm.$el.querySelector('input')
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        input.value = '50'
        input.dispatchEvent(new Event('input'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.equal(50)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        input.value = '80'
        input.dispatchEvent(new Event('blur'))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(60)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.minus').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(59)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(20)
          resolve()
        })
      }))
  })
})
