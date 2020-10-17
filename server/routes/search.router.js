const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  axios
    .get(
        // ${req.body.searchParam} // not sure what to put here yet
    )
    .then((response) => {
      res.status(200).send(response.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;