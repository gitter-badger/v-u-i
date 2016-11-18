import Vue from 'vue'
import Btn from '../../../src/elems/Btn'

describe('Btn.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn>text</Btn>
          <Btn><b>html</b></Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    expect(btns[0].textContent).to.equal('text')
    expect(btns[1].childElementCount).to.equal(1)
  })

  it('type', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn type='basic'>basic</Btn>
          <Btn type='text'>text</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    btns.forEach((btn)=>expect([].slice.call(btn.classList)).to.include(btn.textContent))
  })

  it('radius', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn radius='circle'>circle</Btn>
          <Btn radius='vertical'>vertical</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    btns.forEach((btn)=>expect([].slice.call(btn.classList)).to.include(btn.textContent))
  })

  it('size', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn size='large'>large</Btn>
          <Btn size='small'>small</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    btns.forEach((btn)=>expect([].slice.call(btn.classList)).to.include(btn.textContent))
  })

  it('state', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn loading>loading</Btn>
          <Btn disabled>disabled</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    expect([].slice.call(btns[0].classList)).to.include(btns[0].textContent)
    expect(btns[1].disabled).to.be.true
  })

  it('display', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn display='block'>block</Btn>
          <Btn display='left'>left</Btn>
          <Btn display='right'>right</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    btns.forEach((btn)=>expect([].slice.call(btn.classList)).to.include(btn.textContent))
  })

  it('button type', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Btn>button</Btn>
          <Btn htmlType='submit'>submit</Btn>
          <Btn htmlType='reset'>reset</Btn>
        </div>
      }
    })
    let btns = [].slice.call(vm.$el.querySelectorAll('button'))
    btns.forEach((btn)=>expect(btn.type).to.equal(btn.textContent))
  })

})
