/**
 * Created by darthrahj on 11/14/17.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "";

module.exports.getAllOrders =  function (request, response) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection('ORDERS').find().toArray(function(err, docs) {
            response.render('getAllOrders', {results: docs});
        });
    });

};
