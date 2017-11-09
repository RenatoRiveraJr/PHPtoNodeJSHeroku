var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res){
    //res.writeHead(200, {'Content-Type': 'text/html'});
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://heroku_1jbzqctc:&7c4fPwVBcUDTcu1@ds251245.mlab.com:51245/heroku_1jbzqctc";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var query = { name: req.param('username') };
        db.collection("ORDERS").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send("Hey! " + req.param('username') + "Here is your order: " +
            result);
            db.close();
        });
    });

});

module.exports = router;
