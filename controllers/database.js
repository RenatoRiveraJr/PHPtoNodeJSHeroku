/**
 * Created by darthrahj on 11/14/17.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://r39rivera:Holleriv12@ds251245.mlab.com:51245/heroku_1jbzqctc";

module.exports.getAllOrders =  function (request, response) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("ORDERS").find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllRoutes', {results: docs});

        });
    });

};