import Vue from 'vue'
import Row from '../../../src/elems/Row'
import Col from '../../../src/elems/Col'

describe('Row.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Row>
          Hello World
        </Row>
      }
    })
    expect(vm.$el.textContent).to.equal('Hello World')
  })

  it('spacing', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Row wrapper></Row>
      }
    })
    expect([].slice.call(vm.$el.classList)).to.include('wrapper')
  })

})
