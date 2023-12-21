require('dotenv').config()
const Sequelize = require('sequelize')
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = process.env
const userModel = require('./models/userModel')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging:false,
    native: false
});

userModel(sequelize)

const {Tbl_user} = sequelize.models

module.exports = {
    connection: sequelize,
    Tbl_user
}