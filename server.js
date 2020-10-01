require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');

const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});
// Middleware
app.use(express.json());
app.use(express.static('public'));

// Controller
app.use('/api', require('./controllers/movies'));

// Listener
app.use('/:id/', express.static('public'));

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(`${__dirname}/public/index.html`));
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});