var mailgun = require('mailgun-js')({
  apiKey: 'key-b3410345e54fc0c4f9165c427cffa3fc',
  domain: 'posta.5p2p.it'
})

var data = {
  from: 'corsi@5p2p.it',
  subject: 'New user!',
  html: `<p>Welcome!</p>`,
  'h:Reply-To': 'corsi@5p2p.it',
  to: 'ruvido@gmail.com'
}

mailgun.messages().send(data, function (error, body) {
  if (error) {
    console.log('error')
  } else {
    console.log(body)    
  }
})
