/* jshint esversion:6, node:true */
/*
  UPDATE
  Exercise 6 of 9
  
  Here we are going to update a document in the users collection.
  
  The database name will be accessible via process.argv[2].
  
  Say we have a user defined like:
  
      {
        "name": "Tina",
        "age": 30,
        "username": "tinatime"
      }
  
  We want to change Tina's age from 30 to 40.
  
  For the purpose of this lesson, assume that the username property is unique.
  
*/

const mongo  = require('mongodb').MongoClient,
      dbUrl  = 'mongodb://localhost:27017/',
      dbName = process.argv[2];  // receives db name

mongo.connect(dbUrl + dbName, function (err, db) {
    
    if (err) { throw err; }
    
    const collection = db.collection('users');
    
    collection.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function (err, res) {
        if (err) throw err;
        
        console.log(res);
        
    });
    
    collection.close();
    
});