const createErrorResponse = (code: number = 1, msg: string) => {
  return {
    code,
    msg
  }
}

const createSuccessResponse = (code: number = 0, msg: string = '成功！', result: any) => {
  return {
    code,
    msg,
    result
  }
}

export {
  createErrorResponse,
  createSuccessResponse
}
