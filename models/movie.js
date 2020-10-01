const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const movieSchema = new Schema({
    Title: { type: String, required: true },
    Year: { type: String},
    Rated: { type: String },
    Released: { type: String },
    Runtime: { type: String},
    Genre: { type: String },
    Director: { type: String },
    Writer: { type: String},
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String},
    Country: { type: String },
    Awards: { type: String },
    Poster: { type: String },
    Ratings: [
        {Source: { type: String },
        Value: { type: String }}
    ],
    Metascore: { type: String},
    imdbRating: { type: String },
    imdbVotes: { type: String },
    imdbID: { type: String},
    Type: { type: String },
    DVD: { type: String },
    BoxOffice: { type: String},
    Production: { type: String },
    Website: { type: String },
    Response: { type: String }
});

// Create Model from Schema
const Movie = mongoose.model('Movie', movieSchema);

// Export Movie Model
module.exports = Movie;