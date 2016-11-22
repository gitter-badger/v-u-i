import Vue from 'vue'
import Radio from '../../../src/elems/Radio'

describe('Radio.vue', () => {

  it('empty slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Radio name='test'>
          </Radio>
        </div>
      }
    })
    let rds = [].slice.call(vm.$el.querySelectorAll('.i-radio'))
    expect(rds.length).to.equal(0)
  })

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Radio
            name='test'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Radio>
        </div>
      }
    })
    let rds = [].slice.call(vm.$el.querySelectorAll('.i-radio'))
    expect(rds.length).to.equal(3)
  })

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Radio
            name='test'
            value='read'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Radio>
        </div>
      }
    })
    let rds = [].slice.call(vm.$el.querySelectorAll('input'))
    rds.forEach(i=>{
      expect(i.checked).to.equal(i.value=='read')
    })
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Radio
            name='test'
            value='read'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Radio>
        </div>
      }
    })
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test', {})
    let musicRadio = vm.$el.querySelector('input[value=music]')
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        musicRadio.checked = true
        musicRadio.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect(vm.$children[0].iptValue).to.equal('music')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          expect(musicRadio.checked).to.be.false
          resolve()
        })
      }))
  })

})
