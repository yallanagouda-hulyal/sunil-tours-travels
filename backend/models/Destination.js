const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Nature', 'Waterfalls', 'Viewpoints', 'Temples', 'Adventure', 'Heritage'], 
    default: 'Nature' 
  },
  mainImage: { type: String, required: true },
  gallery: [{ type: String }],
  location: { type: String, default: 'Chikkamagaluru, Karnataka' },
  duration: { type: String, default: '2-3 Hours' },
  visitorInfo: { type: String, default: '' },
  additionalFees: { type: String, default: 'Subject to local authorities' },
  published: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
