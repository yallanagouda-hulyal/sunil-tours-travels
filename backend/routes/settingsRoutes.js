const express = require('express');
const router = express.Router();
const { getPublicSettings } = require('../controllers/settingsController');

// Public route to fetch site settings
router.get('/', getPublicSettings);
router.get('/public', getPublicSettings);

module.exports = router;
