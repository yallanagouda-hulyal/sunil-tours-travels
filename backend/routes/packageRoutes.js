const express = require('express');
const router = express.Router();
const {
  getPackages,
  getPackageBySlug,
  createPackage,
  updatePackage,
  deletePackage
} = require('../controllers/packageController');
const { protect } = require('../middleware/auth');

router.get('/', getPackages);
router.get('/:slug', getPackageBySlug);
router.post('/', protect, createPackage);
router.patch('/:id', protect, updatePackage);
router.delete('/:id', protect, deletePackage);

module.exports = router;
