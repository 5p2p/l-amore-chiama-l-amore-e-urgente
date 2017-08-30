components.dashboard.people = function (data, id) {
  var el = document.getElementById(id)
  for (var key in data) {
    var div = document.createElement('div')
    div.innerHTML = template.eventPeople(data[key],key)
    el.appendChild(div)
    document.getElementById('edit'+key).addEventListener('click', function (){
      editUser(key)
    }, false)
  }
}
