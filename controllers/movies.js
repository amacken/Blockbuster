const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Add Routes
// Index
router.get('/', (req, res) => {
    Movie.find({}, (error, allMovies) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(allMovies)
    });
});

// Delete

// Update

// Create

// Show

// export router
module.exports = router;