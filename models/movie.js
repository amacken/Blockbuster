const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const movieSchema = new Schema({

});

// Create Model from Schema
const Movie = mongoose.model('Movie', movieSchema);

// Export Movie Model
module.exports = Movie;