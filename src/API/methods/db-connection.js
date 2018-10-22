const mysql = require('mysql')

const db_connection = mysql.createConnection({
  host: 'localhost',
  database: 'catmash',
  user: 'cat',
  password: ''
})

module.exports = db_connection
