const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('=== MongoDB Connection Debug ===');
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
    console.log('Available MONGO env vars:', Object.keys(process.env).filter(key => key.includes('MONGO')));
    
    const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI;
    
    if (!mongoURI) {
      console.log('All environment variables:', Object.keys(process.env));
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    
    console.log('Using MongoDB URI:', mongoURI.substring(0, 30) + '...');
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
