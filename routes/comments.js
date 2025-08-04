const express = require('express');
const commentsRouter = express.Router({ mergeParams: true });

const Event = require('../src/models/Event');

commentsRouter.route('/')
    .get(async (req, res) => {
        try {
            const events = await Event.find({}, 'posts.comments', null);
            const comments = events.flatMap((event) => event.posts.flatMap((post) => post.comments));

            res.status(200).json(comments);
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

module.exports = commentsRouter;