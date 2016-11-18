import Vue from 'vue'
import Col from '../../../src/elems/Col'

describe('Col.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Col>
          Hello World
        </Col>
      }
    })
    expect(vm.$el.textContent).to.equal('Hello World')
  })

  it('size', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Col>xs-12</Col>
          <Col xs={1}>xs-1</Col>
          <Col sm={1}>sm-1</Col>
          <Col md={1}>md-1</Col>
          <Col lg={1}>lg-1</Col>
          <Col lg={1}>lg-1</Col>
          <Col lgOffset={1}>lg-offset-1</Col>
        </div>
      }
    })
    let cols = [].slice.call(vm.$el.querySelectorAll('.i-col'))
    cols.forEach(i=>{
      expect([].slice.call(i.classList)).to.include(i.textContent)
    })
  })

})
