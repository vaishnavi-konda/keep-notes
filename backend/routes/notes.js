const Note = require('../models/Note.model');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });

    newNote.save();
    res.status(200).send(newNote);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send(note);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
