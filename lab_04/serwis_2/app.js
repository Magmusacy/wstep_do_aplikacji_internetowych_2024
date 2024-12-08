const express = require('express')
const Order = require('./orderModel.js');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const app = express()
const port = 4000
const NOT_SO_SECRET_SECRET_KEY = "notsosecret";

app.use(express.json());

// Verify token middleware
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Token missing');
  }

  try {
    if (!token.startsWith("Bearer ")) {
      throw new Error('Invalid token');
    }
    jwt.verify(token.substring(7, token.length), NOT_SO_SECRET_SECRET_KEY);
    next();
  } catch (error) {
    return res.status(403).send('Invalid token');
  }
}

// Check book existance
async function bookExists(book_id) {
  try {
    const response = await axios.get(`http://localhost:3000/api/books/${book_id}`);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

// Get user orders
app.get('/api/orders/:user_id', async (req, res) => {
  const orders = await Order.findAll({where: {userId: req.params.user_id}});
  res.status(200).send(orders);
})

// Add order
app.post('/api/orders', verifyToken, async (req, res) => {
  console.log(req)
  if (!await bookExists(req.body.bookId)) {
    return res.status(404).send('Book not found');
  }
  try {
    const newOrder = await Order.create({
      bookId: req.body.bookId,
      userId: req.body.userId,
      quantity: req.body.quantity,
    });
    res.status(201).send({ id: newOrder.id });
  } catch (err) {
    res.status(400).send('Bad request');
  }
})

// Remove specific order
app.delete('/api/orders/:id', verifyToken, async (req, res) => {
  const removeOrder = await Order.findByPk(req.params.id);
  if (!removeOrder) {
    res.status(404).send('Order not found');
    return;
  }
  await removeOrder.destroy();
  res.status(200).send({ id: req.params.id });
})

// Update specific order
app.patch('/api/orders/:id', verifyToken, async (req, res) => {
  const updateOrder = await Order.findByPk(req.params.id);
  const updates = req.body;
  if (!updateOrder) {
    res.status(404).send('Order not found');
    return;
  }
  if (!await bookExists(req.body.bookId)) {
    return res.status(404).send('Book not found');
  }
  await updateOrder.update(updates);
  res.status(200).send(updateOrder);
})

app.listen(port, () => {
  console.log(`Orders service listening on port ${port}`)
})
