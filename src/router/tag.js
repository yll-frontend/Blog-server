const KoaRouter = require('koa-router')

const Router = new KoaRouter({
  prefix: '/api/tag'
})



Router.get('/', async (ctx, next) => {
  ctx.body = 'tag'
})

module.exports = Router