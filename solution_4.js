/* jshint esversion:6, node:true */
/*
   
  Here we will learn how to search for documents but only fetch the fields
  we need. Also known as projection in MongoDB
  
  Use the parrots collection from the database named learnyoumongo to
  find all documents where age is greater than the first argument
  passed to your script.
  
  The difference from the last lesson will be that we only want the
  name and age properties
  
*/

var mongo = require('mongodb').MongoClient,
    url   = 'mongodb://localhost:27017/learnyoumongo',
    age   = parseInt(process.argv[2], 10);  // make int from passed arg

mongo.connect(url, function (err, db) {
    
    if (err) { throw err; }
    
    var collection = db.collection('parrots');
    
    collection
        .find({
            age: { $gt: age }  // 1st object is list of things we're searching for
        }, {
            age: 1,   // 2nd obj is list of things to exclude from result,
            name: 1,  // where each value is boolean (1 or 0)
            _id: 0
        })
        .toArray(function (err, documents) {
            if (err) { throw err; }
        
            console.log(documents);
            db.close();
        });
    
});
