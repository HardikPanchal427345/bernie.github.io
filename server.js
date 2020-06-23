const express = require('express')
const bodyparser = require('body-parser')

require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT || 3000

var path = require('path');
const api = require('./routes/api')

const app = express()
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use(bodyparser.json())

app.use(express.static(__dirname + '/newproject'));
app.use('/api', api)
app.get('/', function(req, res) {
    // res.send('HELLO FROM SERVER')
    res.sendFile(path.join(__dirname, 'newproject/index.html'));
})

app.listen(PORT, function() {
    console.log('Server running on localhost:' + PORT)
})