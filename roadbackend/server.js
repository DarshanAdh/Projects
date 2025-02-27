import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/roadside_assistance', {
  useNewUrlParser: true,
});

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true }, // Unique phone number
  licenseNumber: { type: String, required: true, unique: true }, // Unique license number
  role: { type: String, default: 'provider' },
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

const helpRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true },
  },
  carDetails: {
    model: { type: String, required: true },
    color: { type: String, required: true },
    year: { type: String, required: true },
  },
  issue: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

// Routes
app.post('/api/users/register', async (req, res) => {
  const { name, phone, licenseNumber } = req.body;

  const newVolunteer = new Volunteer({
    name,
    phone,
    licenseNumber,
  });

  try {
    await newVolunteer.save();
    res.status(201).send({ message: 'Volunteer registration successful' });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).send({ message: 'Phone number or license number already exists' });
    } else {
      res.status(500).send({ message: 'Registration failed', error });
    }
  }
});

app.post('/api/help/request', async (req, res) => {
  const { name, phone, location, carDetails, issue } = req.body;

  const newHelpRequest = new HelpRequest({
    name,
    phone,
    location,
    carDetails,
    issue,
  });

  try {
    await newHelpRequest.save();
    res.status(201).send({ message: 'Help request submitted successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Help request submission failed', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});