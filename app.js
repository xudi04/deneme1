const express = require('express');
const app = express();



app.listen(3000, () => {
        console.log("http://localhost:3000");
        console.log("strated...");
      });


app.get('/', function (req, res) {
  res.send("/blog");
});



app.get('/about', function (req, res) {
    res.send('<h1>Haqqe Meda</h1>');
  });

app.get('/pp', function (req, res) {
    res.redirect("/");
  });

app.use(function (req, res) {
    res.status(404).send('<h1>Per Tine</h1>');
});
