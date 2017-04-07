/* jshint esversion:6, node:true */
/*
   In this exercise the database name is learnyoumongo.
   So the url is: mongodb://localhost:27017/learnyoumongo
   
   Use the 'parrots' collection to find all documents where age
   is greater than the first argument passed to your script.
   
   Using console.log, print the documents to stdout.

   ** MongoDB has some interesting operators:
   $gt "greater than"  syntax { field: { $lt: value} }
   $lt "less than"     syntax { field: { $lt: value} }
*/

var mongo = require('mongodb').MongoClient,
    url   = 'mongodb://localhost:27017/learnyoumongo',
    age   = parseInt(process.argv[2], 10);

mongo.connect(url, function (err, db) {
    // db is our databse
    
    if (err) { throw err; }

    var collection = db.collection('parrots');

    collection
        .find({
            age: {
                $gt: age
            }
        })
        .toArray(function (err, documents) {
            if (err) { throw err; }

            console.log(documents);
            db.close();
        });

});
