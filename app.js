const express = require('express');
const app = express();
const port = 8080;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config()
//middleware
app.use(express.static('./public'))

app.use(express.json());


app.use('/api/v1/tasks' , tasks);
app.use(notFound)
app.use(errorHandlerMiddleware);
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log("server is listening")
        })
    }
    catch(error){
        console.log(error);
    }
}

start()
