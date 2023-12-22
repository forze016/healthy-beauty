const { Router } = require('express')
const categoryPostRoute = require('./categoryRoutes/categoryPostRoute')

const routes = Router()



routes.use('/', categoryPostRoute)


module.exports = routes