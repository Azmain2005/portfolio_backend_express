const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  // We'll use this for the thumbnail/screenshot URL
  image: {
    type: String, 
  },
  // Storing tags as an array of strings
  tags: [
    {
      type: String,
    }
  ],
  // Keeping your original architectural fields
  icon: {
    type: String,
  },
  accentColor: {
    type: String,
    default: '#DAA520'
  },
  bgGradient: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Link to the parent category
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie',
  }
});

module.exports = productSchema;