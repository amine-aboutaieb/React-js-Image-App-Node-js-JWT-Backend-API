const express = require('express')
const app = express()
const PORT = require('config').get('PORT')
const cors = require('cors')

app.use(cors())

app.use(express.json({limit : '50mb'}))
app.use(express.urlencoded({extended : true, limit : '50mb'}))


app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/post', require('./routes/post'))

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})
