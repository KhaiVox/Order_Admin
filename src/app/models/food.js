const mongoose = require('mongoose')

// thư viện xóa mềm
const mongooseDelete = require('mongoose-delete')

mongoose.connect('mongodb+srv://khaiduchoa:4jOHcqMOG1bsYOJ2@cluster0.e8bk9pu.mongodb.net/WebOrder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema

const Food = new Schema(
    {
        id: String,
        name: { type: String, required: true },
        img: { type: String },
        type: { type: String },
        price: { type: String },
    },
    {
        collection: 'foods',
    },
)

// deleteAt: tự động thêm thời gian xóa
// overrideMethods: ẩn những item đã được xóa mềm
Food.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })

const FoodModel = mongoose.model('Food', Food)
module.exports = FoodModel
