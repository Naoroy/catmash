const request = require('request')
const dbConnection = require('./db-connection')

const updateDB = (callback) => {
  request.get({ url: 'https://latelier.co/data/cats.json' },
    (error, response, body) => {
      JSON.parse(body).images.forEach(image => {
        let name = ''
        const query = `INSERT INTO cat (id, name, url) values (
          "${image.id}",
          "${name}",
          "${image.url}"
        )`
        dbConnection.query(query, (error) => {
          if (error) throw error

        })
      })
      // send data to client
      callback()
    })
}

module.exports = updateDB
