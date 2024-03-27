require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

//int middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


//init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

//init router
app.use('/', require('./routers'))

//handles error

module.exports = app