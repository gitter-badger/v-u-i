import Vue from 'vue'
import Pagination from '../../../src/elems/Pagination'

describe('Pagination.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Pagination
          total={1320}
          size={100}
          page={2}
        >
        </Pagination>
      }
    })
    expect(vm.$el.querySelectorAll('li').length).to.equal(11)
  })

  it('sample', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Pagination
          total={1000}
          size={100}
          page={2}
          type='simple'
        >
        </Pagination>
      }
    })
    expect(vm.$el.querySelectorAll('li').length).to.equal(3)
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('li:first-child').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$el.querySelector('li:nth-child(2)').textContent.trim()).to.equal('1')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('li:nth-child(2)').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$el.querySelector('li:nth-child(2)').textContent.trim()).to.equal('1')
          resolve()
        })
      }))
  })

  it('small', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Pagination
          total={1000}
          size={100}
          page={9}
          type='small'
        >
        </Pagination>
      }
    })
    expect(vm.$el.querySelectorAll('li').length).to.equal(7)
  })

})
