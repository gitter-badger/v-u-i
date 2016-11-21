import Vue from 'vue'
import Btn from '../../../src/elems/Btn'
import BtnGrp from '../../../src/elems/BtnGrp'

describe('BtnGrp.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <BtnGrp>
          Hello World
        </BtnGrp>
      }
    })
    expect(vm.$el.textContent).to.equal('Hello World')
  })

  it('type', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <BtnGrp type='vertical'></BtnGrp>
      }
    })
    expect([].slice.call(vm.$el.classList)).to.include('vertical')
  })

})
