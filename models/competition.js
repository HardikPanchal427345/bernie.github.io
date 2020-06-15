const mongoose = require('mongoose')

const compSchema = mongoose.Schema

const competitionSchema = new compSchema({
    id: String,
    title: String,
    type: String,
    detail: String,
    ticket_price: Number,
    insertdate: String,
    enddate: String,
    image: String,
    tickets: Array
})

module.exports = mongoose.model('competition', competitionSchema, 'Competitions')