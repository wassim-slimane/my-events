const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const usersRoutes = require('./routes/users');
const eventsRoutes  = require('./routes/events');
const postsRoutes  = require('./routes/posts');
const commentsRoutes  = require('./routes/comments');

const app = express();
const port = 3000;

async function main() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Successfully connected to MongoDB');

        app.get('/', (req, res) => {
            res.send('Hello World!');
        })

        app.use('/api/users', usersRoutes);
        app.use('/api/events', eventsRoutes);
        app.use('/api/posts', postsRoutes);
        app.use('/api/comments', commentsRoutes);

        app.use((req, res, next) => {
            res.status(404).send('Not Found');
        });

        return app;

    } catch(err) {
        console.error('Database connection failed!', err);
    }
}

main().then(app => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
});

