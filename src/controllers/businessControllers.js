const Business = require('../models/Business');
const User = require('../models/User');

// Add a new business
exports.addBusiness = async (req, res) => {
  try {
    const { owner, name, category, address, contact, description } = req.body;

    // Check if the owner exists
    const user = await User.findById(owner);
    if (!user) return res.status(404).json({ message: 'Owner not found' });

    // Create a new business
    const business = new Business({
      owner,
      name,
      category,
      address,
      contact,
      description,
    });

    await business.save();
    res.status(201).json({ message: 'Business added successfully', business });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find().populate('owner', 'name email');
    res.status(200).json(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a single business by ID
exports.getBusinessById = async (req, res) => {
  try {
    const { id } = req.params;

    const business = await Business.findById(id).populate('owner', 'name email');
    if (!business) return res.status(404).json({ message: 'Business not found' });

    res.status(200).json(business);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a business
exports.updateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const business = await Business.findByIdAndUpdate(id, updates, { new: true });
    if (!business) return res.status(404).json({ message: 'Business not found' });

    res.status(200).json({ message: 'Business updated successfully', business });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a business
exports.deleteBusiness = async (req, res) => {
  try {
    const { id } = req.params;

    const business = await Business.findByIdAndDelete(id);
    if (!business) return res.status(404).json({ message: 'Business not found' });

    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all businesses owned by a specific user
exports.getBusinessesByOwner = async (req, res) => {
  try {
    const { ownerId } = req.params;

    const businesses = await Business.find({ owner: ownerId });
    if (!businesses.length) return res.status(404).json({ message: 'No businesses found for this owner' });

    res.status(200).json(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
