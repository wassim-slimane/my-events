const express = require('express')
const eventsRouter = express.Router({ mergeParams: true });

const Event = require('../src/models/Event');

eventsRouter.route('/')
    .get(async (req, res) => {
        try {
            const events = await Event.find({}, null, null);

            res.status(200).json(events);
        } catch (error) {
            res.status(500).send({ error: 'Failed to fetch events' });
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

module.exports = eventsRouter;