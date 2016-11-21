import Vue from 'vue'
import Card from '../../../src/elems/Card'

describe('Card.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Card>
          <div slot='header'>header</div>
          <div>default</div>
          <div slot='footer'>footer</div>
        </Card>
      }
    })
    Object.keys(vm.$children[0].$slots).forEach(i=>{
      expect(i).to.equal(vm.$children[0].$slots[i][0].elm.textContent)
    })
  })

  it('spacing', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Card noHeaderSpacing noContentSpacing noFooterSpacing>
          <div slot='header'>header</div>
          <div>default</div>
          <div slot='footer'>footer</div>
        </Card>
      }
    })
    Object.keys(vm.$children[0].$slots).forEach(i=>{
      expect([].slice.call(vm.$children[0].$slots[i][0].elm.parentElement.classList)).to.include('no-spacing')
    })
  })

})
