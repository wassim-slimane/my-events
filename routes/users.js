const express = require('express');
const usersRouter = express.Router({ mergeParams: true });

const User = require('../src/models/User');

usersRouter.route('/')
    .get(async (req, res) => {
        try {
            const users = await User.find({}, null, null);

            res.status(200).send(users);
        } catch (error) {
            res.status(500).send({ error: 'Failed to fetch users' });
        }
    })
    .post(async (req, res) => {
        // To-DO
        const user = new User(req.body);
        await user.save();

        res.status(200).send(user);
    })
    .put(async (req, res) => {
        // To-DO
    })
    .delete(async (req, res) => {
        // To-DO
    });

module.exports = usersRouter;