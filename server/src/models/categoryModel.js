const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tbl_category', {
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
        }
    }, { timestamps: false })
}