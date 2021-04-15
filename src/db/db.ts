import {
  dbhost,
  dbname,
  dbpassword,
  dbuser
} from '../config/global'
import sequeLize = require('sequelize')

const db = new sequeLize.Sequelize({
  host: dbhost,
  username: dbuser,
  password: dbpassword,
  database: dbname,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

export {
  db
}
