import Vue from 'vue'
import Popup from '../../../src/elems/Popup'

describe('Popup.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Popup
            test-destroy
          >
            <div class='trigger'></div>
            <div slot='content'>Hello World</div>
          </Popup>
        </div>
      }
    })
    expect(vm.$children[0].$el.textContent.trim()).to.equal('Hello World')
    let trigger = vm.$el.querySelector('.trigger')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        trigger.dispatchEvent(new Event('mouseenter'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$destroy()
        expect(document.querySelector('[test-destroy]')).to.be.null
        resolve()
      }))
  })

  it('trigger', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Popup
            trigger='hover-click'
            position='bottom'
          >
            <div class='trigger'></div>
            <div slot='content'>Hello World</div>
          </Popup>
        </div>
      }
    })
    let trigger = vm.$el.querySelector('.trigger')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        trigger.dispatchEvent(new Event('mouseenter'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$el.dispatchEvent(new Event('click', {bubbles:true}))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        document.body.firstChild.dispatchEvent(new Event('click', {bubbles:true}))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.not.include('opened')
          resolve()
        })
      }))
  })

  it('click trigger', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Popup
            trigger='click'
            position='right'
          >
            <div class='trigger'></div>
            <div slot='content'>right</div>
          </Popup>
        </div>
      }
    })
    let trigger = vm.$el.querySelector('.trigger')
    trigger.getBoundingClientRect = null
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        trigger.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        trigger.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.not.include('opened')
          resolve()
        })
      }))
  })

  it('offsetWidth', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Popup
            position='left'
          >
            <div class='trigger'></div>
            <div slot='content'>Hello World</div>
          </Popup>
        </div>
      }
    })
    let trigger = vm.$el.querySelector('.trigger')
    trigger.getBoundingClientRect = null
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        trigger.dispatchEvent(new Event('mouseenter'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('opened')
          resolve()
        })
      }))
  })

  it('multiple popup', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Popup
            popup-1
          >
            <div class='trigger-1'></div>
            <div slot='content'>Hello World</div>
          </Popup>
          <Popup
            popup-2
          >
            <div class='trigger-2'></div>
            <div slot='content'>Hello World</div>
          </Popup>
        </div>
      }
    })
    let trigger1 = vm.$el.querySelector('.trigger-1')
    let trigger2 = vm.$el.querySelector('.trigger-2')
    trigger1.dispatchEvent(new Event('mouseenter'))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        trigger2.dispatchEvent(new Event('mouseenter'))
        vm.$children[1].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.not.include('opened')
          expect([].slice.call(vm.$children[1].$el.classList)).to.include('opened')
          resolve()
        })
      }))
  })

})
