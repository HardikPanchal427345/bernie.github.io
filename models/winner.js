const mongoose = require('mongoose')


const winSchema = mongoose.Schema

const winnerSchema = new winSchema({

    fname: String,
    lname: String,
    email: String

})


module.exports = mongoose.model('winner', winnerSchema, 'Winners')