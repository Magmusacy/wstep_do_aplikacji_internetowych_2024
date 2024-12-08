const express = require('express')
const { Order } = require('./db_setup.js');
const axios = require('axios');
const app = express()
const port = 4000

app.use(express.json());

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
app.post('/api/orders', async (req, res) => {
  if (!await bookExists(req.body.bookId)) {
    return res.status(404).send('Book not found');
  }
  const newOrder = await Order.create({
    bookId: req.body.bookId,
    userId: req.body.userId,
    quantity: req.body.quantity,
  });
  // chyba bede wgl musial sprawdzic czy taki uzytkownik tez istnieje?

  res.status(201).send({ id: newOrder.id });
})

// Remove specific order
app.delete('/api/orders/:id', async (req, res) => {
  const removeOrder = await Order.findByPk(req.params.id);
  if (!removeOrder) {
    res.status(404).send('Order not found');
    return;
  }
  await removeOrder.destroy();
  res.status(200).send({ id: req.params.id });
})

// Update specific order
app.patch('/api/orders/:id', async (req, res) => {
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
