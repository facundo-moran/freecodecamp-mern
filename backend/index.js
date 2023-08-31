import express from 'express';
import { PORT } from './config.js';

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello world from NodeJS 18"); 
})

//SERVER
app.listen(PORT, () => {console.log(`API Listening at localhost:${PORT}`)})
