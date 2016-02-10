var restify = require('restify')

var models = require('./models.js')

var server = restify.createServer({
  name: 'docker-test-api',
  version: '1.0.0'
})

var port = 9001

var loggedIn = false

server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('ping', function (req, res, next) {
  console.log('GET ping/')
  res.send(models.ping())
  return next()
})

server.post('login/', function (req, res, next) {
  console.log('POST login/ ' + JSON.stringify(req.params))
  var response = models.login(req.params)
  if (response.ok) loggedIn = true
  res.send(response)
  return next()
})

server.get('profile/', function (req, res, next) {
  console.log('GET profile/ ')
  res.send(models.getProfile({loggedIn: loggedIn}))
  return next()
})

server.listen(port, function () {
  console.log('server listening on port ' + port)
})
