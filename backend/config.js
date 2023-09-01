import { config } from 'dotenv'

//DOTENV
config();

export const PORT = parseInt(process.env.PORT) || 3000;
export const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`;