const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

//edit info
router.put("/", (req,res) =>{
  let queryText = `UPDATE "movies" SET "title"=$1, "description"=$2 WHERE "id"=$3; `;
  pool.query(queryText, [req.body.title, req.body.description, req.body.id])
  .then(result => res.sendStatus(200)).catch(err => {
      console.log('ERROR in put', err);
      res.sendStatus(500);
  });
});

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