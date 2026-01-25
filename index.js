const dotenv = require("dotenv");
const express = require("express");
const  mongoose = require('mongoose');
const categorieHandler = require("./routeHandler/categorieHandler");
const productHandler = require("./routeHandler/productHandler");
const userHandler = require("./routeHandler/userHandler");


const cors = require("cors"); // ✅ import cors
dotenv.config();


//express app init
const app = express();
app.use(express.json());



// ✅ enable CORS
app.use(cors()); // allow Next.js frontend only
// OR allow all origins (not recommended for production):
// app.use(cors());




//database connect
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connection successfull.")
})
.catch(err => console.log(err))




//application routes
app.use("/categorie", categorieHandler);
app.use("/product",productHandler);
app.use("/user",userHandler);



//error handeling default function
function errorHandler(err,req, res, next){
    if (res.headersSent){
        return next(err);
    }
    res.status(500).json({error:err});
}


app.listen(3003,() =>{
    console.log("The project started on port:3003")
})

console.log('hello world')