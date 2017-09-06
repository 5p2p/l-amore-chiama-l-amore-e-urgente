var functions = require('firebase-functions')
var mailgun = require('mailgun-js')({
  apiKey: 'key-b3410345e54fc0c4f9165c427cffa3fc',
  domain: 'posta.5p2p.it'
})
var firebaseRef = '/events/2017-11-paderno/people'

exports.test = functions.database.ref(firebaseRef).onCreate(event => {

  console.log('simple test email');

  var data = {
    from: 'corsi@5p2p.it',
    subject: `node JSON`,
    html: `simple test`,
    to: 'ruvido@gmail.com'
  }

  mailgun.messages().send(data, function (error, body) {
    console.log(body)
  })
})


// exports.dataVal = functions.database.ref(firebaseRef).onCreate(event => {
//
//   // var nodeKey = event.data.val().key
//   // var nodeData= event.data.val()[nodeKey]
//   var nodeJSON= event.data.val().toJSON()
//
//   var data = {
//     from: 'corsi@5p2p.it',
//     subject: `node val JSON`,
//     html: nodeJSON,
//     to: 'ruvido@gmail.com'
//   }
//
//   mailgun.messages().send(data, function (error, body) {
//     console.log(body)
//   })
// })
//
//
// exports.dataJSON = functions.database.ref(firebaseRef).onCreate(event => {
//
//   console.log('json');
//   var caz= event.data.toJSON()
//   console.log(caz);
//
//   var data = {
//     from: 'corsi@5p2p.it',
//     subject: `node JSON`,
//     html: caz,
//     to: 'ruvido@gmail.com'
//   }
//
//   mailgun.messages().send(data, function (error, body) {
//     console.log(body)
//   })
// })




// exports.sendWelcomeEmail = functions.database.ref(firebaseRef).onCreate(event => {
//
//   var nodeKey = event.data.val().key
//   var nodeData= event.data.val()[nodeKey]
//   var nodeJSON= event.data.toJSON()
//
//   var data = {
//     from: 'corsi@5p2p.it',
//     subject: `L'amore chiama!`,
//     html: `
//     <h3>Ciao!</h3>
//     <p>La tua iscrizione è avvenuta con successo!</p>
//     <h4>Come arrivare</h4>
//     <p>Trovi tutte le istruzioni per raggiungerci sulla
//     <a href="http://5p2p.it/l-amore-chiama-l-amore-e-urgente">pagina ufficiale del corso</a></p>
//     <p>Ti aspettiamo!</p>
//     <p>Lo staff di 5pani2pesci</p>
//     `,
//     'h:Reply-To': 'corsi@5p2p.it',
//     to: nodeData.email
//   }
//
//   mailgun.messages().send(data, function (error, body) {
//     console.log(body)
//   })
// })
