import {
  Next,
  ParameterizedContext
} from 'koa'
import {
  sign,
  verify
} from 'jsonwebtoken'
import {
  SK
} from '../config/global'
import { createErrorResponse } from './response'
import {
  TokenPayload
} from '../interface/requestBody'

const createToken = (id: number, username: string): string => {
  return sign({
    id,
    username
  }, SK)
}

const jwt = async (ctx: ParameterizedContext, next: Next) => {
  // 类型断言
  const token = (ctx.request.headers.token as string || ctx.request.header.token as string)
  console.log(token)
  if (token) {
    const payload = verify(token, SK)
    console.log(payload)
    if (payload) {
      ctx.userInfo = (payload as TokenPayload)
    }
    await next()
  } else {
    ctx.status = 401
    ctx.body = createErrorResponse(401, '鉴权失败，请重新登录！')
  }
}

export {
  createToken,
  jwt
}
