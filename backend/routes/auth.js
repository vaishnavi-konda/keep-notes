const router = require('express').Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save user to database and return response
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(400).send(user);

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validPassword && res.status(400).send('Invalid password');

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
