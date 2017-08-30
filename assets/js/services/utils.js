function emailValidate(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
}

function anyEmpty(array) {
  var empty = false
  array.forEach( function (ele) {
    if (ele === '' || ele === undefined){
      empty = true
    }
  })
  return empty
}

function formAlert(alert) {
  if (alert) {
    document.getElementById('alert').textContent = alert
  } else {
    document.getElementById('alert').textContent = ''
  }
}

function capitalize(text)
{
 return text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
