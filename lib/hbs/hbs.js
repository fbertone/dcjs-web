var sMonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

var init = function(exphbs) {
  return exphbs.create({
    defaultLayout: 'main', 
    extname: '.hbs',
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; },
        shortMonth: function(id) { return sMonths[id-1]; }
    }
  });
};

module.exports = init;

