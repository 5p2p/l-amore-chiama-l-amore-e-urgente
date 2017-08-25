function modifyUser(key,data) {
  document.getElementById('editUser').style.display = 'block'

  document.getElementById("name").value = data.name;
  document.getElementById("email").value = data.email;
  document.getElementById("city").value = data.city;
  document.getElementById("mobile").value = data.mobile;
  document.getElementById("age").value = data.age;
  document.getElementById("intolerance").value = data.intolerance;

  document.getElementById('close').addEventListener('click', function () {
    document.getElementById('editUser').style.display = 'none'
  }, false)
}
