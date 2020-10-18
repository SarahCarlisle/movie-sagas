const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// available routes
const displayRouter = require("./routes/display.router");
const editRouter = require("./routes/edit.router");
const genresRouter = require("./routes/genres.router");

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use("/api/display", displayRouter);
app.use("/api/edit", editRouter);
app.use("/api/genres", genresRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});