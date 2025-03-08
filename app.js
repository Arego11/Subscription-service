import express from 'express';
import { PORT } from './config/env.js';
//const PORT = 3000;

const app = express(); //initialize


//first route, reacheable in the home page
app.get('/', (req,res) => {
    res.send('Subscription tracker API!');
});
//makes server listen to a speciific port
app.listen(PORT, () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
});
export default app;