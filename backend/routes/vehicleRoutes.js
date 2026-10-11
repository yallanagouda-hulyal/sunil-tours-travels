const express = require('express');
const router = express.Router();
const {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle
} = require('../controllers/vehicleController');
const { protect } = require('../middleware/auth');

router.get('/', getVehicles);
router.post('/', protect, createVehicle);
router.patch('/:id', protect, updateVehicle);
router.delete('/:id', protect, deleteVehicle);

module.exports = router;
