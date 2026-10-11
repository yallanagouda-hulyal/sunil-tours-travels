# Sunil Tours N Travels — Chikkamagaluru, Karnataka, India

A complete, production-ready MERN stack travel booking application and admin dashboard designed for **Sunil Tours N Travels, Chikkamagaluru**.

---

## 🌟 Executive Summary & Features

### Public Platform
- **Hero Section**: Full-width HD landscape backdrop of Chikkamagaluru hills with glassmorphic enquiry form.
- **Sightseeing Pricing System**: Fixed vehicle rates (Day 1 ₹3,500, Day 2 ₹4,000, Day 3 ₹3,500, Day 4 ₹3,500) with clean disclaimer separating vehicle charges from local entry/jeep safari fees.
- **Destinations Hub (`/destinations`)**: Category filters (Nature, Waterfalls, Viewpoints, Temples, Adventure, Heritage) and detail pages (`/destinations/:slug`).
- **Tour Packages Hub (`/packages`)**: Day 1, Day 2, Day 3, 3-Day Combo, Student Excursions, Corporate Outings, and Adventure trips with day-wise timeline detail views (`/packages/:slug`).
- **Vehicle Fleet (`/vehicles`)**: Cards for 10-seater Tempo Travellers, 50-seater Luxury Buses, 4x4 Off-Road Jeeps, and Family Cars with facility badges and capacity details.
- **Interactive Booking Flow**: Modal enquiry form with required field validation, unique reference generation (`STT-YYYYMMDD-XXXX`), database recording, and one-click WhatsApp redirection with prefilled details.
- **WhatsApp & Call Integration**: Fixed floating WhatsApp (`wa.me/918197007359`) and Call (`tel:+918197007359`) buttons.
- **Left-Side Travel Assistant Chatbot**: Bottom-left glass panel providing rule-based answers to common travel FAQs.
- **Branded Footer**: Includes business contacts, policy modals, social profile links, and exact mandatory credit: `Designed and Developed by bookmywebsite.in`.

### Admin Dashboard (`/admin/login`)
- **Secure Authentication**: Bcrypt password hashing, JWT authentication middleware, rate limiting.
- **Dashboard Overview (`/admin/dashboard`)**: KPI statistics, enquiry conversion rates, booking status breakdown, top requested destinations.
- **Booking Management (`/admin/bookings`)**: Search, filter, status updater, quoted amount calculator, internal notes, direct WhatsApp launcher, CSV export.
- **Destination Management (`/admin/destinations`)**: Add, edit, publish/hide, delete destinations.
- **Package Management (`/admin/packages`)**: Full package CRUD with pricing, day-wise itineraries, inclusions & exclusions.
- **Vehicle Management (`/admin/vehicles`)**: Fleet CRUD with seating capacities, starting rates, and active toggles.
- **Enquiry Management (`/admin/enquiries`)**: Follow-up status tracking and notes for general contact form messages.
- **Site Settings (`/admin/settings`)**: Configurable phone (+91 8197007359), WhatsApp, hero text, pricing disclaimers, and social links.
- **Reports & Analytics (`/admin/reports`)**: Detailed booking metrics and CSV downloads.

---

## 🛠 Technology Stack

- **Frontend**: React 18, Vite, React Router DOM v6, Axios, Lucide React Icons, CSS Variables & Glassmorphism design system.
- **Backend**: Node.js, Express.js, MongoDB with Mongoose, JWT (jsonwebtoken), bcryptjs, Helmet, CORS, Express Rate Limit.
- **Database**: MongoDB (Local or MongoDB Atlas).

---

## 📁 Directory Structure

```
sunil-tours-travels/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── destinationController.js
│   │   ├── packageController.js
│   │   ├── vehicleController.js
│   │   ├── enquiryController.js
│   │   ├── settingsController.js
│   │   └── reportController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Booking.js
│   │   ├── Destination.js
│   │   ├── Package.js
│   │   ├── Vehicle.js
│   │   ├── Enquiry.js
│   │   └── SiteSettings.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── destinationRoutes.js
│   │   ├── packageRoutes.js
│   │   ├── vehicleRoutes.js
│   │   ├── enquiryRoutes.js
│   │   ├── settingsRoutes.js
│   │   └── reportRoutes.js
│   ├── scripts/
│   │   └── seed.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── BookingManagement.jsx
│   │   │   ├── DashboardOverview.jsx
│   │   │   ├── DestinationManagement.jsx
│   │   │   ├── EnquiryManagement.jsx
│   │   │   ├── PackageManagement.jsx
│   │   │   ├── ReportsAdmin.jsx
│   │   │   ├── SiteSettingsAdmin.jsx
│   │   │   └── VehicleManagement.jsx
│   │   ├── components/
│   │   │   └── common/
│   │   │       ├── BookingModal.jsx
│   │   │       ├── Chatbot.jsx
│   │   │       ├── Footer.jsx
│   │   │       ├── Navbar.jsx
│   │   │       ├── PricingDisclaimer.jsx
│   │   │       └── WhatsAppFloat.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── DestinationDetail.jsx
│   │   │   ├── Destinations.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── PackageDetail.jsx
│   │   │   ├── Packages.jsx
│   │   │   └── Vehicles.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── variables.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## 🚀 Quick Setup Instructions

### 1. Prerequisites
- Node.js (v18+)
- MongoDB running locally at `mongodb://127.0.0.1:27017` or a MongoDB Atlas URI string.

### 2. Backend Setup
```bash
cd backend
npm install
node scripts/seed.js
npm start
```
The backend server runs on `http://localhost:5000`.

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend Vite server runs on `http://localhost:5173`.

---

## 🔐 Default Admin Credentials

- **URL**: `http://localhost:5173/admin/login`
- **Email**: `admin@suniltours.com`
- **Password**: `Admin@123456`

---

## 📞 Business Contact Information

- **Business Name**: Sunil Tours N Travels
- **Location**: Chikkamagaluru, Karnataka, India
- **Phone**: +91 8197007359
- **WhatsApp**: +91 8197007359 (`wa.me/918197007359`)
- **Developer Credit**: `Designed and Developed by bookmywebsite.in`
