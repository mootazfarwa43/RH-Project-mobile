const Payment = require('../models/Payment');
const paymentService = require('../services/payment/paymentservice');

exports.createPayment = async (req, res) => {
    try {
        // Extract payment data from request body
        const { email, amount, currency, source, date, cvc, User_id } = req.body;

        // Create payment in database
        const payment = await Payment.create({
            email,
            amount,
            currency,
            source,
            date,
            cvc,
            User_id
        });

        // Process payment with Stripe
        const stripeCharge = await paymentService.processPayment(payment);

        // Update payment document with Stripe charge details
        payment.stripeChargeId = stripeCharge.id;
        payment.stripePaymentStatus = stripeCharge.status;
        payment.status = 'paid';
        await payment.save();

        // Send response
        res.status(201).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
