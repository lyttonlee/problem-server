import { Problem } from '../../model/problem'
import { ReportBug, reportsQuery } from '../../interface/requestBody'
import { createSuccessResponse } from '../../utils/response'
import koa = require('koa')

// 上报错误
const reportBug = async (ctx: koa.ParameterizedContext, next: koa.Next) => {
  try {
    const param: ReportBug = Object.assign(ctx.request.body, {
      clientHost: ctx.request.headers.origin || ctx.request.headers.referer,
      brower: ctx.request.header['user-agent'] || ctx.request.headers['user-agent']
    })
    const problem = await Problem.create(param)
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
    const params: reportsQuery = ctx.request.query as reportsQuery
    if (!params.currentPage) {
      params.currentPage = '1'
    }
    console.log(params)
    const res = await Problem.findAndCountAll({
      where: {
        projectId: parseInt(params.projectId)
      },
      limit: 10,
      offset: 10 * (parseInt(params.currentPage) - 1),
      order: [
        ['timestamp', 'desc']
      ]
    })
    ctx.body = createSuccessResponse(0, '成功！', res)
  } catch (error) {
    ctx.customError = error
    next()
  }
}

export {
  reportBug,
  queryBugReports
}
