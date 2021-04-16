import { Model } from 'sequelize/types'

interface LoginParam {
  username: string,
  password: string
}

interface UserType extends Model {
  id: number,
  avatar?: string,
  username: string,
  password?: string,
  nickname?: string,
  reginTimestamp?: number
}

export {
  LoginParam,
  UserType
}
