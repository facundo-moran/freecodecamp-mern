import express from 'express';
import expressListEndpoints from 'express-list-endpoints'
import bodyParser from 'body-parser'

import { corsMiddleware } from './src/middlewares/corsMiddleware.js';

//ROUTE
import { router as bookRoutes } from './src/routes/v1/bookRoute.js'
//DB
import { connectDB } from './src/configs/db.config.js'

const app = express();

/**
 *  MIDDLEWARES
 */
app.use(bodyParser.json());
app.use(corsMiddleware);

app.use('/api/v1', bookRoutes)

// Obtén la lista de rutas registradas
const routes = expressListEndpoints(app);

routes.forEach((route) => {
  console.log(`Route: ${route.methods.join(', ')} - ${route.path}`);
});

connectDB(app);