const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

// middle wares 
app.use(express.json()); 
app.use(express.static('./public')); 


// routes 
app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONOGO_URL)
        app.listen(port, () => {
            console.log(`the server is runing on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}


start();
