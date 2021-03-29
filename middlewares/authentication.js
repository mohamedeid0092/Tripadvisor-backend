const User = require('../models/user');
const jwt=require('jsonwebtoken')
const customeError = require('../helpers/customeError');


module.exports = async (req,res,next)=>{
        try{
        const token = req.headers.authorization.split(" ")[1];
       const decodedToken= jwt.verify(token,"SecretKey-for-jwt-should-be-long-key");
       req.userData = {Email: decodedToken.Email,userId:decodedToken.userId}; 
       next();
} catch(error){
        res.status(401).json({message: "Auth faild!"})
}  
};