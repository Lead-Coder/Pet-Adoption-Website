const express = require('express');
const router = express.Router();
const Fish = require('../models/Fish');

router.get('/', async (req, res) => {
  try {
    const fish = await Fish.find();
    res.json(fish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
    try {
      //const fish = await Fish.findOne({ _id: req.params.id });
      const fish = await Fish.findById(req.params.id);
      if (!fish) {
        return res.status(404).json({ message: 'Fish not found' });
      }
      res.json(fish);
    } catch (error) {
      console.error('Error fetching fish:', error);
      res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

