interface ReportBug {
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

export {
  ReportBug
}
