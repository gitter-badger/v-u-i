import Vue from 'vue'
import Collapse from '../../../src/elems/Collapse'

describe('Collapse.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Collapse
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Collapse>
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
        return <Collapse
          value='first'
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Collapse>
      }
    })

    let opened = [].slice.call(vm.$el.querySelectorAll('.opened'))
    expect(opened.length).to.equal(1)
    expect(opened[0].querySelector('.content').textContent).to.equal('first content')
  })

  it('multiple value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Collapse
          multiple
          value={['first', 'third']}
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Collapse>
      }
    })
    Object.keys(vm.$children[0].$slots).forEach(i=>{
      expect(
        vm.$children[0].$slots[i][0].elm.parentElement.parentElement.className
      ).to.equal(
        ['first', 'third'].indexOf(i) < 0 ? '' : 'opened'
      )
    })
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Collapse
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Collapse>
      }
    })
    let firstLabel = vm.$children[0].$el.querySelector('div:first-child>.label')
    firstLabel.dispatchEvent(new Event('click'))
    return new Promise((resolve, reject)=>{
      vm.$children[0].$nextTick(()=>{
        expect(firstLabel.parentElement.className).to.equal('opened')
        firstLabel.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(firstLabel.parentElement.className).to.equal('')
          resolve()
        })
      })
    })
  })

  it('multiple event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Collapse
          multiple
          items={[
            { name: 'first', text: 'First item' },
            { name: 'second', text: 'Second item' },
            { name: 'third', text: 'Third item' },
          ]}
        >
          <div slot='first'>first content</div>
          <div slot='second'>second content</div>
          <div slot='third'>third content</div>
        </Collapse>
      }
    })
    let firstLabel = vm.$children[0].$el.querySelector('div:first-child>.label')
    firstLabel.dispatchEvent(new Event('click'))
    return new Promise((resolve, reject)=>{
      vm.$children[0].$nextTick(()=>{
        expect(firstLabel.parentElement.className).to.equal('opened')
        firstLabel.dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect(firstLabel.parentElement.className).to.equal('')
          resolve()
        })
      })
    })
  })

})
