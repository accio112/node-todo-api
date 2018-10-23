const {ObjectId} = require('mongodb');
const {mongooose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5bcc0ad770d376403caf3bdd').then((todo)=>{
	console.log(todo);
})