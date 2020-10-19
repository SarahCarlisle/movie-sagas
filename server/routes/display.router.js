const express = require("express");
const axios = require("axios");
require("dotenv").config();

const pool = require('../modules/pool');
const router = express.Router();

//getting movies from database
router.get('/', (req,res) => {
  let queryText = 'SELECT * FROM "movies" ORDER BY "title";';
pool.query(queryText)
.then(result => {
  res.send(result.rows);
})

.catch(error => {
  console.log('error in GET -router.js', error);
  res.sendStatus(500);
  });
})

//displaying movies to DOM
router.post('/', (req, res) => {
  let postMovie = req.body;
  console.log('Viewing Movies', postMovie);

let queryText = `INSERT INTO "movies" ('title', 'description', 'poster')
VALUES ($1, $2, $3);`;

pool.query(queryText, [postMovie.title, postMovie.description, postMovie.poster])
  .then(result =>{
      res.status(201).send('Successfully showing Movies')
  })
  .catch(error => {
      console.log(`error in POST -router.js`, error);
      res.sendStatus(500);
   });
});

module.exports = router;