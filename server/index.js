const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./Models/user');
const path = require('path');
require('./db/connection');

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/participants', async (req, res) => {
  try {
    const data = await users.find();
    res.render('data', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/', async (req, res) => {
  try {
    const newUser = await users.create(req.body);
    res.json({
      msg: "User created",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started at port ${PORT}`);
  }
});
