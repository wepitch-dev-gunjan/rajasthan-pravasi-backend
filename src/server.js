const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Determine the environment
const ENVIRONMENT = process.env.NODE_ENV || 'development';
console.log(`Environment: ${ENVIRONMENT}`); // Optional log for debugging

// Load the appropriate .env file
if (ENVIRONMENT === 'production') {
    dotenv.config({ path: '.env.prod' }); // Load production environment variables
} else {
    dotenv.config({ path: '.env' }); // Load development environment variables
}

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Check if DB_URI is defined
if (!DB_URI) {
    console.error('Error: DB_URI is not defined in the .env file');
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.error('Database connection error:', err);
});

// MongoDB connection event listeners
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose connection closed due to app termination');
    process.exit(0);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
