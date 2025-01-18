const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  name: { 
    type: String, 
    required: true 
  },
  breed: { 
    type: String, 
    required: true 
  },
  age: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true }
});

module.exports = mongoose.model('Fish', fishSchema);

