const { tbl_category } = require('../../db')

const categoryAddController = ({ image, name, description }) => {
    if (!image || !name || !description) throw new Error('Missing data')  

    const result = tbl_category.create({ image, name, description })

    return result
}

module.exports = categoryAddController