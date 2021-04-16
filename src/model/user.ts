import { db } from '../db/db'
import { UserType } from '../interface/userInterface'
import sequelize = require('sequelize')

const User = db.define<UserType>('user', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: sequelize.DataTypes.CHAR,
    allowNull: false
  },
  password: {
    type: sequelize.DataTypes.STRING
  },
  nickname: {
    type: sequelize.DataTypes.CHAR
  },
  avatar: {
    type: sequelize.DataTypes.CHAR
  },
  reginTimestamp: {
    type: sequelize.DataTypes.BIGINT,
    defaultValue: new Date().valueOf()
  }
}, {
  tableName: 'user'
})

export {
  User
}
