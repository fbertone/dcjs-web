var helpers = require('./helpers');
var init = function(exphbs) {
  return exphbs.create({
    defaultLayout: 'main', 
    extname: '.hbs',
    helpers: helpers
  });
};

module.exports = init;

