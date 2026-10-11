const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'sunil_tours_chikkamagaluru_super_secret_jwt_key_2026');

      req.admin = await Admin.findById(decoded.id).select('-passwordHash');
      if (!req.admin) {
        return res.status(401).json({ success: false, message: 'Not authorized, admin record not found' });
      }

      return next();
    } catch (error) {
      console.error('JWT Token Verification Failed:', error.message);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed or expired' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

module.exports = { protect };
