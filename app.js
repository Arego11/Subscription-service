import express from 'express';
import { PORT,  DB_URI, NODE_ENV } from './config/env.js';

import UserRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import SubscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express(); 

app.use('/api/v1/auth', authRouter); 
app.use('/api/v1/users', UserRouter); 
app.use('/api/v1/subscriptions', SubscriptionRouter); 

app.get('/', (req,res) => {
    res.send('Subscription tracker API!');
});

app.listen(PORT, () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);

    connectToDatabase()
});
export default app;