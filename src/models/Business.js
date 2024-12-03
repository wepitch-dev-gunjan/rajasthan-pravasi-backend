const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    pin: String,
  },
  contact: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);
