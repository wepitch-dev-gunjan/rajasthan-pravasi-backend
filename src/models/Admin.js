const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['SuperAdmin', 'Admin'], default: 'Admin' },
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
