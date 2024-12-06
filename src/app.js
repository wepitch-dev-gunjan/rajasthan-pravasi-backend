const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("phch rha hai")
    res.send('welcome to rajasthan pravasi !! CICD works?!?! Yes, it freakin works :D')
})

// Routes
const routes = require('./routes'); // Import main router
app.use('/api', routes);

module.exports = app;
