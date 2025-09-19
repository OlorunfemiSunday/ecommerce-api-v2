const express = require('express');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/add', auth, addToCart);
router.get('/', auth, getCart);
router.delete('/remove/:id', auth, removeFromCart);

module.exports = router;
