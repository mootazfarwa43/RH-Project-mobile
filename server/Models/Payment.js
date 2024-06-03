const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    source: { type: String, required: true },
    date: { type: String, required: true },
    cvc: { type: String, required: true },
    status: { type: String, enum: ['paid', 'not paid'], default: 'not paid' },
    createdAt: { type: Date, default: Date.now },
    // Stripe specific fields
    stripeChargeId: { type: String },
    stripePaymentStatus: { type: String }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;