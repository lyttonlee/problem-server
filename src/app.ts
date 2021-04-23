import * as Koa from 'koa'
import * as path from 'path'
import {
  port
} from './config/global'
import {
  router
} from './router/router'
import {
  db
} from './db/db'

import koaBody = require('koa-body')
import Logger = require('koa-logger')
import KoaStatic = require('koa-static')

const app = new Koa()
db.authenticate().then(() => {
  console.log('数据库连接成功！')
}).catch((err) => {
  console.error('数据库连接失败')
  console.error(err)
})

app.use(koaBody())
app.use(Logger())

// set cache
app.use(async (ctx, next) => {
  // console.log(ctx.request)
  if (ctx.request.url.startsWith('/api/report')) {
    // 报告数据时允许跨域
    ctx.append('Access-Control-Allow-Origin', '*')
    ctx.append('Access-Control-Allow-Methods', 'POST, OPTIONS')
    ctx.append('Access-Control-Allow-Headers', 'token, Content-Type,Content-Length,Accept')
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 200
    }
  }
  await next()
})

app.use(KoaStatic(path.join(__dirname, '../public'), {
  setHeaders: (res, path) => {
    if (path.includes('index.html')) {
      res.setHeader('Cache-Control', 'no-store')
    } else {
      res.setHeader('Cache-Control', [`max-age=${30 * 24 * 60 * 60}`])
    }
  }
}))

app.use(router.routes()).use(router.allowedMethods())

// 捕获错误
app.use((ctx, next) => {
  if (ctx.customError) {
    ctx.status = 500
    ctx.body = ctx.customError.message || '服务器错误'
  }
})

app.listen(port, () => {
  console.log(`the server is running on port:${port}`)
})
