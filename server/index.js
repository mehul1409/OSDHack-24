const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./Models/user');
require('./db/connection');

app.use(express.json());
app.use(cors());

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started at port ${PORT}`);
  }
});
