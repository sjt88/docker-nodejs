var restify = require('restify')

var models = require('./models.js')

var server = restify.createServer({
  name: 'docker-test-api',
  version: '1.0.0'
})

var loggedIn = false

server.use(restify.acceptParser(server.acceptable)
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('ping', function(req, res, next) {
  console.log('GET ping/')

  var response = 'pong'
  res.send(models.ping())
  return next()
}

server.post('login/', function(req, res, next) {
  console.log('POST login/ ' + json.stringify(req.params))

  var response = models.login(req.params)
  res.send(response)
  return next()
})

server.get('profile/', function(req, res, next) {
  console.log('GET profile/ ')
  res.send(models.profile({loggedIn:loggedIn}))
  return next()
})

module.exports = {
  start: function(opts, cb) {
    server.listen(options.port, function() {
      if (cb) cb()
    })
  },
  server: server
}
