services.people = function (data, role) {
  var local = {}
  for (var key in data){
    if (data[key].role === role) {
      local[key] = data[key]
    }
  }
  return local
}
