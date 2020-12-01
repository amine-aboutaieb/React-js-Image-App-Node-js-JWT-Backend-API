const express = require('express')
const app = express()
const PORT = require('config').get('PORT')
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})
