/*
 * Get Form Field Values
 * @param form[HTMLFormElement]: form element
 * @return [Object]: values object
 */
export const getValues = (form) => {
  let btnTypes = ['submit', 'reset', 'button', 'image', 'file']
  let iptTags = ['input', 'textarea', 'select']
  return iptTags.map((tag)=>[].slice.call(form.getElementsByTagName(tag)))
  .reduce((res, i)=>res.concat(i), []).reduce((res, input) => {
    if (!input.name || btnTypes.indexOf(input.type) > -1) {
      return res
    } else if (input.tagName.toLowerCase() == 'select' && input.multiple) {
      res[input.name] = (res[input.name] || []).concat([].slice.call(
        input.options
      ).map((opt) => {
        return opt.selected ? opt.value : false
      }).filter((i)=>i))
    } else if (input.type == 'checkbox') {
      res[input.name] = res[input.name] || []
      if (input.checked && input.value) {
        res[input.name].push(input.value)
      }
    } else if (input.type == 'radio') {
      if (input.checked && input.value) {
        res[input.name] = input.value
      }
    } else if (input.value) {
      res[input.name] = input.value
    }
    return res
  }, {})
}





/*
 * Validate Value
 * @param value[String|Array]: validate value
 * @param rules[ArrayOfRule]: validate rules
 * @return [Array]: error messages
 */
let validateError = (message) => {
  throw new Error(`[VUI]: ValidateError-> ${message}`)
}
let validators = {
  required: {
    msg (value, values) {
      return this.message || `required`
    },
    fn (value, values) {
      return (
        !!value && value.length > 0
      ) || (
        typeof(value)=='number' && isNaN(value)==false
      )
    },
  },
  email: {
    msg (value, values) {
      return this.message || `invalid email`
    },
    fn (value, values) {
      return /^[^@\s]+@([^\.]+)(.[^\.]+){1,2}$/.test(value)
    },
  },
  custom: {
    msg (value, values) {
      return this.message || `invalid`
    },
    fn (value, values) {
      if (typeof(this.custom) != 'function') {
        validateError('rule custom must specify custom function')
      }
      return this.custom(value)
    },
  },
  pattern: {
    msg (value, values) {
      return this.message || `pattern ${this.pattern}`
    },
    fn (value, values) {
      let reg = null
      try {
        reg = new RegExp(this.pattern)
      } catch (e) {
        validateError('rule pattern must specify a RegExp value')
      }
      return reg.test(value)
    },
  },
  equal: {
    msg (value, values) {
      return this.message || `not equal to ${this.equal}`
    },
    fn (value, values) {
      if (!this.equal) {
        validateError('rule equal must specify equal field name')
      }
      return value === values[this.equal]
    },
  },
  min: {
    msg (value, values) {
      return this.message || `min ${this.min}`
    },
    fn (value, values) {
      if (typeof(this.min) != 'number') {
        validateError('rule min must specify min value')
      }
      return parseFloat(value) >= this.min
    },
  },
  max: {
    msg (value, values) {
      return this.message || `max ${this.max}`
    },
    fn (value, values) {
      if (typeof(this.max) != 'number') {
        validateError('rule max must specify max value')
      }
      return parseFloat(value) <= this.max
    },
  },
  minlength: {
    msg (value, values) {
      return this.message || `min length ${this.minlength}`
    },
    fn (value, values) {
      if (typeof(this.minlength) != 'number') {
        validateError('rule minlength must specify minlength value')
      }
      return value && value.length >= this.minlength
    },
  },
  maxlength: {
    msg (value, values) {
      return this.message || `max length ${this.maxlength}`
    },
    fn (value, values) {
      if (typeof(this.maxlength) != 'number') {
        validateError('rule maxlength must specify maxlength value')
      }
      return value && value.length <= this.maxlength
    },
  },
}
export const validateValue = (value, rules, values) => {
  return rules.map((rule) => {
    let validator = validators[rule.type]
    try {
      if (!validator) {
        validateError(`rule [${rule.type}] not found`)
      } else if (!validator.fn.call(rule, value, values)) {
        return validator.msg.call(rule, value, values)
      }
    } catch (e) {
      console && console.warn && console.warn(e)
    }
  }).filter((i)=>i)
}
