const Order = require('../models/Order');
const Cart = require('../models/Cart');
const payment = require('../utils/payment');

exports.checkout = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const order = new Order({
    user: req.user.id,
    products: cart.items.map(i => ({ product: i.product._id, quantity: i.quantity })),
    total
  });

  await order.save();
  res.status(201).json({ message: 'Order created', order });
};

exports.confirmPayment = async (req, res) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return res.status(404).json({ message: 'Order not found' });

  const success = payment();
  order.status = success ? 'paid' : 'failed';
  await order.save();

  res.json({ message: success ? 'Payment successful' : 'Payment failed', order });
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('products.product');
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('products.product');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
};
