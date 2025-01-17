const mongoose = require('mongoose');
require('dotenv').config();

const Event = require('../models/Event');
const {ObjectId} = require("mongodb");

const seedEvents = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);

        console.log('Database connected successfully!');

        // Clear existing data
        await Event.deleteMany();
        console.log('Events data cleared.');

        // Seed events
        const events = [
            {
                title: 'Tech Conference 2024',
                description: 'A meetup for tech enthusiasts to network and learn.',
                date: new Date('2024-12-31T18:00:00Z'),
                location: 'Paris, France',
                category: 'Technology',
                creatorId: '6787cdd5ed137db4c5327e90',
                members: ['6787cdd5ed137db4c5327e91', '6787cdd5ed137db4c5327e92'],
                posts: [
                    {
                        creatorId: '6787cdd5ed137db4c5327e90',
                        content: 'Excited for the event!',
                        mediaUrl: 'https://example.com/image1.jpg',
                        likes: ['6787cdd5ed137db4c5327e91', '6787cdd5ed137db4c5327e92'],
                        comments: [
                            {
                                userId: '6787cdd5ed137db4c5327e91',
                                content: 'Looking forward to this!',
                                timestamp: new Date(),
                            },
                        ],
                        timestamp: new Date(),
                    },
                ],
            },
            {
                title: 'Basketball Meetup 2025',
                description: 'A friendly game for basketball enthusiasts.',
                date: new Date('2025-01-15T15:00:00Z'),
                location: 'Lyon, France',
                category: 'Sports',
                creatorId: '6787cdd5ed137db4c5327e91',
                members: ['6787cdd5ed137db4c5327e90', '6787cdd5ed137db4c5327e92'],
                posts: [
                    {
                        creatorId: '6787cdd5ed137db4c5327e91',
                        content: 'Can’t wait for the game!',
                        mediaUrl: null,
                        likes: ['6787cdd5ed137db4c5327e90', '6787cdd5ed137db4c5327e92'],
                        comments: [],
                        timestamp: new Date(),
                    },
                ],
            },
        ];
        const eventDocs = await Event.insertMany(events, null);
        console.log('Events seeded:', eventDocs);

        await mongoose.connection.close();

        return eventDocs;

    } catch (error) {
        await mongoose.connection.close();

        return error;
    }
};

// Run the seed script
seedEvents().then(() => console.log('Events seeded successfully!')).catch(error => console.log(error));
