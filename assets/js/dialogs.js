function editUser(key) {
// SHOW DIALOG
  document.getElementById('opacityPage').style.display = 'block'
  document.getElementById('editUser').style.display = 'block'

// GET DATA
  var data = store.people[key]
  document.getElementById("name").value = data.name;
  document.getElementById("email").value = data.email;
  document.getElementById("city").value = data.city;
  document.getElementById("mobile").value = data.mobile;
  document.getElementById("age").value = data.age;
  document.getElementById("intolerance").value = data.intolerance;

// UPDATE
document.getElementById('update').addEventListener('click', function updateCall () {
  document.getElementById('editUser').style.display = 'none'
  // var defaultLabel = document.getElementById('update').innerText
  // document.getElementById('update').innerText = '...'
  // setTimeout(function(){
  //   document.getElementById('editUser').style.display = 'none'
  //   document.getElementById('update').innerText = defaultLabel
  // }, 1000)

  // var dataUpdate = {
  store.people[key] = {
    name   : document.getElementById("name").value,
    email  : document.getElementById("email").value,
    city   : document.getElementById("city").value,
    mobile : document.getElementById("mobile").value,
    age    : document.getElementById("age").value,
    intolerance : document.getElementById("intolerance").value
  }

  // // update views
  let div = document.getElementById(key)
  div.innerHTML = template.eventPeople(store.people[key],key)
  document.getElementById('edit'+key).addEventListener('click', function (){
    editUser(key)
  }, false)
  // // update firebase
  refPeople.child(key).update(store.people[key])

  document.getElementById('update').removeEventListener('click', updateCall , false)
}, false)

// CLOSE
  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('editUser').style.display = 'none'
  }, false)
}
