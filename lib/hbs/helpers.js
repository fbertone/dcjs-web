'use strict';

var sMonths = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
var status = ["Bozza", "Pronto", "Simulazione", "Map", "Reduce", "Completato"];

exports.shortMonth = function(id) { return sMonths[id-1]; };
exports.status = function(id) { return status[id]; };
exports.foo = function () { return 'FOO!'; };
exports.bar = function () { return 'BAR!'; };
