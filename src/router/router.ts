import {
  reportBug
} from './controller/report'
import KoaRouter = require('koa-router')
const router = new KoaRouter({
  prefix: '/api'
})

router.post('/report/bug', reportBug)

export {
  router
}
