import Vue from 'vue'
import { getValues, validateValue } from '../../../src/utils/formHelper'

describe('formHelper.vue', () => {
  it('validateValue', () => {
    let values = {
      email: 'test@test.com',
      age: 20
    }
    let rules = {
      email: [
        { type: 'required', message: 'must have name'},
        { type: 'email' },
        { type: 'minlength', minlength: 5 },
        { type: 'maxlength', maxlength: 50 },
        { type: 'custom', custom:(v)=>v.indexOf('test')>-1, message: 'no test' },
        { type: 'pattern', pattern: /\.com$/, message: 'endswith .com' }
      ],
      age: [
        { type: 'min', min: 18 },
        { type: 'max', max: 65 },
        { type: 'equal', equal: 'email' }
      ]
    }
    expect(validateValue(values.email, rules.email, values).length).to.equal(0)
    expect(validateValue(values.age, rules.age, values)).to.eql(['not equal to email'])
  })

  it('getValues', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => {
        return <form>
          <select name='select-single'>
            <option value='opt1' selected>opt1</option>
            <option value='opt2'>opt2</option>
            <option value='opt3'>opt3</option>
          </select>
          <select name='select-multiple' multiple>
            <option value='opt1' selected>opt1</option>
            <option value='opt2' selected>opt2</option>
            <option value='opt3'>opt3</option>
          </select>
          <div>
            <input type='radio' name='radio' value='rd1' checked/>
            <input type='radio' name='radio' value='rd2'/>
            <input type='radio' name='radio' value='rd3'/>
          </div>
          <div>
            <input type='checkbox' name='checkbox' value='ck1'  checked/>
            <input type='checkbox' name='checkbox' value='ck2'  checked/>
            <input type='checkbox' name='checkbox' value='ck3'/>
          </div>
          <div>
            <input type='text' value='no name will be ignore'/>
            <input type='button' name='button' value='button will be ignore'/>

            <input type='text' name='text' value='text'/>
            <input type='password' name='password' value='password'/>
            <textarea name='textarea'>textarea</textarea>
          </div>
        </form>
      }
    })
    let values = getValues(vm.$el)
    let beValues = {
      'select-single': 'opt1',
      'select-multiple': ['opt1', 'opt2'],
      radio: 'rd1',
      checkbox: ['ck1', 'ck2'],
      text: 'text',
      password: 'password',
      textarea: 'textarea'
    }
    expect(values).to.deep.equal(beValues)
  })

})
