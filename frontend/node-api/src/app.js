const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requestHelpRoutes = require('./routes/requestHelpRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Database connection
dbConfig();

// Routes
app.use('/api/request-help', requestHelpRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});