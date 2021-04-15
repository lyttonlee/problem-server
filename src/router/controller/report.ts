import { Problem } from '../../model/problem'
import { ReportBug } from '../../interface/requestBody'
import koa = require('koa')

const reportBug = async (ctx: koa.ParameterizedContext, next: koa.Next) => {
  try {
    const param: ReportBug = ctx.request.body
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

export {
  reportBug
}
