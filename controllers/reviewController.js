const db = require('../models')

// model
const Review = db.reviews

//Add Review
const addReview = async (req, res) => {
    const id = req.params.id
    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }
    const review = await Review.create(data)
    res.status(201).json({msg: 'Added Successfully', review})
}

//Get All Reviews
const getAllReviews = async (req, res) => {
    const reviews = await Review.findAll({})
    res.status(200).json({reviews})
}

module.exports = {
    addReview,
    getAllReviews
}