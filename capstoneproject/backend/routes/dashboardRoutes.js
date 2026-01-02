// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getDashboard } = require('../controllers/dashboardController');

router.get('/me', protect, getDashboard);

module.exports = router;
