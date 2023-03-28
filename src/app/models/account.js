const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://khaiduchoa:4jOHcqMOG1bsYOJ2@cluster0.e8bk9pu.mongodb.net/WebOrder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema

const AccountSchema = new Schema(
    {
        username: String,
        password: String,
        role: String,
    },
    {
        collection: 'accounts',
    },
)

const AccountModel = mongoose.model('account', AccountSchema)
module.exports = AccountModel
