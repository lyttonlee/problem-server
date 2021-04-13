import KoaRouter = require('koa-router')

const router = new KoaRouter({
  prefix: '/api'
})

router.get('/home', (ctx) => {
  ctx.body = 'haha'
})

export {
  router
}
