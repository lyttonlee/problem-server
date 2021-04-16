import { db } from '../db/db'
import { ReportBug } from '../interface/requestBody'
import sequelize = require('sequelize')

const Problem = db.define<ReportBug>('problem', {
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
  },
  pageName: {
    type: sequelize.DataTypes.CHAR
  },
  pagePath: {
    type: sequelize.DataTypes.CHAR
  },
  clientHost: {
    type: sequelize.DataTypes.CHAR
  },
  brower: {
    type: sequelize.DataTypes.CHAR
  }
}, {
  tableName: 'bug'
})

export {
  Problem
}
