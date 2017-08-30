components.dashboard.stats = function (data, id) {
  var stats = {}
  for (var key in data){
    stats[data[key].role]  = stats[data[key].role] + 1 || 1
  }
  var elStats = document.getElementById(id)
  elStats.innerHTML = ''
  for (let key in stats) {
    var nn = stats[key]
    var el = document.createElement('div')
    el.id = 'stats-'+key
    el.className += 'stats-content'
    el.innerHTML = `<span class='two-digits'>${nn}</span> ${capitalize(key)}`
    el.onclick = function () {
      components.dashboard.people(store.people, 'store-people', 'role', key)
    }
    elStats.appendChild(el)
  }
}
