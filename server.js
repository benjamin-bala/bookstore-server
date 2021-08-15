const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()


const app = express()
const port = process.env.PORT || 8001

app.use(cors())
app.use(express.json())


//Database connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection
connection.once('open', () => console.log(`Database conncection established`))


const productsRoute = require('./routes/products')
const usersRoute = require('./routes/users')

app.use('/products', productsRoute)
app.use('/users', usersRoute)

app.listen(port, () => console.log(`Server is up and running on port ${port}`))