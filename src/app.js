const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

//int middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())


//init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
checkOverload()

// init router
app.get('/', (req, res, next) => {
    const strCompress = 'Hello Fantipjs'
    return res.status(200).json({
        message: 'Welcome Fantipjs!',
        metadata: strCompress.repeat(100000)
    })
})

//handles error

module.exports = app