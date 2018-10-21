const {ObjectId} = require('mongodb');
const {mongooose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id='5bcc0da0ccb9fcfe3e62b807';
if(!ObjectId.isValid(id)){
	return console.log('Id not valid');
}

User.findById(id).then((user)=>{
	if(!user){
		return console.log('User not found');
	}
	console.log('User', user);
}).catch((e)=> console.log(e));




// var id= '5bcc0a24ae5e2b913ba96ac9';

// if (!ObjectId.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo', todo);
// }).catch((e)=> console.log(e));