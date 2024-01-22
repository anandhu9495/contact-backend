//import express

const express= require('express')

//import cors

const cors= require('cors')

const logic = require('./Services/logic')
const {user} = require('./Services/db')


//create application using express

const contactServer= express()


//use cors to connect frotend 

contactServer.use(cors({

    origin:'http://localhost:3000'

}))

//create a middleware for parsing json data

contactServer.use(express.json())

//define a port number

contactServer.listen(8000,()=>{
    console.log('contactServer listening on the port 8000'); 
})





//api call for users

contactServer.get('/get-all-users',(req,res)=>{
    logic.getAllUsers().then((response)=>{
        res.status(response.statusCode).json(response)
    })
    
})


//api call to add users

contactServer.post('/add-user',(req,res)=>{
    logic.addUser(req.body.id,req.body.firstname,req.body.lastname,req.body.lat,req.body.long,req.body.city,req.body.street,req.body.number,req.body.zipcode,req.body.email,req.body.username,req.body.password,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)

    })
})



//api call to delect user

contactServer.delete('/delete-user/:id',(req,res)=>{
    logic.deleteUser(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})






//api call to view a user

contactServer.get('/view-user/:id',(req,res)=>{
    logic.viewUser(req.params.id).then((response)=>{

        res.status(response.statusCode).json(response)


    })
})


//api call to update data

contactServer.post('/update-user/:id', (req, res) => {
    logic.updateUser(
        req.params.id,
        req.body.firstname,
        req.body.lastname,
        req.body.lat,
        req.body.long,
        req.body.city,
        req.body.street,
        req.body.number,
        req.body.zipcode,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.phone
    ).then((response) => {
        res.status(response.statusCode).json(response);
    });
});


