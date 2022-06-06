const reviewController = require('../controllers/reviewController')
const router = require('express').Router()

router.post('/addReview/:id', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)

module.exports = router