const Vehicle = require('../models/Vehicle');

// @desc    Get all active vehicles (or all for admin)
// @route   GET /api/vehicles
// @access  Public
const getVehicles = async (req, res, next) => {
  try {
    const { all } = req.query;
    const filter = {};
    if (!all || all !== 'true') {
      filter.active = true;
    }

    const vehicles = await Vehicle.find(filter).sort({ seatingCapacity: 1 });
    res.json({ success: true, count: vehicles.length, vehicles });
  } catch (error) {
    next(error);
  }
};

// @desc    Create vehicle (Admin)
// @route   POST /api/vehicles
// @access  Private (Admin)
const createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json({ success: true, message: 'Vehicle created', vehicle });
  } catch (error) {
    next(error);
  }
};

// @desc    Update vehicle (Admin)
// @route   PATCH /api/vehicles/:id
// @access  Private (Admin)
const updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Vehicle not found' });
    }
    res.json({ success: true, message: 'Vehicle updated', vehicle });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete vehicle (Admin)
// @route   DELETE /api/vehicles/:id
// @access  Private (Admin)
const deleteVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Vehicle not found' });
    }
    res.json({ success: true, message: 'Vehicle deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
