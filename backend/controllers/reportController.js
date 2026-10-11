const Booking = require('../models/Booking');
const Enquiry = require('../models/Enquiry');
const Destination = require('../models/Destination');
const Package = require('../models/Package');

// @desc    Get dashboard analytics & summary (Admin)
// @route   GET /api/reports/summary
// @access  Private (Admin)
const getReportSummary = async (req, res, next) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const newBookings = await Booking.countDocuments({ status: 'New' });
    const pendingConfirmations = await Booking.countDocuments({ status: 'Contacted' });
    const confirmedBookings = await Booking.countDocuments({ status: 'Confirmed' });
    const completedBookings = await Booking.countDocuments({ status: 'Completed' });
    const cancelledBookings = await Booking.countDocuments({ status: 'Cancelled' });
    
    const totalEnquiries = await Enquiry.countDocuments();
    const totalDestinations = await Destination.countDocuments();
    const totalPackages = await Package.countDocuments();

    // Status Breakdown
    const statusDistribution = [
      { status: 'New', count: newBookings },
      { status: 'Contacted', count: pendingConfirmations },
      { status: 'Confirmed', count: confirmedBookings },
      { status: 'Completed', count: completedBookings },
      { status: 'Cancelled', count: cancelledBookings }
    ];

    // Popular Destinations / Packages booked
    const popularBookings = await Booking.aggregate([
      { $group: { _id: "$packageOrDestination", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Monthly trends calculation (Last 6 months)
    const monthlyTrends = await Booking.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          count: { $sum: 1 },
          totalQuoted: { $sum: "$quotedAmount" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
      { $limit: 6 }
    ]);

    // Recent 5 bookings
    const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(5);

    // Calculate conversion rate: Confirmed + Completed / Total
    const conversionRate = totalBookings > 0 
      ? (((confirmedBookings + completedBookings) / totalBookings) * 100).toFixed(1) 
      : 0;

    res.json({
      success: true,
      summary: {
        totalBookings,
        newBookings,
        pendingConfirmations,
        confirmedBookings,
        completedBookings,
        cancelledBookings,
        totalEnquiries,
        totalDestinations,
        totalPackages,
        conversionRate: `${conversionRate}%`,
        statusDistribution,
        popularBookings,
        monthlyTrends,
        recentBookings
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReportSummary
};
