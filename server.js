const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();
app.use(express.json());


// READ FROM CONFIG FILE .env
const dotenv = require('dotenv');
dotenv.config();

/*
// connect to a local MongoDB instance using the mongoose.connect() function
mongoose.connect('mongodb://localhost:27017/usersdb',
  {
      //pass the useNewUrlParser: true, etc. to mongoose.connect() to avoid the DeprecationWarning.
      //https://mongoosejs.com/docs/deprecations.html
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  }
);
*/

//OR
// Connect to Cloud using MongoDB Atlas
//const username = "dbTestingMongo";
//const password = "1234";
const username = process.env.username;
const password = process.env.password;


mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.zxtq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);



//To make sure your connection was successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(){
    console.log("Connected successfully");
});


app.use(Router);

app.listen(3000, () => {
    console.log("Server is runing at port 3000")
});