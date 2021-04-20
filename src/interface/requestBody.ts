import { ParsedUrlQuery } from 'querystring'
import { Model } from 'sequelize/types'

interface ReportBug extends Model {
  id?: number,
  type: string,
  projectId: number,
  detail?: string,
  message?: string,
  timestamp?: number,
  extra?: string,
  pagePath?: string,
  pageName?: string,
  clientHost: string,
  brower: string
}

interface TokenPayload {
  id: number,
  username: string
}

interface reportsQuery extends ParsedUrlQuery {
  projectId: string,
  currentPage?: string
}

export {
  ReportBug,
  TokenPayload,
  reportsQuery
}
