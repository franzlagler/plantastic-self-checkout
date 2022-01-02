const express = require("express");
const { getTotalPrice } = require("../utils/price");
const paymentRoutes = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

paymentRoutes.route("/create-payment-intent").post(async (req, res) => {
  const basketCookie = req.body.basketCookie;
  const total = await getTotalPrice(basketCookie);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  res.send({ clientSecret: paymentIntent.client_secret });
});

module.exports = paymentRoutes;
