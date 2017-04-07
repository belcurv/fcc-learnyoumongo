/* jshint esversion:6, node:true */
/*
  REMOVE
  Exercise 7 of 9
  
  This lesson involves removing a document with the given _id.
  The database name will be accessible via process.argv[2].
  The collection name will be passed as the second argument to your script.
  The _id will be passed as the third argument to your script.
  
  -------------------------------------------------------------------------------
  
  ## HINTS
  
  To remove a document, one would need to call remove() on the collection.
  
  Ex.
      collection.remove({
        name: 'foo'
      }, callback)
  
  The first argument to remove() is the query.  
*/

const mongo   = require('mongodb').MongoClient,
      dbUrl   = 'mongodb://localhost:27017/',
      dbName  = process.argv[2],
      dbCol   = process.argv[3],
      idParam = process.argv[4];

console.log(process.argv);

mongo.connect(dbUrl + dbName, function (err, db) {
    
    if (err) throw err;
    
    const collection = db.collection(dbCol);
    
    collection.remove({
        '_id': idParam
    }, function (err, res) {
        if (err) throw err;
        db.close();        
    });
        
});
