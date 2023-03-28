const authRouter = require('./auth')
const ordersRouter = require('./orders')
const siteRouter = require('./site')
const foodRouter = require('./foods')
const historyRouter = require('./history')
const customerRouter = require('./customer')

// nếu các tuyến đường bên trên ko match -> chạy tuyến đường bên dưới cùng
function route(app) {
    app.use('/auth', authRouter)
    app.use('/customer', customerRouter)
    app.use('/orders', ordersRouter)
    app.use('/foods', foodRouter)
    app.use('/history', historyRouter)
    app.use('/home', siteRouter)
}

module.exports = route
