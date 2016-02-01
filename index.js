var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home');
});

var serverPort = (process.env.PORT || 3000);
app.listen(serverPort, function () {
  console.log('Server listening on port %s!', serverPort);
});
