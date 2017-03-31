var express = require('express');
var app = express();
var models = require('./models');

// ----------------------------------------
// Config
// ----------------------------------------

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(express.static(process.cwd() + '/public'));


// ----------------------------------------
// Routes
// ----------------------------------------

app.get('/', function(request, response) {
  models.User.findById(1)
    .then(function(user) {
      response.render('index', {
        hello: 'Hello Express.js! ' + user.username
      });
    });
});


app.get('/users', (req, res) => {
  var userParams = {
    username: req.query.username
  };
  models.User.create(userParams)
    .then((user) => {
      res.render('index', {
        hello: `Hello ${ user.username }`
      });
    })
    .catch((e) => {
      res.render({
        hello: e
      });
    });
});


// ----------------------------------------
// Serve
// ----------------------------------------

if (require.main === module) {
  app.listen(3000, function() {
    console.log('Server listening at http://localhost:3000');
  });
} else {
  module.exports = app;
}







