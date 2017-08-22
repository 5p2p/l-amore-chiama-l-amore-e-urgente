var template = {
  test: function (data) {
    return `
    <hr>
      <div class='fullName'>${data.name}</div>
      <div class='message'>${data.email}</div>
    `
  },
  eventPeople: function (info) {
    var html =  `
    <div class="entry">
      <div class="separator"></div>
      <div class="entry-title">
        ${info.name}
        <div class="edit-action">
          <i class="fa fa-align-right"></i>
        </div>
      </div>
      <div class="entry-details">
        <div class="text-inline-block">${info.age} anni,</div>
        <div class="text-inline-block">da ${info.city}</div>
      </div>
      <div class="entry-details">
        <div class="text-inline-block">${info.mobile}</div>,
        <div class="text-inline-block">${info.email}</div>
      </div>
    `
    if (info.intolerance !== 'No' && info.intolerance !== 'no' && info.intolerance != 'NO' && info.intolerance != '') {
      html = html+`
      <div class="entry-details">
        <div class="text-inline-block"><i class="fa fa-bolt"></i> ${info.intolerance}</div>
      </div>
      `
    } else {
      html = html+`
      </div>
      `
    }
    return html
  }
}