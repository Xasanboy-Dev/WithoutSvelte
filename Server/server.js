import express from "express"
import ejs from "ejs"
import {pool} from "./config/db.js";
const server = express()
const PORT = 8080
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.set("view engine","ejs")
// Get Method

server.get('/', async (req,res)=>{
    try{
        const users = (await pool.query(`SELECT * FROM users`)).rows
   res.render("first",{title:"Homepage",users})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// Register get
server.get("/register",(req,res)=>{
    try{
 res.render("register",{title:"Regitration"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

server.post('/register',(req,res)=>{
    try{
   const {name,email,password,gender} = req.body
        if(name!=="" && email!=="" && password!==""){
            console.log(req.body)
        }else{
   res.status(200).send(`<a  class="btn text-primary " href="/">Click me</a>`)
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
// Login Page
server.get("/login",(req,res)=>{
    try{
        res.render("login",{title:"Login Page"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

server.post('/login',async (req,res)=>{
    try{
     const {name,email,password} = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE name = $1 AND email = $2 AND password = $3`,[name,email,password])).rows
   if(user.length!==0){
       res.render("first",{title:"Hello Again"})
   }else{
       ("Hello World")
   }
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
server.listen(PORT,()=>{
    console.log(`Server: http://localhost:${PORT}`)
})

