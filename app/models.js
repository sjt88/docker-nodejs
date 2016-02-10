module.exports = {
  ping: function () { return 'pong' },
  login: function (data) {
    if (!data.username) return {err: true, msg: 'no username'}
    if (!data.password) return {err: true, msg: 'no password'}
    return {msg: 'login ok!', ok: true}
  },
  getProfile: function (data) {
    if (!data.loggedIn) return {err: true, msg: 'not logged in :('}
    return {msg: {username: 'simon', fullName: 'Simon Tweed'}}
  }
}
