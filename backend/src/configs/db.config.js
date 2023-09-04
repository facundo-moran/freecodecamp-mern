import mongoose from 'mongoose'
import { MONGO_URL, PORT } from './config.js'


export const connectDB = (app) => {
    mongoose.connect(MONGO_URL).then(() => {
        console.log("mongoose successful connection");
        //SERVER
        app.listen(PORT, () => { console.log(`API Listening at localhost:${PORT}`) })
    }).catch(console.error)
}