const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

// const db = mongoose.connect('mongodb://localhost:27017/accident')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('Error connecting to MongoDB:', error));
const db = 'mongodb+srv://haristariq894:EIh2X5iJqy4Rl2X5@cluster0.kv9u3su.mongodb.net/getAccident';
try {
    mongoose.connect(db);
    const dbConnection = mongoose.connection;
  
    dbConnection.once('open', () => {
      console.log('Connected to MongoDB');
    });
  
    dbConnection.on('error', (error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
  } catch (error) {
    console.error('Error in MongoDB connection setup:', error.message);
  }

module.exports = db;