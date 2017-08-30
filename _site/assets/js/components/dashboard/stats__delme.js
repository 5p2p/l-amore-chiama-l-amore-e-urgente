components.dashboard.stats = function (data, id) {
  var stats = {}
  for (var key in data){
    stats[data[key].role]  = stats[data[key].role] + 1 || 1
  }
  console.log(stats);
  var el = document.getElementById(id)
  el.innerHTML = ''
  var roleList = store.config.people.roles
  var cazrole = ''
  Object.keys(roleList).forEach(function (roleKey, xx) {
    console.log(roleKey);
    console.log(xx);
    cazrole = roleList[roleKey]
    if (stats[roleKey]) {
      el.innerHTML += `
      <div id="stats-${roleKey}" class="stats-content">${stats[roleKey]}
        <span class="">${capitalize(cazrole)}</span>
      </div>
      `
      // var keyListener = roleKey
      // var roleListener= roleList[roleKey]
      // function (keyListener, roleListener) {
      //   document.getElementById('stats-'+keyListener).addEventListener('click', function (){
      //     bumtest(roleListener)
      //   }, false)
      // }
    }
  })
}

function bumtest(stracaz) {
  console.log(stracaz);
}
