import { db } from '../db/db'
import sequelize = require('sequelize')

const Problem = db.define('problem', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: sequelize.DataTypes.CHAR,
    allowNull: false
  },
  detail: {
    type: sequelize.DataTypes.TEXT
  },
  message: {
    type: sequelize.DataTypes.CHAR
  },
  projectId: {
    type: sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  extra: {
    type: sequelize.DataTypes.CHAR
  },
  timestamp: {
    type: sequelize.DataTypes.BIGINT,
    defaultValue: new Date().valueOf()
  }
}, {
  tableName: 'bug'
})

export {
  Problem
}
