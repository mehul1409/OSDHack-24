const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./Models/user');
require('./db/connection');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hii');
})

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

// app.post('/checkEmail', async (req, res) => {
//   const personalEmailTeamLeader = req.body.personalEmailTeamLeader;
//   const member1Email = req.body.member1email;
//   const member2Email = req.body.member2email;
//   const member3Email = req.body.member3Email;

//   try {
//     const existingUsers = await users.find({
//       $or: [{"member1Email":personalEmailTeamLeader},{"member1Email":member1Email},{"member1Email":member2Email},{"member1Email":member3Email},{"member2Email":personalEmailTeamLeader},{"member2Email":member1Email},{"member2Email":member2Email},{"member2Email":member3Email},{"member3Email":personalEmailTeamLeader},{"member3Email":member1Email},{"member3Email":member2Email},{"member3Email":member3Email}]
//     }).count()>0;

//     console.log(existingUsers);

//     if (existingUsers) {
//       errorMessage="SomeEmail is Already exists!";
//       return res.json({ exists: true, errorMessage });
//     } else {
//       return res.json({ exists: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server started at port ${PORT}`);
  }
});
