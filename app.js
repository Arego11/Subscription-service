import express from 'express';
import { PORT,  DB_URI, NODE_ENV } from './config/env.js';

import UserRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import SubscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware.js'; // Import errorMiddleware
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';


const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.use('/api/v1/auth', authRouter); 
app.use('/api/v1/users', UserRouter); 
app.use('/api/v1/subscriptions', SubscriptionRouter); 
app.use('/api/v1/workflow', workflowRouter ); 

app.use(errorMiddleware);

app.get('/', (req,res) => {
    res.send('Subscription tracker API!');
});

app.listen(PORT, () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);

    connectToDatabase()
});
export default app;