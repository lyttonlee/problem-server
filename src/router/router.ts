import {
  queryBugReports,
  reportBug
} from './controller/report'
import {
  login
} from './controller/login'
import { jwt } from '../utils/jwt'
import KoaRouter = require('koa-router')
const router = new KoaRouter({
  prefix: '/api'
})

// 登录
router.post('/login', login)

// 上报错误
router.post('/report/bug', reportBug)

// 获取错误列表统计
router.get('/query/report/bug', jwt, queryBugReports)

export {
  router
}
