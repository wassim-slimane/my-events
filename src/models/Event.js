const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxlength: 500, // Limit the length of a comment
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now, // Default to the current timestamp
    },
});

const postSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), // Automatically generate ObjectId
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxlength: 2000, // Limit post content length
    },
    mediaUrl: {
        type: String,
        default: null, // Optional media URL
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
    ],
    comments: [commentSchema], // Embed comments in the post
    timestamp: {
        type: Date,
        required: true,
        default: Date.now, // Default to the current timestamp
    },
});

const EventSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Types.ObjectId(), // Automatically generate ObjectId
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150, // Limit title length
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000, // Limit description length
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Sports', 'Education', 'Music', 'Art', 'Other'], // Predefined categories
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
    ],
    posts: [postSchema], // Embed posts in the event
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;