const express = require('express');
const router = express.Router();
const Order = require('../modal/orders'); 

router.get('/portal', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
    console.log(orders)
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
