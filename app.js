const express = require ('express')
const cors = require ('cors')
const bodyparser = require('body-parser')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(helmet())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

let studentAPI = require('./routes/student')
app.use('/api/v1', studentAPI)

const port = 6000;
app.listen(port, function(){
    console.log('Server started at ports ' + port)
});