const express = require('express');
const router = express.Router();
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

router.post('/', createBooking);
router.get('/', protect, getBookings);
router.get('/:id', protect, getBookingById);
router.patch('/:id/status', protect, updateBookingStatus);
router.patch('/:id', protect, updateBooking);
router.delete('/:id', protect, deleteBooking);

module.exports = router;
