import Vue from 'vue'
import Vui from '../../../src/index'

describe('Vui.vue', () => {
  it('message', () => {
    window.Vue = Vue
    __webpack_require__.c[require.resolve('../../../src/index')] = undefined
    require('../../../src/index')
    const vm = new Vue({
      el: document.createElement('div')
    })
    vm.$message({message: 'Hello World', time: 1000})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$nextTick(()=>{
          expect(document.querySelector('.i-message').textContent.trim()).to.equal('Hello World')
          setTimeout(()=>{
            expect(document.querySelector('.i-message')).to.be.null
            resolve()
          }, 1000)

        })
      }))
  })

  it('close message', () => {
    Vue.use(Vui)
    expect(Vui.install.installed).to.be.true
    let testObj = {}
    Vui.install(testObj)
    expect(Object.keys(testObj).length).to.equal(0)
    const vm = new Vue({
      el: document.createElement('div')
    })
    vm.$message({message: 'Hello World'})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        document.querySelector('.i-message').dispatchEvent(new Event('click'))
        vm.$nextTick(()=>{
          expect(document.querySelector('.i-message')).to.be.null
          resolve()
        })
      }))
  })

})
