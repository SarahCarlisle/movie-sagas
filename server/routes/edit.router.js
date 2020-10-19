const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//edit info
router.put("/", (req,res) =>{
    const queryText = `Update "movies" SET "description" = $1 WHERE title = $2`;
    const queryValues = [req.body.details. req.body.title];
  
    pool.query(queryText, queryValues)
        .then(function(result){

        res.send('Movie info updated')
        }).catch(function (err){

            console.log('error in PUT -router.js', queryText, err);
            res.status(400).send('movieid not found');
        })
})

//delete a movie
router.delete("/:id", (req, res) => {
    console.log(req.params);
    let queryText = `DELETE FROM "movies" WHERE "id" = $1;`;
    pool
      .query(queryText, [req.params.id])
      .then((result) => {
        console.log('Delete movies with the ID', req.params.id);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error in DELETE -router.js', err);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;