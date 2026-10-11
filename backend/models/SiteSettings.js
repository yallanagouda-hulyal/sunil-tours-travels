const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  businessName: { type: String, default: 'Sunil Tours N Travels' },
  location: { type: String, default: 'Chikkamagaluru, Karnataka, India' },
  phone: { type: String, default: '+918197007359' },
  whatsapp: { type: String, default: '918197007359' },
  email: { type: String, default: 'info@suniltours.com' },
  heroHeadline: { type: String, default: 'Explore the Hills. Feel the Thrill.' },
  heroSubtitle: { type: String, default: 'Discover Chikkamagaluru with unforgettable sightseeing, jeep adventures, and comfortable group travel.' },
  pricingDisclaimer: { 
    type: String, 
    default: 'Listed sightseeing rates cover vehicle charges only. Waterfall entry fees, entry tickets, jeep trekking, zipline, adventure activities, and other optional activity charges are not included unless explicitly stated. Additional expenses and package inclusions will be confirmed before booking.' 
  },
  socialLinks: {
    instagram: { type: String, default: 'https://instagram.com' },
    facebook: { type: String, default: 'https://facebook.com' },
    youtube: { type: String, default: 'https://youtube.com' },
    linkedin: { type: String, default: 'https://linkedin.com' }
  },
  footerCredit: { type: String, default: 'Designed and Developed by bookmywebsite.in' }
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
