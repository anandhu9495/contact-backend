// to connect node and mongoDB

//import mongoos

const mongoose=require('mongoose')

//connection string

mongoose.connect('mongodb://localhost:27017/ContactDetails')

//modal

const user=mongoose.model('user',{
    
      
  address: {
    geolocation: {
      lat: String,
      long: String
    },
    city: String,
    street: String, 
    number: String,
    zipcode: String
  },
  
  name:{
   firstname: String,
    lastname: String
  },
  id: String,
  email: String,
  username: String,
  password: String,
  phone: String,
  __v: Number  
    })

module.exports={
    user
} 


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   address: {
//     geolocation: {
//       lat: String,
//       long: String
//     },
//     city: String,
//     street: String,
//     number: String,
//     zipcode: String
//   },
//   id: String,
//   email: String,
//   username: String,
//   password: String,
//   name: {
//     firstname: String,
//     lastname: String
//   },
//   phone: String,
//   __v: Number
// });

// const User = mongoose.model('User', userSchema);

// module.exports = {
//   User
// };
