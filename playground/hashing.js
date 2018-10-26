const {SHA256} = require('crypto-js'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

//10 rounds
// bcrypt.genSalt(10, (err, salt)=>{
// 	bcrypt.hash(password, salt, (err, hash)=>{
// 		console.log(hash);
// 	})
// });

var hashedPassword = '$2a$10$oraIguFLx1nx3NLhtUo1tOMjc4Ue0z4RhAYKXuvrSJKs4ZLfEBp8m';


bcrypt.compare('123', hashedPassword, (err, res)=>{
	console.log(res);
});
// var data={
// 	id:10
// };

//two methods- jwt.sign and jwt.verify
// var token = jwt.sign(data, '123abc'); //the value that will be sent to user once they sign in
// var decoded = jwt.verify(token, '123abc');
// console.log(token);
// console.log(decoded);








// var message = "I am user number 3";

// var hash = SHA256(message).toString(); //because the returned result is an object


// console.log(`Message: ${message}`); 
// console.log(`hash: ${hash}`);

// var data = {
// 	id: 4 //id of the valid user that is making the request
// };

// //token will be sent back to the user
// var token= {
// 	data,
// 	hash: SHA256(JSON.stringify(data)+ 'somesecret').toString()
// }


// // token.data.id = 5
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data)+ 'somesecret').toString();

// if(resultHash === token.hash){
// 	console.log('Not Changed');
// }
// else{
// 	console.log("Changed");
// }

