import express from 'express';
import { MONGO_URL, PORT } from './config.js';
import mongoose from 'mongoose'

//DB
mongoose.connect(MONGO_URL).then(() => {
    console.log("mongoose successful connection");
    //SERVER
    app.listen(PORT, () => { console.log(`API Listening at localhost:${PORT}`) })
}).catch(console.error)

//EXPRESS
const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello world from NodeJS 18");
})


