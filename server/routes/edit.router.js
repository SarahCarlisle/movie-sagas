const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//edit info
router.put('/:id', (req,res) =>{
    let movieid = req.body;
    let id = req.params.id;
    let queryText = `UPDATE "movies" SET "id"=$1; "title"=$2, "description"=$3, poster=$4`;
    pool.query(queryText, [req.params.id, req.body.title, req.body.description, req.body.pic])
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