var express = require('express');
var bodyParser = require('body-parser')
var {mongoose}= require('./db/mongoose')
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectId}= require('mongodb')

var app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
	// console.log(req.body);
})

app.get('/todos', (req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos})
	}, (e)=>{
		res.status(400).send(e);
	})
})

app.get('/todos/:id', (req,res)=>{
	var id= req.params.id;
	if(!ObjectId.isValid(id)){
		res.status(400).send();
	}
	Todo.findById(id).then((todo)=>{
		res.send({todo});
	},(e)=>{
		res.status(400).send();
	})
});

app.delete('/todos/:id', (req,res)=>{
	var id= req.params.id;
	if(!ObjectId.isValid(id)){
		res.status(400).send();
	}
	Todo.findByIdAndRemove(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send(todo);
	}).catch((e)=>{
		res.status(400).send();
	})
})

app.listen(port, ()=>{
	console.log(`started on port ${port}`);
})

//create instance
// var newTodo = new Todo({
// 	text: 'Edit this todo'
// });

// newTodo.save().then((doc)=>{
// 	console.log('saved todo', doc)
// }, (e)=>{
// 	console.log('Unable to save');
// });



// var newUser = new User({
// 	email:'divya@gmail.com'
// })

// newUser.save().then((doc)=>
// 	console.log(doc), (e)=>{
// 		console.log('unable to save user', e);
// 	});