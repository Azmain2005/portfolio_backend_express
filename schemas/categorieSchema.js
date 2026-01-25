const mongoose = require('mongoose');


const categorieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    accentColor: {
        type: String,
        default: '#DAA520'
    },
    // This allows us to populate all products belonging to this category
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    date: {
        type: Date,
        default: Date.now,
    }
});



module.exports = categorieSchema;

