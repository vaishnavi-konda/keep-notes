const Note = require('../models/Note.model');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).send(notes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
