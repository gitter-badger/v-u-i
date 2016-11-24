import Vue from 'vue'
import Slider from '../../../src/elems/Slider'

let genEvent = (type, x, y=0)=>{
  let evt = document.createEvent('MouseEvent')
  evt.initMouseEvent(type, false, false, window, 0, 0, 0, x, y)
  return evt
}

describe('Slider.vue', () => {

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Slider
          name='test'
          value={20}
        >
        </Slider>
      }
    })
    let input = vm.$el.querySelector('input')
    expect(parseInt(input.value)).to.equal(20)
    let btn = vm.$el.querySelector('.btn')
    btn.parentElement.style.width = '10px'
    let width = 10
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        btn.dispatchEvent(genEvent('mousedown', width*0.2))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(btn.classList)).to.include('dropping')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        window.dispatchEvent(genEvent('mousemove', width))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(100)
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        window.dispatchEvent(genEvent('mouseup', width))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(btn.classList)).to.not.include('dropping')
          resolve()
        })
      }))
  })

  it('disabled', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Slider
          name='test'
          disabled
          value={20}
        >
        </Slider>
      }
    })
    let input = vm.$el.querySelector('input')
    let btn = vm.$el.querySelector('.btn')
    btn.parentElement.style.width = '10px'
    let width = 10
    btn.dispatchEvent(genEvent('mousedown', width*0.2))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        window.dispatchEvent(genEvent('mousemove', width))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(20)
          resolve()
        })
      }))
  })

  it('step', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Slider
          name='test'
          step={20}
          value={20}
        >
        </Slider>
      }
    })
    let input = vm.$el.querySelector('input')
    let btn = vm.$el.querySelector('.btn')
    btn.parentElement.style.width = '10px'
    let width = 10
    btn.dispatchEvent(genEvent('mousedown', width*0.2))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        window.dispatchEvent(genEvent('mousemove', width*0.3))
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(40)
          resolve()
        })
      }))
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Slider
          name='test'
          value={20}
        >
        </Slider>
      }
    })
    let input = vm.$el.querySelector('input')
    let btn = vm.$el.querySelector('.btn')
    btn.parentElement.style.width = '10px'
    let width = 10
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    btn.dispatchEvent(genEvent('mousedown', width*0.2))
    window.dispatchEvent(genEvent('mouseup', width*0.3))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(parseInt(input.value)).to.equal(20)
          resolve()
        })
      }))
  })

})
