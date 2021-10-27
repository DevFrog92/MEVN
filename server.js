const express = require('express')
const path = require('path')
const app = express()
const _path = path.join(__dirname, './dist')

app.use('/', express.static(_path))
app.listen(12919, () => {
  console.log('lazy image server: 12010 start http://27.0.0.1:12010')
})