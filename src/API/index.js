/* eslint-disable no-console */

const express = require('express')
const updateDB = require('./methods/update-db')
const getUrls = require('./methods/get-urls')
// const routes = require('./router')

const PORT = process.env.PORT || 5000

express()
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  .use(express.json())
  // .use(routes)
  .get('/', (req, res ) => {
    // updateDB(getUrls())
    getUrls((result) => {
      // result.forEach((image) => {
      //
      //   res.write(JSON.parse(image.url))
      // })
      res.send(result)
      res.end()
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
