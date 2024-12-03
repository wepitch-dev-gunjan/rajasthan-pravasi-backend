const express = require('express');
const router = express.Router();

// Import feature-specific route files
const userRoutes = require('./userRoutes'); // Replace with actual filename
const businessRoutes = require('./businessRoutes'); // Replace with actual filename

// Base route
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Rajasthan Pravasi Backend!' });
});

// Mount feature-specific routes
router.use('/users', userRoutes); // All user-related routes will be under /api/users
router.use('/businesses', businessRoutes); // All business-related routes will be under /api/businesses

module.exports = router;
