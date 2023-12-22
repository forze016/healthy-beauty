const categoryAddController = require('../../controllers/categoryControllers/categoryAddController')


const categoryPostHandler = async (req, res) => {
    try {
        const { image, name, description } = req.body;
        const result = await categoryAddController({ image, name, description })
        res.status(201).json(result)    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

module.exports = categoryPostHandler