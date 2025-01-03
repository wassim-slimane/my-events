const express = require('express')
const usersRouter = express.Router({ mergeParams: true })

usersRouter.get('/', (req, res) => {
    res.render('users', { title: 'users' })
});

usersRouter.post('/', (req, res) => {
    // To-DO    
});

usersRouter.put('/', (req, res) => {
    // To-DO   
});

usersRouter.delete('/', (req, res) => {
    // To-DO   
});

module.exports = usersRouter