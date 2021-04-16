import { User } from '../../model/user'
import { LoginParam } from '../../interface/userInterface'
import { createToken } from '../../utils/jwt'
import { createErrorResponse, createSuccessResponse } from '../../utils/response'
import koa = require('koa')

// 上报错误
const login = async (ctx: koa.ParameterizedContext, next: koa.Next) => {
  try {
    const param: LoginParam = ctx.request.body
    // console.log(param)
    const user = await User.findOne({
      where: {
        ...param
      },
      attributes: ['username', 'avatar', 'nickname', 'reginTimestamp', 'id']
    })
    if (user) {
      const token = createToken(user.id, user.username)
      ctx.body = createSuccessResponse(0, '登录成功！', {
        token,
        user
      })
    } else {
      ctx.body = createErrorResponse(1, '用户名或密码错误！')
    }
  } catch (error) {
    ctx.customError = error
    next()
  }
}

export {
  login
}
