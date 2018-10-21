var mongoose = require('mongoose');
mongoose.Promise=global.Promise; //we are using the built in promise
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/TodoApp');

module.exports={
	mongoose
}