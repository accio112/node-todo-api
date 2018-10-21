//const MongoClient = require('mongodb').MongoClient;
//identical to code down below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    //console.log(db);
    if (err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    var db= client.db('TodoApp');
    //object id cant be used as string because it is stored as objectid
    db.collection('Todos').find({_id: new ObjectID('5bcbdc863e41b3234a2e7c6b')}).toArray().then((docs)=>{ 
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('unable to fetch todos', err);
    });

db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);}, (err)=>{
    console.log('unable to fetch todos', err);
});
client.close();
});