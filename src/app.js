const Koa = require("koa2");
const Router = require('koa-router')
const requireDirectory = require('require-directory');
const AppConfig = require('./config')


const app = new Koa()
app.use(async (ctx, next) => {

  if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
    ctx.set('Access-Control-Allow-Origin', '*')
  } else {
    ctx.set('Access-Control-Allow-Origin', SystemConfig.HTTP_server_host)
  }
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
  next()
})
requireDirectory(module, './router', {
  visit: whenLoadModule
});
function whenLoadModule(obj) {
  if (obj instanceof Router) {
    app.use(obj.routes());
    app.use(obj.allowedMethods());
  }
}
app.listen(AppConfig.server.port, () => {
  console.log(`Server is running at http://localhost:${AppConfig.server.port}`);
})