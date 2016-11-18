import Vue from 'vue'
import Modal from '../../../src/elems/Modal'

describe('Modal.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Modal>
          Hello World
        </Modal>
      }
    })
    expect(vm.$el.textContent.trim()).to.equal('Hello World')
  })

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      data(){
        return {
          opened: false
        }
      },
      render(h){
        return <Modal
          test-destroy
          value={this.opened}
        >
          Hello World
        </Modal>
      }
    })
    expect([].slice.call(vm.$el.classList)).to.not.include('opened')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.opened = true
        vm.$nextTick(()=>{
          expect([].slice.call(vm.$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.close').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$el.classList)).to.not.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$destroy()
        expect(document.querySelector('[test-destroy]')).to.be.null
        resolve()
      }))
  })

  it('default value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      data(){
        return {
          opened: true
        }
      },
      render(h){
        return <Modal
          value={this.opened}
        >
          Hello World
        </Modal>
      }
    })
    expect([].slice.call(vm.$el.classList)).to.include('opened')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.opened = false
        vm.$nextTick(()=>{
          expect([].slice.call(vm.$el.classList)).to.not.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.opened = true
        vm.$nextTick(()=>{
          expect([].slice.call(vm.$el.classList)).to.include('opened')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$el.classList)).to.not.include('opened')
          resolve()
        })
      }))
  })

})
