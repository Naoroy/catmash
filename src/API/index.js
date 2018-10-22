/* eslint-disable no-console */

const express = require('express')
const request = require('request')
// const routes = require('./router')

const PORT = process.env.PORT || 5000

express()
  .use(express.json())
  // .use(routes)
  .get('/', (req, res ) => {
    request.get({ url: 'https://latelier.co/data/cats.json' },
      (error, response, body) => {

        JSON.parse(body).images.forEach(image => {
          // console.log(image.id)
          res.write(`<img src=${image.url}>`)
        })
        res.status(200).end()
      })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
