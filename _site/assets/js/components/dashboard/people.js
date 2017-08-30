components.dashboard.people = function (data, id, objKey, objValue) {
  var el = document.getElementById(id)
  el.innerHTML = ''
  for (let key in data) {
    if (data[key][objKey] === objValue || objKey === undefined) {
      var div = document.createElement('div')
      div.innerHTML = template.eventPeople(data[key],key)
      el.appendChild(div)
      document.getElementById('edit'+key).addEventListener('click', function (){
        editUser(data[key], key)
      }, false)
    }
  }
}
