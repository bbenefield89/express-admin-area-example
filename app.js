require('dotenv').config()

const express = require('express')
const ExpressAdminArea = require('express-admin-area')

const db = require('./database/connection')
const Electronics = require('./database/models/Electronics')

const app = express()
const expressAdminArea = ExpressAdminArea.init(
    express,
    process.env.DB_URL,
    { Electronics }
)

app.use(expressAdminArea)

Electronics.sync()

app.listen(3000, () => console.log('\n\nServer Online\n\n'))
