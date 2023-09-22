const express = require('express');

const app = express();
app.use(express.json());
const PORT = 7865;

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  const payload = (
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
  res.json(payload);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.setHeader('Content-Type', 'text/plain');
  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
