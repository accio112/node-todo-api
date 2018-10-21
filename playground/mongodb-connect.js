//const MongoClient = require('mongodb').MongoClient;
//identical to code down below , below code is object destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{

    //console.log(db);
    if (err){
        return console.log('Unable to connect to Mongodb server');
    }
    
    console.log('Connected to Mongodb server');
    
    // var db= client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
        
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

    // var db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Divya',
    //     age: 25,
    //     location: 'Gwalior'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to connect to users', err);
    //     }
    //     console.log(result.ops); //result.ops is an array of the docs being inserted
    // })

    client.close();
});