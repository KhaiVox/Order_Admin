const mongoose = require('mongoose')

// thư viện xóa mềm
const mongooseDelete = require('mongoose-delete')

mongoose.connect('mongodb+srv://khaiduchoa:4jOHcqMOG1bsYOJ2@cluster0.e8bk9pu.mongodb.net/WebOrder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema

const Customer = new Schema(
    {
        fullname: { type: String },
        address: { type: String },
        phone: { type: String },
        email: { type: String },
        avatar: { type: String },
        point: { type: Number },
        quantity: { type: Number },
    },
    {
        collection: 'account_users',
    },
)

Customer.plugin(mongooseDelete, { overrideMethods: 'all' })

const CustomerModel = mongoose.model('Customer', Customer)
module.exports = CustomerModel
