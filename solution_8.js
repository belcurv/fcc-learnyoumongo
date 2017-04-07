/* jshint esversion:6, node:true */
/*
  COUNT
  Exercise 8 of 9
  
  Here we will learn how to count the number of documents that
  meet certain criteria.
  
  Use the parrots collection from the database named learnyoumongo to
  count all documents where age is greater than the first argument
  passed to your script.
  
  Using console.log, print the number to stdout.
  
  -------------------------------------------------------------------------------
  
  ## HINTS
  
  To count the number of documents meeting certain criteria,
  we must use the collection.count() function.
  
  Here is an example:
  
      collection.count({
        name: 'foo'
      }, function(err, count) {
      
      })
  
*/

const mongo  = require('mongodb').MongoClient,
      dbUrl  = 'mongodb://localhost:27017/',
      dbName = 'learnyoumongo',
      dbCol  = 'parrots',
      param1 = process.argv[2];  // type = String

mongo.connect(dbUrl + dbName, function (err, db) {
    
    if (err) throw err;
    
    const collection = db.collection(dbCol);
    
    collection.count({
        
        age: {
            $gt: parseInt(param1)  // convert to integer!
        }
        
    }, function (err, count) {
        
        if (err) throw err;
        
        console.log(count);
        
        db.close();
        
    });
    
});