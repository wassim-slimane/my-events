const express = require('express');
const commentsRouter = express.Router({ mergeParams: true });

const Event = require('../src/models/Event');

commentsRouter.route('/')
    .get(async (req, res) => {
        try {
            const comments = await Event.find({}, 'comments', null);

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

module.exports = commentsRouter;