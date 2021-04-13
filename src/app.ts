import * as Koa from 'koa'
import * as path from 'path'
import {
  port
} from './config/global'
import {
  router
} from './router/router'

import koaBody = require('koa-body')
import Logger = require('koa-logger')
import KoaStatic = require('koa-static')

const app = new Koa()

app.use(koaBody())
app.use(Logger())
app.use(KoaStatic(path.join(__dirname, '../public')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`the server is running on port:${port}`)
})
