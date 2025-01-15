const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        default: () => new mongoose.Types.ObjectId(), // Automatically generate ObjectId
    },
    name: {
        type: String,
        required: true,
        trim: true, // Remove leading/trailing spaces
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicate emails
        trim: true,
        lowercase: true, // Ensure email is stored in lowercase
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'], // Basic email validation
    },
    passwordHash: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: null, // Allows users to have no profile picture initially
    },
    bio: {
        type: String,
        default: '', // Default bio is an empty string
        maxlength: 200, // Limit bio length
    },
    joinedEvents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event', // Reference to Event model
        },
    ],
    createdEvents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event', // Reference to Event model
        },
    ],
}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;