const stripe = require('stripe')('sk_test_51PFMmLDXp8JxvzvIlJnibLp2MXzHI0yc1AjjTndXBFMrxxX1AhIUWFKQYtVn7qO427TTykCztUd9XQ93Ee1DycWc00RztyPNeu');

exports.processPayment = async (payment) => {
  try {
    // Create a charge using Stripe
    const stripeCharge = await stripe.charges.create({
      amount: payment.amount,
      currency: payment.currency,
      source: payment.source,
      description: 'Payment for services'
      // Additional parameters as needed
    });

    return stripeCharge;
  } catch (error) {
    throw error;
  }
};