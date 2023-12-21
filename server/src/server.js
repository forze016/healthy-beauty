const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(morgan('dev'));
server.use(express.json());
server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));
server.use('/', routes)



module.exports = server