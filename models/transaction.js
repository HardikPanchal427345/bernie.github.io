const mongoose = require('mongoose')


const transactionSchema = mongoose.Schema

const transSchema = new transactionSchema({

    compId: String,
    userId: String,
    amount: String

})


module.exports = mongoose.model('transaction', transSchema, 'Transactions')