import Vue from 'vue'
import Checkbox from '../../../src/elems/Checkbox'

describe('Checkbox.vue', () => {

  it('empty slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Checkbox name='test'>
          </Checkbox>
        </div>
      }
    })
    let cbs = [].slice.call(vm.$el.querySelectorAll('.i-checkbox'))
    expect(cbs.length).to.equal(0)
  })

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Checkbox
            name='test'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Checkbox>
        </div>
      }
    })
    let cbs = [].slice.call(vm.$el.querySelectorAll('.i-checkbox'))
    expect(cbs.length).to.equal(3)
  })

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Checkbox
            name='test'
            value={['read']}
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Checkbox>
        </div>
      }
    })
    let cbs = [].slice.call(vm.$el.querySelectorAll('input'))
    cbs.forEach(i=>{
      expect(i.checked).to.equal(i.value=='read')
    })
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Checkbox
            name='test'
            value={['read']}
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Checkbox>
        </div>
      }
    })
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    let musicCheckbox = vm.$el.querySelector('input[value=music]')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        musicCheckbox.checked = true
        musicCheckbox.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.eql(['read', 'music'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(musicCheckbox.checked).to.be.false
          resolve()
        })
      }))
  })

})
