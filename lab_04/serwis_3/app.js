const express = require('express')
const User= require('./userModel.js');
const jwt = require('jsonwebtoken');
const app = express()
const port = 5000
const NOT_SO_SECRET_SECRET_KEY="notsosecret";

app.use(express.json());

// Verify token 
function verifyToken(req, res, next) {
  token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Brak tokena');
  }

  try {
    if (!req.headers['authorization'].startsWith("Bearer ")) {
      throw new Error('Nieprawidłowy token');
    }
    jwt.verify(token.substring(7, token.length), NOT_SO_SECRET_SECRET_KEY);
    next();
  } catch (error) {
    return res.status(403).send('Nieprawidłowy token');
  }
}

// Register
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password });
  res.status(201).send('User created');
})

// Login (zwraca JWT)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ where: { email, password } });
  if (user) {
    const token = jwt.sign({ userId: user.id, email }, NOT_SO_SECRET_SECRET_KEY);
    res.status(200).send({ token });
  }
  res.status(401).send('Nieprawidłowe dane');
})

app.listen(port, () => {
  console.log(`User service listening on ${port}`)
})
