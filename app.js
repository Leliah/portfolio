//DEPENDENCIES
const express = require('express');
const cors = require('cors');

//CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

app.get('/', (req, res) => {
    res.send('welcome to Pinterest');
})

// PHOTO ROUTES
const photosController = require("./controllers/photosControllers.js");
app.use("/homefeed", photosController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//EXPORT
module.exports = app;