const express = require('express');

const usersRouter = (db) => {
    const router = express.Router({ mergeParams: true });
    const usersCollection = db.collection('users');

    router.route('/')
        .get(async (req, res) => {
            try {
                const users = await usersCollection.find().toArray();
                res.status(200).send(users);
            } catch (error) {
                res.status(500).send({ error: 'Failed to fetch users' });
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

module.exports = usersRouter;