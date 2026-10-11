const Booking = require('../models/Booking');

// Helper to generate unique booking reference
const generateRef = () => {
  const dateStr = new Date().toISOString().slice(0,10).replace(/-/g, '');
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `STT-${dateStr}-${randomStr}`;
};

// @desc    Create new booking enquiry
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res, next) => {
  try {
    const {
      customerName,
      phone,
      email,
      packageOrDestination,
      travelDate,
      returnDate,
      passengerCount,
      vehicleType,
      pickupLocation,
      tripDuration,
      specialRequests,
      preferredContact
    } = req.body;

    // Validation
    if (!customerName || !phone || !packageOrDestination || !travelDate || !passengerCount) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide required fields: Customer Name, Phone, Package/Destination, Travel Date, and Passengers.' 
      });
    }

    // Phone validation (Indian phone format check)
    const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
    if (cleanPhone.length < 10) {
      return res.status(400).json({ success: false, message: 'Please enter a valid phone number with at least 10 digits.' });
    }

    // Passenger count validation
    if (parseInt(passengerCount, 10) <= 0) {
      return res.status(400).json({ success: false, message: 'Passenger count must be a positive number.' });
    }

    // Date validation
    const parsedTravelDate = new Date(travelDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parsedTravelDate < today) {
      return res.status(400).json({ success: false, message: 'Travel date cannot be in the past.' });
    }

    if (returnDate) {
      const parsedReturnDate = new Date(returnDate);
      if (parsedReturnDate < parsedTravelDate) {
        return res.status(400).json({ success: false, message: 'Return date cannot precede the travel date.' });
      }
    }

    const bookingReference = generateRef();

    const booking = await Booking.create({
      bookingReference,
      customerName: customerName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      packageOrDestination: packageOrDestination.trim(),
      travelDate: parsedTravelDate,
      returnDate: returnDate ? new Date(returnDate) : undefined,
      passengerCount: parseInt(passengerCount, 10),
      vehicleType: vehicleType || 'Standard Sightseeing Vehicle',
      pickupLocation: pickupLocation || 'Chikkamagaluru',
      tripDuration: tripDuration || '1 Day',
      specialRequests: specialRequests || '',
      preferredContact: preferredContact || 'whatsapp',
      status: 'New'
    });

    res.status(201).json({
      success: true,
      message: 'Booking enquiry submitted successfully. Awaiting operator confirmation.',
      booking
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings (Admin)
// @route   GET /api/bookings
// @access  Private (Admin)
const getBookings = async (req, res, next) => {
  try {
    const { search, status, destination, page = 1, limit = 20 } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { customerName: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { bookingReference: { $regex: search, $options: 'i' } }
      ];
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    if (destination) {
      query.packageOrDestination = { $regex: destination, $options: 'i' };
    }

    const count = await Booking.countDocuments(query);
    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      count,
      page: Number(page),
      pages: Math.ceil(count / limit),
      bookings
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single booking by ID or Reference
// @route   GET /api/bookings/:id
// @access  Private (Admin)
const getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, booking });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking status
// @route   PATCH /api/bookings/:id/status
// @access  Private (Admin)
const updateBookingStatus = async (req, res, next) => {
  try {
    const { status, adminNotes, quotedAmount, paymentStatus } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (status) booking.status = status;
    if (adminNotes !== undefined) booking.adminNotes = adminNotes;
    if (quotedAmount !== undefined) booking.quotedAmount = Number(quotedAmount);
    if (paymentStatus) booking.paymentStatus = paymentStatus;

    await booking.save();

    res.json({ success: true, message: 'Booking status updated', booking });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking details
// @route   PATCH /api/bookings/:id
// @access  Private (Admin)
const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking updated', booking });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private (Admin)
const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  updateBooking,
  deleteBooking
};
