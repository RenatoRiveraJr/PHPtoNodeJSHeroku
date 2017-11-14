var express = require('express');
var router = express.Router();
var controllerMongoCollection = require('../controllers/database');
/* GET home page. */
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express'});
});
router.post('/', function(req, res){
    var MongoClient = require('mongodb').MongoClient;
<<<<<<< HEAD
    var url = "mongodb://r39rivera:Holleriv12@ds251245.mlab.com:51245/heroku_1jbzqctc";
=======
    var url = "mongodb://<username>:<password>@ds251245.mlab.com:51245/heroku_1jbzqctc";
>>>>>>> f4b25ee52adbe5e01cc485685c6d5ac176f0dec3


    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("ORDERS").find({name: req.param('username')}).toArray(function (err, docs) {
            if (err) throw err;
            docs.forEach(function (doc) {
                res.send(doc['name'] + " " + doc['order']);
            });
        });
    });
});


module.exports = router;