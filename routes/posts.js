const express = require('express');

const postsRouter = (db) => {
    const router = express.Router({ mergeParams: true });
    const postsCollection = db.collection('posts');

    router.route('/')
        .get(async (req, res) => {
            try {
                const posts = await postsCollection.find().toArray();
                res.status(200).send(posts);
            } catch (error) {
                res.status(500).send({ error: 'Failed to fetch posts' });
            }
        })
        .post(async (req, res) => {
            // To-DO
        })
        .put(async (req, res) => {
            // To-DO
        })
        .delete(async (req, res) => {
            // To-DO
        });

    return router;
}

module.exports = postsRouter;