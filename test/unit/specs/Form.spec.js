import Vue from 'vue'
import Input from '../../../src/elems/Input'
import Form from '../../../src/elems/Form'
import FormItem from '../../../src/elems/FormItem'

describe('Form.vue', () => {

  it('slot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Form>
          Hello World
        </Form>
      }
    })
    expect(vm.$el.textContent).to.equal('Hello World')
  })

  it('event', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <Form validators={{
          test: [{type:'required'}]
        }}>
          <FormItem>
            <Input name='test'/>
          </FormItem>
        </Form>
      }
    })
    vm.$el.dispatchEvent(new Event('reset'))
    vm.$el.dispatchEvent(new Event('submit'))
    let input = vm.$el.querySelector('input')
    let formItem = vm.$el.querySelector('.i-form-item')
    let formItemVm = vm.$children[0].$children[0]
    return Promise.resolve()
      .then(()=>new Promise((resolve, reject)=>{
        input.dispatchEvent(new Event('input'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(formItem.classList)).to.include('error')
          resolve()
        })
      }))
      .then(()=>new Promise((resolve, reject)=>{
        input.value = 'test'
        input.dispatchEvent(new Event('input'))
        vm.$children[0].$nextTick(()=>{
          expect([].slice.call(formItem.classList)).to.not.include('error')
          resolve()
        })
      }))
  })

})
