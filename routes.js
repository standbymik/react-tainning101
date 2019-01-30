const routes = module.exports = require('next-routes')()

routes
  .add({ pattern : '/about/:id?', page : 'about'})
  .add({ pattern : '/', page : 'index'})
  .add({ pattern : '(.*)', page : 'notfound'})

