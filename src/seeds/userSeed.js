const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);

        console.log('Database connected successfully!');

        // Clear existing data
        await User.deleteMany();
        console.log('Users data cleared.');

        // Seed users
        const users = [
            { name: 'John Doe', email: 'john.doe@example.com', passwordHash: 'hashed_password1', bio: 'Loves tech events!' },
            { name: 'Jane Smith', email: 'jane.smith@example.com', passwordHash: 'hashed_password2', bio: 'Basketball fan!' },
            { name: 'Alice Johnson', email: 'alice.johnson@example.com', passwordHash: 'hashed_password3', bio: 'Creative coder.' },
        ];
        const userDocs = await User.insertMany(users, null);
        console.log('Users seeded:', userDocs);

        // Get new users ids to use it for generating events
        const newUsers = await User.find({}, '_id', null);
        const usersIds = newUsers.map(user => user._id);

        await mongoose.connection.close();

        return usersIds;

    } catch (error) {
        await mongoose.connection.close();

        return error;
    }
};

// Run the seed script
seedUsers().then((userDocs) => console.log('Users seeded ids:', userDocs)).catch(error => console.log(error));
