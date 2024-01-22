//import db

const { response } = require('express')
const db = require('../Services/db')


//get all users

const getAllUsers=()=>{
    return db.user.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'user not found'
            }
        }
    })
}


//add users

const addUser=(id,firstname,lastname,lat,long,city,street,number,zipcode,email,username,password,phone)=>{
    return db.user.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:'employee already exit'
            }
        }
        else{
            const contactData = {
              address: {
                    geolocation: {
                        lat: lat,
                        long: long,
                    },
                    city: city,
                    street: street,
                    number: number,
                    zipcode: zipcode,
                },
                id: id,
                name: {
                    firstname: firstname,
                    lastname: lastname,
                },
                email: email,
                username: username,
                password: password,
                phone: phone,
            }

            const newUser=new db.user(contactData)
            newUser.save()
            return{
                statusCode:200,
                message:'employee added sucessfully....'
            }
        }
    })

}



//delete user

const deleteUser=(id)=>{
    return db.user.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'employee delected sucessfully'
            }
        }
        
    })
    .catch((error)=>{
        return{
            statusCode:404,
            message:'user not found'
        }
    })
}











//view user

const viewUser=(id)=>{
    return db.user.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                viewuser:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'user not found'
            }
        }
    })
}



//update user

const updateUser = (id, firstname, lastname, lat, long, city, street, number, zipcode, email, username, password, phone) => {
    return db.user.findOne({ id })
        .then((user) => {
            if (!user) {
                return {
                    statusCode: 404,
                    message: 'User not found',
                };
            }

            // Update user data
            user.address = {
                geolocation: {
                    lat: lat,
                    long: long,
                },
                city: city,
                street: street,
                number: number,
                zipcode: zipcode,
            };
            user.name = {
                firstname: firstname,
                lastname: lastname,
            };
            {user.email = email; // Update email
            user.username = username; // Update username
            user.password = password; // Update password
            user.phone = phone;} ;// Update phone

            // Save the updated user document
            return user.save()
                .then((updatedUser) => {
                    return {
                        statusCode: 200,
                        message: 'Details updated successfully',
                        updatedUser: updatedUser.toObject(),
                    };
                })
                .catch((error) => {
                    return {
                        statusCode: 500,
                        message: 'Internal server error while saving updated user',
                        error: error.message,
                    };
                });
        })
        .catch((error) => {
            return {
                statusCode: 500,
                message: 'Internal server error while updating user',
                error: error.message,
            };
        });
};





module.exports={
    getAllUsers,
    addUser,
    viewUser,
    deleteUser,
    updateUser

    
}