const KoaRouter = require('koa-router')

const Router = new KoaRouter({
  prefix: '/api/artical'
})

Router.get('/', async (ctx,) => {
  ctx.body = 'artical'
})

module.exports = Router