const express = require('express');
const connectToDatabase = require('./src/database');

const usersRoutes = require('./routes/users');
const eventsRoutes  = require('./routes/events');
const postsRoutes  = require('./routes/posts');
const commentsRoutes  = require('./routes/comments');

const app = express();
const port = 3000;

async function main() {
    try {
        const db = await connectToDatabase();
        app.get('/', (req, res) => {
            res.send('Hello World!');
        })

        app.use('/api/users', usersRoutes(db));
        app.use('/api/events', eventsRoutes(db));

        /*
            app.use('/api/posts', postsRoutes(db));
            app.use('/api/comments', commentsRoutes(db));
        */

        app.use((req, res, next) => {
            res.status(404).send('Not Found');
        });

        return app;

    } catch(err) {
        console.error('Failed to connect to database:', err);
    }
}

main().then(app => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
});

