<template>
  <div>
    <h3>Form</h3>
    
    <i-card>
      <h5 slot='header'>Basic Form</h5>
      <i-form
        :validators='this.basicValidators'
      >
        <i-form-item label='User Name'>
          <i-input name='userName' placeholder='User Name'></i-input>
        </i-form-item>
        <i-form-item label='User Password'>
          <i-input name='userPwd' password placeholder='User Password'></i-input>
        </i-form-item>
        <i-form-item label='Confirm Password'>
          <i-input name='userRePwd' password placeholder='Confirm Password'></i-input>
        </i-form-item>
        <i-form-item label='Age'>
          <i-input-number
            name='age'
            placeholder='age'
            :min='-10'
            :max='10'
            :step='2'
          >
          </i-input-number>
        </i-form-item>
        <i-form-item label='Sex'>
          <i-radio
            name='sex'
            value='male'
            :options='[
              {value: "male", text: "male"},
              {value: "female", text: "female"},
              {value: "other", text: "other"},
            ]'
          >
          </i-radio>
        </i-form-item>
        <i-form-item label='Favorite'>
          <i-checkbox
            name='favorite'
            :options='[
              {value: "read", text: "read"},
              {value: "music", text: "music"},
              {value: "sport", text: "sport"},
            ]'
          >
          </i-checkbox>
        </i-form-item>
        <i-form-item label='Type'>
          <i-select
            name='type'
            placeholder='type'
            value='one'
            :options='[
              {value: "one", text: "one"},
              {value: "two", text: "two"},
              {value: "three", text: "three"},
            ]'
          >
          </i-select>
        </i-form-item>
        <i-form-item label='Language'>
          <i-select
            name='language'
            placeholder='choice your country'
            multiple
            height='200px'
            :value='["zh-cn", "en-us"]'
            :options='[
              {value: "zh-cn", text: "Chinese"},
              {value: "fr-fr", text: "French"},
              {value: "ja-jp", text: "Japanese"},
              {value: "en-us", text: "English"},
              {value: "en_au", text: "Australia"},
              {value: "en-ca", text: "Canada"},
              {value: "en-gb", text: "Britain"},
              {value: "en-ie", text: "Ireland"},
              {value: "en-nz", text: "NewZealand"},
              {value: "en-za", text: "SouthAfrica"},
              {value: "es-bo", text: "Bolivia"},
              {value: "es-ar", text: "Argentina"},
              {value: "es-cl", text: "Chile"},
              {value: "es-co", text: "Columbia"},
            ]'
          >
          </i-select>
        </i-form-item>
        <i-form-item label='Percent'>
          <i-slider
            name='percent'
            :min='1'
            :max='100'
            :step='5'
            :value='25'
          >
          </i-slider>
        </i-form-item>
        <i-form-item label='desc'>
          <i-textarea
            name='desc'
            placeholder='descriptions'
            value='wa ha ha ha'
            rows='5'
          >
          </i-textarea>
        </i-form-item>
        <i-form-item label='Remember'>
          <i-switch name='remember' value='on'>Remember Login</i-switch>
        </i-form-item>
        <i-form-item>
          <i-btn html-type='submit'>Submit</i-btn>
          <i-btn type='basic' html-type='reset'>Reset</i-btn>
        </i-form-item>
      </i-form>
    </i-card>

    <i-card>
      <h5 slot='header'>Disabled Form</h5>
      <i-form>
        <i-form-item label='User Name'>
          <i-input disabled name='dun'></i-input>
        </i-form-item>
        <i-form-item label='User Password'>
          <i-input disabled password name='dup'></i-input>
        </i-form-item>
        <i-form-item label='Confirm Password'>
          <i-input disabled password name='durp'></i-input>
        </i-form-item>
        <i-form-item label='Age'>
          <i-input-number
            name='age'
            disabled
            :min='-10'
            :max='10'
            :step='2'
          >
          </i-input-number>
        </i-form-item>
        <i-form-item label='Sex'>
          <i-radio
            name='sex'
            value='male'
            :options='[
              {disabled: true, value: "male", text: "male"},
              {disabled: true, value: "female", text: "female"},
              {disabled: true, value: "other", text: "other"},
            ]'
          >
          </i-radio>
        </i-form-item>
        <i-form-item label='Favorite'>
          <i-checkbox
            name='favorite'
            :options='[
              {disabled: true, value: "read", text: "read"},
              {disabled: true, value: "music", text: "music"},
              {disabled: true, value: "sport", text: "sport"},
            ]'
          >
          </i-checkbox>
        </i-form-item>
        <i-form-item label='Type'>
          <i-select
            name='type'
            placeholder='type'
            disabled
            :options='[
              {value: "one", text: "one"},
              {value: "two", text: "two"},
              {value: "three", text: "three"},
            ]'
          >
          </i-select>
        </i-form-item>
        <i-form-item label='Language'>
          <i-select
            name='language'
            placeholder='choice your country'
            multiple
            disabled
            :options='[
              {value: "zh-cn", text: "Chinese"},
              {value: "fr-fr", text: "French"},
              {value: "ja-jp", text: "Japanese"},
              {value: "en-us", text: "English"},
              {value: "en_au", text: "Australia"},
              {value: "en-ca", text: "Canada"},
              {value: "en-gb", text: "Britain"},
              {value: "en-ie", text: "Ireland"},
              {value: "en-nz", text: "NewZealand"},
              {value: "en-za", text: "SouthAfrica"},
              {value: "es-bo", text: "Bolivia"},
              {value: "es-ar", text: "Argentina"},
              {value: "es-cl", text: "Chile"},
              {value: "es-co", text: "Columbia"},
            ]'
          >
          </i-select>
        </i-form-item>
        <i-form-item label='Percent'>
          <i-slider
            name='percent'
            disabled
            :min='1'
            :max='100'
            :step='5'
            :value='25'
          >
          </i-slider>
        </i-form-item>
        <i-form-item label='desc'>
          <i-textarea
            name='desc'
            disabled
            placeholder='wa ha ha ha'
            rows='5'
          >
          </i-textarea>
        </i-form-item>
        <i-form-item label='Remember'>
          <i-switch disabled name='remember'>Remember Login</i-switch>
        </i-form-item>
        <i-form-item>
          <i-btn html-type='submit'>Submit</i-btn>
        </i-form-item>
      </i-form>
    </i-card>

    <i-card>
      <h5 slot='header'>Readonly Form</h5>
      <i-form>
        <i-form-item label='User Name'>
          <i-input readonly name='run'></i-input>
        </i-form-item>
        <i-form-item label='User Password'>
          <i-input readonly password name='rup'></i-input>
        </i-form-item>
        <i-form-item label='Confirm Password'>
          <i-input readonly password name='rurp'></i-input>
        </i-form-item>
        <i-form-item label='Age'>
          <i-input-number
            name='age'
            readonly
            :min='-10'
            :max='10'
            :step='2'
          >
          </i-input-number>
        </i-form-item>
        <i-form-item label='Sex'>
          <div class='text'>Radio No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item label='Favorite'>
          <div class='text'>Checkbox No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item label='Type'>
          <div class='text'>Select No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item label='Language'>
          <div class='text'>Select No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item label='Percent'>
          <div class='text'>Slider No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item label='desc'>
          <i-textarea
            name='desc'
            readonly
            placeholder='wa ha ha ha'
            rows='5'
          >
          </i-textarea>
        </i-form-item>
        <i-form-item label='Remember'>
          <div class='text'>Switch No Readonly State, please use disabled</div>
        </i-form-item>
        <i-form-item>
          <i-btn html-type='submit'>Submit</i-btn>
        </i-form-item>
      </i-form>
    </i-card>

    <i-card>
      <h5 slot='header'>Inline Form</h5>
      <i-form inline>
        <i-form-item label='User Name'>
          <i-input name='iun'></i-input>
        </i-form-item>
        <i-form-item label='User Password'>
          <i-input password name='iup'></i-input>
        </i-form-item>
        <i-form-item>
          <i-btn html-type='submit'>Submit</i-btn>
        </i-form-item>
      </i-form>
    </i-card>

    <i-card>
      <h5 slot='header'>Horizontal Form</h5>
      <i-form horizontal>
        <i-form-item
          label='User Name'
          label-width='30%'
          content-width='70%'
        >
          <i-input name='hun'></i-input>
        </i-form-item>
        <i-form-item label='User Password'>
          <i-input password name='hup'></i-input>
        </i-form-item>
        <i-form-item>
          <i-btn html-type='submit'>Submit</i-btn>
        </i-form-item>
      </i-form>
    </i-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      basicValidators: {
        userName: [{
          type: 'required',
          message: 'please input your user name'
        }, {
          type: 'email'
        }],
        userPwd: [{
          type: 'required'
        }, {
          type: 'minlength', minlength: 2
        }, {
          type: 'maxlength', maxlength: 8
        }, {
          type: 'pattern', pattern: /^[a-z]+$/
        }],
        userRePwd: [{
          type: 'required'
        }, {
          type: 'equal', equal: 'userPwd'
        }],
        age: [{
          type: 'required'
        }, {
          type: 'min', min: 0
        }, {
          type: 'max', max: 6
        }],
        sex: [{
          type: 'custom', custom: (value)=>{
            return value == 'male' || value == 'female'
          },
          message: 'only male or female'
        }],
        favorite: [{
          type: 'required'
        }, {
          type: 'minlength', minlength: 2,
          message: 'select two favorite'
        }],
        type: [{
          type: 'required'
        }],
        language: [{
          type: 'required'
        }, {
          type: 'minlength', minlength: 2
        }],
        percent: [{
          type: 'max', max: 20
        }],
        desc: [{
          type: 'required'
        }, {
          type: 'maxlength', maxlength: 10
        }],
      }
    }
  },
  components: {
  }
}
</script>
