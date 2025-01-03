const express = require('express')
const eventsRouter = express.Router({ mergeParams: true })

eventsRouter.get('/', (req, res) => {
    res.render('events', { title: 'Events' })
});

eventsRouter.post('/', (req, res) => {
    // To-DO
});

eventsRouter.put('/', (req, res) => {
    // To-DO
});

eventsRouter.delete('/', (req, res) => {
    // To-DO
});

module.exports = eventsRouter