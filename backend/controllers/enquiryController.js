const Enquiry = require('../models/Enquiry');

// @desc    Submit general enquiry
// @route   POST /api/enquiries
// @access  Public
const createEnquiry = async (req, res, next) => {
  try {
    const {
      name,
      customerName,
      phone,
      email,
      tourType,
      groupSize,
      travelDate,
      pickupLocation,
      numberOfDays,
      vehicleRequirement,
      foodAccommodation,
      message
    } = req.body;

    const finalName = (name || customerName || '').trim();
    const finalPhone = (phone || '').trim();
    const finalMessage = (message || '').trim();

    if (!finalName || !finalPhone || !finalMessage) {
      return res.status(400).json({ success: false, message: 'Please provide Full Name, Phone Number, and Message.' });
    }

    const enquiry = await Enquiry.create({
      name: finalName,
      phone: finalPhone,
      email: email ? email.trim() : '',
      tourType: tourType || 'Chikkamagaluru Sightseeing',
      groupSize: groupSize || '',
      travelDate: travelDate || '',
      pickupLocation: pickupLocation || '',
      numberOfDays: numberOfDays || '',
      vehicleRequirement: vehicleRequirement || '',
      foodAccommodation: foodAccommodation || '',
      message: finalMessage,
      followUpStatus: 'New'
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      enquiry
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all enquiries (Admin)
// @route   GET /api/enquiries
// @access  Private (Admin)
const getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, enquiries });
  } catch (error) {
    next(error);
  }
};

// @desc    Update enquiry follow-up status (Admin)
// @route   PATCH /api/enquiries/:id
// @access  Private (Admin)
const updateEnquiryStatus = async (req, res, next) => {
  try {
    const { followUpStatus, adminNotes } = req.body;
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    if (followUpStatus) enquiry.followUpStatus = followUpStatus;
    if (adminNotes !== undefined) enquiry.adminNotes = adminNotes;

    await enquiry.save();
    res.json({ success: true, message: 'Enquiry updated successfully', enquiry });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete enquiry (Admin)
// @route   DELETE /api/enquiries/:id
// @access  Private (Admin)
const deleteEnquiry = async (req, res, next) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
};
