import Vue from 'vue'
import Tab from '../../../src/elems/Tab'

describe('Tab.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Tab
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Tab>
      }
    })
    Object.keys(vm.$children[0].$slots).forEach(i=>{
      expect(i+' content').to.equal(vm.$children[0].$slots[i][0].elm.textContent)
    })
  })

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Tab
          value='second'
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Tab>
      }
    })
    expect(vm.$el.querySelector('li.opened').textContent.trim()).to.equal('Second item')
    expect(vm.$children[0].$slots['second'][0].elm.parentElement.className).to.equal('opened')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('li:last-child').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$el.querySelector('li.opened').textContent.trim()).to.equal('Third item')
          expect(vm.$children[0].$slots['third'][0].elm.parentElement.className).to.equal('opened')
          resolve()
        })
      }))
  })

  it('empty slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Tab
          items={[]}
        >
        </Tab>
      }
    })
    expect(vm.$el.querySelectorAll('li').length).to.equal(0)
  })

})
