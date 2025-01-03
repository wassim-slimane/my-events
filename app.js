const express = require('express')
const app = express()
const port = 3000

const usersRoutes = require('./routes/users');
const eventsRoutes  = require('./routes/events');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/users', usersRoutes);
app.use('/events', eventsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})