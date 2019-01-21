const routes = module.exports = require('next-routes')()

routes
  .add({ pattern : '/profile/:id', page : 'profile'})
  //.add({ pattern : '/login', page : 'login'})
  .add({ pattern : '/forum/:room?', page : 'forum'})
  .add({ pattern : '/', page : 'index'})
  .add({ pattern : '(.*)', page : 'notfound'})

