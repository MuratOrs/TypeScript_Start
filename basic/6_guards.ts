function strip(x: string | number){
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim
}

class MyReponse {
  header = 'reponse header'
  result = 'reponse result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyReponse | MyError) {
  if (res instanceof MyReponse) {
    return {
        info: res.header  + res.result
      }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

//==========================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  //,.. 
}

setAlertType('success')
setAlertType('warning')

