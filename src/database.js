const { MongoClient } = require('mongodb');
require('dotenv').config();

async function connectToDatabase() {
    let database;

    try {
        const client = new MongoClient(process.env.DB_URI);
        console.log('Connecting...');
        await client.connect();
        console.log('Successfully connected to MongoDB');
        database = client.db(process.env.DB_NAME);

        return database;

    } catch (error) {
        console.error('Database connection failed!', error);
        process.exit();
    }
}

module.exports = connectToDatabase;
