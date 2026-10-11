const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { 
    type: String, 
    enum: ['10-Seater Tempo', '50-Seater Bus', '4x4 Off-Road Jeep', 'Sedan / SUV', 'Two-Wheeler'], 
    default: '10-Seater Tempo' 
  },
  seatingCapacity: { type: Number, required: true },
  luggageCapacity: { type: String, default: 'Standard Luggage Space' },
  description: { type: String, required: true },
  facilities: [{ type: String }],
  suitableFor: { type: String, default: 'Family & Group Tours' },
  image: { type: String, required: true },
  startingPrice: { type: Number, default: 3500 },
  priceLabel: { type: String, default: 'per day vehicle charge' },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
