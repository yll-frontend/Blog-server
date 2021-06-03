const KoaRouter = require('koa-router')

const Router = new KoaRouter({
  prefix: '/api/user'

})



Router.get('/', async (ctx,) => {
  ctx.body = 'user'

})

module.exports = Router