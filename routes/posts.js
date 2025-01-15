const express = require('express');
const postsRouter = express.Router({ mergeParams: true });

const Event = require('../src/models/Event');

postsRouter.route('/')
    .get(async (req, res) => {
        try {
            const events = await Event.find({}, 'posts', null);
            console.log(events);
            res.status(200).send(events);
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

module.exports = postsRouter;