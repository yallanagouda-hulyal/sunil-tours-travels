const SiteSettings = require('../models/SiteSettings');

// @desc    Get public site settings
// @route   GET /api/settings/public
// @access  Public
const getPublicSettings = async (req, res, next) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = await SiteSettings.create({});
    }
    res.json({ success: true, settings });
  } catch (error) {
    next(error);
  }
};

// @desc    Update site settings (Admin)
// @route   PATCH /api/settings
// @access  Private (Admin)
const updateSettings = async (req, res, next) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = await SiteSettings.create(req.body);
    } else {
      Object.assign(settings, req.body);
      await settings.save();
    }
    res.json({ success: true, message: 'Settings updated', settings });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPublicSettings,
  updateSettings
};
