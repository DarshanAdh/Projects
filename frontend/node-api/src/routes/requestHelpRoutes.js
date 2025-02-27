const express = require('express');
const router = express.Router();
const requestHelpController = require('../controllers/requestHelpController');

// Route to create a new request for roadside assistance
router.post('/request-help', requestHelpController.createRequest);

module.exports = router;