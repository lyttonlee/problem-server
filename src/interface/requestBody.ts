interface ReportBug {
  id?: number,
  type: string,
  projectId: number,
  detail?: string,
  message?: string,
  timestamp?: number,
  extra?: string
}

export {
  ReportBug
}
