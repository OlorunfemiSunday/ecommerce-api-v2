const express = require('express');
const { checkout, confirmPayment, getOrders, getOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/checkout', auth, checkout);
router.post('/confirm', auth, confirmPayment);
router.get('/', auth, getOrders);
router.get('/:id', auth, getOrder);

module.exports = router;
