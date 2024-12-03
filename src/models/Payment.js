const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
