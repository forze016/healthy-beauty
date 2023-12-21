const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tbl_service', {
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, { timestamps: false })
}