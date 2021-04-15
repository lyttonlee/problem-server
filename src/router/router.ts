import KoaRouter = require('koa-router')

const router = new KoaRouter({
  prefix: '/api'
})

router.get('/home', (ctx) => {
  ctx.body = 'haha'
})

router.post('/report/bug', async (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = {
    type: 'cors',
    data: '跨域完成'
  }
})

export {
  router
}
