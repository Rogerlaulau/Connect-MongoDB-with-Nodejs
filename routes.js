const { request } = require("express");
const express = require("express");
const userModel = require("./models");
const app = express();

const basicAuth = require('express-basic-auth');

// Basic Auth for request
app.use(basicAuth({
    users: { 'rogerlau': 'rogerlau' },
    unauthorizedResponse: getUnauthorizedResponse
}))
 
function getUnauthorizedResponse(req) {
    return req.auth
        ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
        : 'No credentials provided'
}

//const cors = require('cors');
//app.use(cors());

//const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// add user
app.post("/add_user", async (request, response)=>{
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error){
        response.status(500).send(error);
    }
});

// get a list of all users
app.get("/users", async (request, response) =>{
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error){
        response.status(500).send(error);
    }
});

// get a specific user
app.get("/user/:userId", async (request, response) =>{
    const user = await userModel.findById(request.params.userId);

    try {
        response.send(user);
    } catch (error){
        response.status(500).send(error);
    }
});

// delete a specific user
app.delete("/user/:userId", async (request, response) =>{
    
    try {
        const removedUser = await userModel.remove({_id:request.params.userId});
        response.json(removedUser);
    } catch (error){
        response.status(500).send(error);
    }
});

// Update a specific user
app.patch("/user/:userId", async (req, res)=>{
    try{
        const updatedUser = await userModel.updateOne(
            {_id: req.params.userId},
            {$set: {
                name: req.body.name, 
                age: req.body.age   
            }}
        );
        //console.log(updatedUser);
        res.json(updatedUser);

    }catch(err){
        res.status(500).send(err);
    }
})



module.exports = app;