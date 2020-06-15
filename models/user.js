const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    gender: String,
    birthdate: String,
    city: String,
    state: String,
    pin: String,
    address: String,
    phone: String,
    image: String,
    comps: Array
        // tickets: Array
})

module.exports = mongoose.model('user', userSchema, 'Users')