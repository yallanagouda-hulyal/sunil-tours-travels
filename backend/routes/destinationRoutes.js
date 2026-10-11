const express = require('express');
const router = express.Router();
const {
  getDestinations,
  getDestinationBySlug,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');
const { protect } = require('../middleware/auth');

router.get('/', getDestinations);
router.get('/:slug', getDestinationBySlug);
router.post('/', protect, createDestination);
router.patch('/:id', protect, updateDestination);
router.delete('/:id', protect, deleteDestination);

module.exports = router;
