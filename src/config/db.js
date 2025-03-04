const mongoose = require('mongoose');
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

const connectDB = async () => {
    try {
        await pool.connect();
        console.log('Connected to PostgreSQL');

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to databases', err);
        process.exit(1);
    }
};

module.exports = { pool, connectDB };
