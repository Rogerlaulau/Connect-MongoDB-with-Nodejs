
const updatedUser = {"name": "roger"}

console.log(`updatedUser: ${updatedUser}`);  //updatedUser: [object Object]
console.log(`updatedUser: ${updatedUser.name}`); //updatedUser: roger


console.log(`updatedUser: ${JSON.stringify(updatedUser)}`); // updatedUser: {"name":"roger"}



// READ FROM CONFIG FILE
const dotenv = require('dotenv');
dotenv.config();
const name = process.env.username;
const pwd = process.env.password;

console.log(name, pwd)



