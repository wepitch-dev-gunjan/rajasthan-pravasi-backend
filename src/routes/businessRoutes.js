const express = require('express');
const {
  addBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  getBusinessesByOwner,
} = require('../controllers/businessController');

const router = express.Router();

// Add a business
router.post('/', addBusiness);

// Get all businesses
router.get('/', getAllBusinesses);

// Get a business by ID
router.get('/:id', getBusinessById);

// Update a business
router.put('/:id', updateBusiness);

// Delete a business
router.delete('/:id', deleteBusiness);

// Get all businesses by a specific owner
router.get('/owner/:ownerId', getBusinessesByOwner);

module.exports = router;
