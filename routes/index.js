var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function(req, res){
    //res.writeHead(200, {'Content-Type': 'text/html'});
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://heroku_1jbzqctc:Holleriv12@ds251245.mlab.com:51245/heroku_1jbzqctc";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("ORDERS").findOne({}, function(err, result) {
            if (err) throw err;
            res.send(result.name);
            db.close();
        });
    });

});

module.exports = router;