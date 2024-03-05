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

app.post('/checkEmail', async (req, res) => {
  const { personalEmailTeamLeader, member1Email, member2Email, member3Email } = req.body;

  console.log(personalEmailTeamLeader, member1Email, member2Email, member3Email);

  try {
    const existingUser = await users.findOne({
      $or: [
        { personalEmailTeamLeader },
        { member1Email },
        { member2Email },
        { member3Email }
      ]
    });

    console.log(existingUser);

    if (existingUser) {
      let errorMessage = '';

      if (existingUser.member1Email === member1Email || existingUser.member1Email === member2Email || existingUser.member1Email === member3Email || existingUser.member1Email === personalEmailTeamLeader) {
        errorMessage = 'Member 1 Email is already taken!';
      }

      if (existingUser.member2Email === member1Email || existingUser.member2Email === member2Email || existingUser.member2Email === member3Email || existingUser.member2Email === personalEmailTeamLeader) {
        errorMessage = 'Member 2 Email is already taken!';
      }

      if (existingUser.member3Email === member1Email || existingUser.member3Email === member2Email || existingUser.member3Email === member3Email || existingUser.member3Email === personalEmailTeamLeader) {
        errorMessage = 'Member 3 Email is already taken!';
      }

      if (existingUser.personalEmailTeamLeader === personalEmailTeamLeader || existingUser.personalEmailTeamLeader === member1Email || existingUser.personalEmailTeamLeader === member2Email || existingUser.personalEmailTeamLeader === member3Email) {
        errorMessage = "Team Leader Id already taken!"
      }

      return res.json({ exists: true, errorMessage });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
