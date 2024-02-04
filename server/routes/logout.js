import express from "express";
const logoutRoute=express.Router()
logoutRoute.post('/logout',(req,res)=>{
    res.clearCookie('token')
   res.json('tokendeleted')
})
export default logoutRoute
