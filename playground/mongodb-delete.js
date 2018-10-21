const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
	if(err){
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to mongodb server');

	var db=client.db('TodoApp');
	//DeleteMany
	// try{
	// db.collection('Todos').deleteMany({"text":"lunch"});
	// } catch(e){
	// 	console.log('Error', e);
	// }


	//deleteone
	// db.collection('Todos').deleteOne({"text":"sleep"}).then( (result)=>
	// 	console.log(result)).catch((error)=>{
	// 	return console.log('error occured', error)});

	//findonedelete
	// db.collection('Todos').findOneAndDelete({"text":"lunch"}).then( (result)=>
	// 	console.log(result)).catch((error)=>{
	// 	return console.log('error occured', error)});


	// client.close();
});