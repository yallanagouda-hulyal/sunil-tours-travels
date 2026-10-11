const Destination = require('../models/Destination');

// @desc    Get all published destinations (or all for admin)
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res, next) => {
  try {
    const { category, search, all } = req.query;
    const filter = {};

    if (!all || all !== 'true') {
      filter.published = true;
    }

    if (category && category !== 'All') {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const destinations = await Destination.find(filter).sort({ name: 1 });
    res.json({ success: true, count: destinations.length, destinations });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single destination by slug
// @route   GET /api/destinations/:slug
// @access  Public
const getDestinationBySlug = async (req, res, next) => {
  try {
    const destination = await Destination.findOne({ slug: req.params.slug });
    if (!destination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    
    // Get related destinations in same category
    const related = await Destination.find({ 
      category: destination.category, 
      _id: { $ne: destination._id },
      published: true 
    }).limit(3);

    res.json({ success: true, destination, related });
  } catch (error) {
    next(error);
  }
};

// @desc    Create destination (Admin)
// @route   POST /api/destinations
// @access  Private (Admin)
const createDestination = async (req, res, next) => {
  try {
    const { name, slug, description, category, mainImage, gallery, location, duration, visitorInfo, additionalFees, published, featured } = req.body;
    
    const formattedSlug = slug ? slug.toLowerCase().replace(/\s+/g, '-') : name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const destination = await Destination.create({
      name,
      slug: formattedSlug,
      description,
      category,
      mainImage,
      gallery: gallery || [],
      location: location || 'Chikkamagaluru, Karnataka',
      duration: duration || '2-3 Hours',
      visitorInfo,
      additionalFees,
      published: published !== undefined ? published : true,
      featured: featured || false
    });

    res.status(201).json({ success: true, message: 'Destination created', destination });
  } catch (error) {
    next(error);
  }
};

// @desc    Update destination (Admin)
// @route   PATCH /api/destinations/:id
// @access  Private (Admin)
const updateDestination = async (req, res, next) => {
  try {
    if (req.body.slug) {
      req.body.slug = req.body.slug.toLowerCase().replace(/\s+/g, '-');
    }
    const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!destination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.json({ success: true, message: 'Destination updated', destination });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete destination (Admin)
// @route   DELETE /api/destinations/:id
// @access  Private (Admin)
const deleteDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.json({ success: true, message: 'Destination deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDestinations,
  getDestinationBySlug,
  createDestination,
  updateDestination,
  deleteDestination
};
