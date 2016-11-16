export const throttle = function(func, time=150){
  let prevExecTime = 0
  let result = undefined
  return function(){
    let now = Date.now()
    if(now - prevExecTime >= time || now - prevExecTime <= 0){
      result = func.apply(this, arguments)
      prevExecTime = now
    }
    return result
  }
}

export const debounce = function(func, time=150){
  let result = undefined
  let prevTimer = undefined
  return function(){
    let context = this
    let args = arguments
    clearTimeout(prevTimer)
    prevTimer = setTimeout(function(){
      result = func.apply(context, args)
    }, time)
    return result
  }
}
