const express = require('express');
const router = express.Router();
const {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
} = require('../controllers/enquiryController');
const { protect } = require('../middleware/auth');

router.post('/', createEnquiry);
router.get('/', protect, getEnquiries);
router.patch('/:id', protect, updateEnquiryStatus);
router.delete('/:id', protect, deleteEnquiry);

module.exports = router;
