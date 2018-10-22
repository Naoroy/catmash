const dbConnection = require ('./db-connection')

const getUrls = (callback) => {
  const query = 'SELECT url FROM cat;'
  dbConnection.query(query, (error, result) => {
    if (error) throw error
    callback(result)
  })
}

module.exports = getUrls
