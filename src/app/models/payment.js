const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://khaiduchoa:4jOHcqMOG1bsYOJ2@cluster0.e8bk9pu.mongodb.net/WebOrder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema

const Payment = new Schema(
    {
        id_Cart: { type: String },
        payment_Method: { type: String },
        confirm_Order: { type: String },
        order_Status: { type: String },
        total: { type: Number },
        createAt: { type: Date },
    },
    {
        collection: 'payments',
    },
)

const PaymentModel = mongoose.model('Payment', Payment)
module.exports = PaymentModel
