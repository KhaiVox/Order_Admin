const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://khaiduchoa:4jOHcqMOG1bsYOJ2@cluster0.e8bk9pu.mongodb.net/WebOrder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema

const History = new Schema(
    {
        total: { type: Number },
        detail_Product: { type: Array },
        createAt: { type: Date, default: Date.now },
    },
    {
        collection: 'history_purchase',
    },
)

const HistoryModel = mongoose.model('History', History)
module.exports = HistoryModel
