import { Problem } from '../../model/problem'
import { ReportBug } from '../../interface/requestBody'
import koa = require('koa')
import { createSuccessResponse } from '../../utils/response'

// 上报错误
const reportBug = async (ctx: koa.ParameterizedContext, next: koa.Next) => {
  try {
    const param: ReportBug = Object.assign(ctx.request.body, {
      clientHost: ctx.request.headers.origin || ctx.request.headers.referer,
      brower: ctx.request.header['user-agent'] || ctx.request.headers['user-agent']
    })
    // console.log(param)
    const problem = await Problem.create(param)
    // console.log(problem)
    if (problem) {
      ctx.body = problem
    }
  } catch (error) {
    ctx.customError = error
    next()
  }
}

// 获取错误记录
const queryBugReports = async (ctx: koa.ParameterizedContext, next: koa.Next) => {
  try {
    const params = ctx.request.query
    console.log(params)
    const res = await Problem.findAll({
      where: {
        projectId: parseInt(params.id as string)
      }
    })
    console.log(res.length)
    if (res) {
      console.log('do')
      ctx.body = createSuccessResponse(0, '成功！', res)
    }
  } catch (error) {
    console.log(error)
    ctx.customError = error
    next()
  }
}

export {
  reportBug,
  queryBugReports
}
