
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://admin:111111@alex.mongohq.com:10065/Sandbox');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // yay!
  console.log("mongo opened!");
});

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);

exports.index = function(req, res){

  res.render('index', { title: 'Express' });
};