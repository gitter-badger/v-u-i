import Vue from 'vue'
import Select from '../../../src/elems/Select'

describe('Select.vue', () => {

  it('empty slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Select name='test'>
        </Select>
      }
    })
    let sls = [].slice.call(vm.$el.querySelectorAll('.i-select-item'))
    expect(sls.length).to.equal(0)
  })

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Select
          name='test'
          value='read'
          options={[
            {value: 'read', text: 'read'},
            {value: 'music', text: 'music'},
            {value: 'sport', text: 'sport'}
          ]}
        >
        </Select>
      }
    })
    let sls = [].slice.call(vm.$el.querySelectorAll('.i-select-item'))
    expect(sls.length).to.equal(3)
  })

  it('value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Select
          name='test'
          options={[
            {value: 'read', text: 'read'},
            {value: 'music', text: 'music'},
            {value: 'sport', text: 'sport'}
          ]}
        >
        </Select>
      }
    })
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.selector').dispatchEvent(new Event('click'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.include('selecting')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        let readIpt = vm.$el.querySelector('.i-select-item:nth-child(1) input')
        readIpt.checked = true
        readIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.not.include('selecting')
          let opts = [].slice.call(vm.$el.querySelectorAll('select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.selector').dispatchEvent(new Event('click'))
        let musicIpt = vm.$el.querySelector('.i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['music'])
          resolve()
        })
      }))

  })

  it('multiple value', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <div test-close></div>
          <Select
            multiple
            name='test'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Select>
        </div>
      }
    })
    vm.$el.querySelector('.selector').dispatchEvent(new Event('click'))
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        let readIpt = vm.$el.querySelector('.i-select-item:nth-child(1) input')
        readIpt.checked = true
        readIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        let musicIpt = vm.$el.querySelector('.i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read', 'music'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        vm.$el.querySelector('.selector').dispatchEvent(new Event('click'))
        let musicIpt = vm.$el.querySelector('.i-select-item:nth-child(2) input')
        musicIpt.checked = false
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        document.body.firstChild.dispatchEvent(new Event('mousedown', {bubbles:true}))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(vm.$children[0].$el.classList)).to.not.include('selecting')
          resolve()
        })
      }))
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <div>
          <Select
            name='test1'
            value='read'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Select>
          <Select
            name='test2'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Select>
          <Select
            multiple
            name='test3'
            value={['read']}
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Select>
          <Select
            multiple
            name='test4'
            options={[
              {value: 'read', text: 'read'},
              {value: 'music', text: 'music'},
              {value: 'sport', text: 'sport'}
            ]}
          >
          </Select>
        </div>
      }
    })
    vm.$children[0].$emit.call(vm.$children[0], 'formValidate-test1', {})
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        let musicIpt = vm.$el.querySelector('.i-select:nth-child(1) .i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[0].$emit.call(vm.$children[0], 'formReseted')
        vm.$children[0].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('.i-select:nth-child(1) select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        let musicIpt = vm.$el.querySelector('.i-select:nth-child(2) .i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[1].$emit.call(vm.$children[1], 'formReseted')
        vm.$children[1].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('.i-select:nth-child(2) select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.be.empty
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        let musicIpt = vm.$el.querySelector('.i-select:nth-child(3) .i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[2].$emit.call(vm.$children[2], 'formReseted')
        vm.$children[2].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('.i-select:nth-child(3) select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.eql(['read'])
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        let musicIpt = vm.$el.querySelector('.i-select:nth-child(4) .i-select-item:nth-child(2) input')
        musicIpt.checked = true
        musicIpt.dispatchEvent(new Event('change'))
        vm.$children[3].$emit.call(vm.$children[3], 'formReseted')
        vm.$children[3].$nextTick(()=>{
          let opts = [].slice.call(vm.$el.querySelectorAll('.i-select:nth-child(4) select>option')).filter(i=>i.selected)
          expect(opts.map(i=>i.value)).to.be.empty
          resolve()
        })
      }))
  })
})
