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
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (error, movie) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(movie)
    });
});

// Update

// Create

// Show

// export router
module.exports = router;