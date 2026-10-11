const Package = require('../models/Package');
const mongoose = require('mongoose');

// Helper to determine serial order weight for packages
const getOrderWeight = (pkg) => {
  const slug = (pkg.slug || '').toLowerCase();
  const name = (pkg.name || '').toLowerCase();
  if (slug === 'day-1' || name.startsWith('day 1')) return 1;
  if (slug === 'day-2' || name.startsWith('day 2')) return 2;
  if (slug === 'day-3' || name.startsWith('day 3')) return 3;
  if (slug === 'day-4' || name.startsWith('day 4')) return 4;
  if (slug.includes('3-day') || name.includes('3-day') || name.includes('complete')) return 5;
  if (pkg.category === 'Student' || name.includes('student')) return 6;
  if (pkg.category === 'Corporate' || name.includes('corporate')) return 7;
  return 10;
};

// @desc    Get all published packages (or all for admin)
// @route   GET /api/packages
// @access  Public
const getPackages = async (req, res, next) => {
  try {
    const { category, search, all } = req.query;
    const filter = {};

    if (!all || all !== 'true') {
      filter.published = true;
    }

    if (category && category !== 'All') {
      const targetCat = category.toLowerCase().trim();
      if (targetCat === 'group') {
        filter.$or = [
          { category: { $in: ['Group', 'Student', 'Corporate', /group/i, /student/i, /corporate/i] } },
          { categories: { $in: ['Group', 'Student', 'Corporate'] } },
          { name: { $regex: 'group|student|corporate', $options: 'i' } }
        ];
      } else if (targetCat === 'adventure') {
        filter.$or = [
          { category: { $in: ['Adventure', /adventure/i] } },
          { categories: 'Adventure' },
          { name: { $regex: 'adventure', $options: 'i' } },
          { description: { $regex: 'jeep|trek|adventure|safari', $options: 'i' } }
        ];
      } else if (targetCat === 'sightseeing') {
        filter.$or = [
          { category: { $regex: '^sightseeing$', $options: 'i' } },
          { categories: 'Sightseeing' },
          { name: { $regex: '^day', $options: 'i' } }
        ];
      } else {
        filter.$or = [
          { category: { $regex: `^${category}$`, $options: 'i' } },
          { categories: { $regex: `^${category}$`, $options: 'i' } },
          { name: { $regex: category, $options: 'i' } }
        ];
      }
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    let packages = await Package.find(filter);
    
    // Sort packages strictly in serial order: Day 1 -> Day 2 -> Day 3 -> Day 4
    packages.sort((a, b) => getOrderWeight(a) - getOrderWeight(b));

    res.json({ success: true, count: packages.length, packages });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single package by slug or alias
// @route   GET /api/packages/:slug
// @access  Public
const getPackageBySlug = async (req, res, next) => {
  try {
    const paramSlug = req.params.slug.toLowerCase().trim();
    
    // 1. Try exact slug match
    let pkg = await Package.findOne({ slug: paramSlug });
    
    // 2. Extract day identifier (e.g. 'day-1-mullayanagiri-tour' -> 'day-1')
    if (!pkg) {
      const matchDay = paramSlug.match(/^(day-\d)/i);
      if (matchDay) {
        pkg = await Package.findOne({
          $or: [
            { slug: matchDay[1] },
            { slug: new RegExp(`^${matchDay[1]}`, 'i') }
          ]
        });
      }
    }

    // 3. Try prefix match
    if (!pkg) {
      pkg = await Package.findOne({ slug: new RegExp(`^${paramSlug}`, 'i') });
    }

    // 4. Try name match
    if (!pkg) {
      const searchPattern = paramSlug.replace(/-/g, ' ');
      pkg = await Package.findOne({
        $or: [
          { name: new RegExp(searchPattern, 'i') },
          { name: new RegExp(paramSlug, 'i') }
        ]
      });
    }

    // 5. Try ObjectId match
    if (!pkg && mongoose.Types.ObjectId.isValid(paramSlug)) {
      pkg = await Package.findById(paramSlug);
    }

    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }
    res.json({ success: true, package: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Create package (Admin)
// @route   POST /api/packages
// @access  Private (Admin)
const createPackage = async (req, res, next) => {
  try {
    const {
      name,
      slug,
      duration,
      description,
      category,
      price,
      priceLabel,
      dayWiseItinerary,
      locationCards,
      gallery,
      travelTips,
      activities,
      inclusions,
      exclusions,
      image,
      published,
      featured
    } = req.body;
    
    const formattedSlug = slug ? slug.toLowerCase().replace(/\s+/g, '-') : name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const newPackage = await Package.create({
      name,
      slug: formattedSlug,
      duration,
      description,
      category: category || 'Sightseeing',
      categories: req.body.categories || (category ? [category] : ['Sightseeing']),
      price,
      priceLabel: priceLabel || 'Vehicle charges',
      dayWiseItinerary: dayWiseItinerary || [],
      locationCards: locationCards || [],
      gallery: gallery || [],
      travelTips: travelTips || [],
      activities: activities || [],
      inclusions: inclusions || [],
      exclusions: exclusions || [],
      image,
      published: published !== undefined ? published : true,
      featured: featured || false
    });

    res.status(201).json({ success: true, message: 'Package created', package: newPackage });
  } catch (error) {
    next(error);
  }
};

// @desc    Update package (Admin)
// @route   PATCH /api/packages/:id
// @access  Private (Admin)
const updatePackage = async (req, res, next) => {
  try {
    if (req.body.slug) {
      req.body.slug = req.body.slug.toLowerCase().replace(/\s+/g, '-');
    }
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }
    res.json({ success: true, message: 'Package updated', package: pkg });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete package (Admin)
// @route   DELETE /api/packages/:id
// @access  Private (Admin)
const deletePackage = async (req, res, next) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }
    res.json({ success: true, message: 'Package deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPackages,
  getPackageBySlug,
  createPackage,
  updatePackage,
  deletePackage
};
