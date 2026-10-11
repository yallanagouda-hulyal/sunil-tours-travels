const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // allow images & inline scripts for Vite/React dev
}));

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    } else {
      return callback(null, true);
    }
  },
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Public Customer-Facing Routes
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/packages', require('./routes/packageRoutes'));
app.use('/api/vehicles', require('./routes/vehicleRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'Active', message: 'Sunil Tours N Travels API Server Running' });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: `Route not found - ${req.originalUrl}` });
});

// Centralized Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Sunil Tours N Travels Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
