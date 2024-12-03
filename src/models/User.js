const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  aadharNumber: { type: String, unique: true, required: true },
  pravasiCardNumber: { type: String, unique: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    pin: String,
  },
  familyContact: { type: String, required: true }, // Emergency contact
  paymentStatus: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
  isVerified: { type: Boolean, default: false }, // Aadhar verification
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
