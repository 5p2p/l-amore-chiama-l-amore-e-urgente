function editUser(data, key) {

// VIEW after updating data
  let originalView = data.role

// SHOW DIALOG
  document.getElementById('opacityPage').style.display = 'block'
  document.getElementById('editUser').style.display = 'block'

// GET DATA
  document.getElementById("name").value = data.name;
  document.getElementById("email").value = data.email;
  document.getElementById("city").value = data.city;
  document.getElementById("mobile").value = data.mobile;
  document.getElementById("age").value = data.age;
  document.getElementById("intolerance").value = data.intolerance;

// RADIO (user roles)
if (data.role === store.config.roles.users|| data.role === undefined || data.role === '') {
  setUserRole()
} else if (data.role === store.config.roles.members) {
  setMemberRole()
} else if (data.role === store.config.roles.staff) {
  setStaffRole()
} else {
  setUserRole()
}
document.getElementById('users-click-radio').addEventListener('click', setUserRole, false)
document.getElementById('members-click-radio').addEventListener('click', setMemberRole, false)
document.getElementById('staff-click-radio').addEventListener('click', setStaffRole, false)

function setUserRole(){
  document.getElementById('users-radio').checked = true;
  store.people[key].role = store.config.roles.users
}
function setMemberRole(){
  document.getElementById('members-radio').checked = true;
  store.people[key].role = store.config.roles.members
}
function setStaffRole(){
  document.getElementById('staff-radio').checked = true;
  store.people[key].role = store.config.roles.staff
}

// UPDATE
document.getElementById('update').addEventListener('click', updateCall, false)
function updateCall () {
  document.getElementById('editUser').style.display = 'none'

  store.people[key].name   = document.getElementById("name").value,
  store.people[key].email  = document.getElementById("email").value,
  store.people[key].city   = document.getElementById("city").value,
  store.people[key].mobile = document.getElementById("mobile").value,
  store.people[key].age    = document.getElementById("age").value,
  store.people[key].intolerance = document.getElementById("intolerance").value

  // // update views
  // let div = document.getElementById(key)
  // div.innerHTML = template.eventPeople(store.people[key],key)
  // document.getElementById('edit'+key).addEventListener('click', function (){
  //   editUser(key)
  // }, false)
  // components.dashboard.people(store.people, 'store-people', 'role', originalView)
  // components.dashboard.stats(store.people, 'store-stats')

  // update firebase
  refUnique.child(key).update({name: store.people[key].name})
  refPeople.child(key).update(store.people[key])

  // remove listeners to avoid strange overwritings
  removeAllListeners()
}

// CLOSE
  document.getElementById('close').addEventListener('click', closeCall, false)
  function closeCall () {
      document.getElementById('editUser').style.display = 'none'
      // document.getElementById('close').removeEventListener('click', closeCall , false)
      removeAllListeners()
  }

  // DELETE
  document.getElementById('delete').addEventListener('click', deleteCall, false)
  function deleteCall () {
    var typeDelete = document.getElementById("typeDelete")
    var controlText = 'DELETE'
    var text = typeDelete.value
    if (text === controlText) {
      document.getElementById('delete').innerText = '...'
      delete store.people[key]
      document.getElementById(key).style.display = 'none'
      setTimeout(function(){
        document.getElementById('editUser').style.display = 'none'
        document.getElementById('delete').innerText = 'Delete'
        typeDelete.value = ''
      }, 1000)

      // update views
      // components.dashboard.people(store.people, 'store-people', 'role', originalView)
      // components.dashboard.stats(store.people, 'store-stats')

      // update firebase
      refUnique.child(key).remove()
      refPeople.child(key).remove()

      removeAllListeners()
    } else {
      typeDelete.value = ''
      console.log('DELETE text not written correctly');
    }
  }

  // REMOVE LISTENERS
  function removeAllListeners () {
        document.getElementById('update').removeEventListener('click', updateCall , false)
        document.getElementById('close').removeEventListener('click', closeCall , false)
        document.getElementById('delete').removeEventListener('click', deleteCall , false)
        document.getElementById('users-click-radio').removeEventListener('click', setUserRole , false)
        document.getElementById('members-click-radio').removeEventListener('click', setMemberRole , false)
        document.getElementById('staff-click-radio').removeEventListener('click', setStaffRole , false)
  }
}
