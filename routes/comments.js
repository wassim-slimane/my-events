const express = require('express');

const commentsRouter = (db) => {
    const router = express.Router({ mergeParams: true });
    const commentsCollection = db.collection('comments');

    router.route('/')
        .get(async (req, res) => {
            try {
                const comments = await commentsCollection.find().toArray();
                res.status(200).send(comments);
            } catch (error) {
                res.status(500).send({ error: 'Failed to fetch comments' });
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

module.exports = commentsRouter;