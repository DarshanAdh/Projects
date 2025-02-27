Road Assistance Project Setup Guide
This project is a web application that allows users to request road assistance services. It includes both a frontend and a backend, as well as integration with MongoDB to store data.

Prerequisites
Before you start, ensure you have the following installed:

Node.js (version >= 16.x)
MongoDB (either local or MongoDB Atlas for cloud hosting)
Frontend Setup (React + Vite + TypeScript)
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/DarshanAdh/Projects.git
cd Projects
2. Install Frontend Dependencies
Navigate to the frontend directory and install the required packages:

bash
Copy
Edit
cd frontend
npm install
3. Start the Frontend Development Server
To start the frontend, run:

bash
Copy
Edit
npm run dev
This will start the frontend on a local development server, usually at http://localhost:3000.

Backend Setup (Node.js + Express + MongoDB)
1. Install Backend Dependencies
Navigate to the backend directory and install the required packages:

bash
Copy
Edit
cd roadbackend
npm install
2. Set Up MongoDB Connection
If you’re using MongoDB Atlas (cloud version), follow these steps:

Create a MongoDB Atlas account and set up a cluster (if you don't have one already).
Create a database and a collection for your project.
Obtain the MongoDB connection string from the Atlas dashboard.
If you’re using local MongoDB, ensure MongoDB is running on your local machine.

3. Configure MongoDB Connection in the Backend
In the backend directory, locate the file where MongoDB connection is set up (usually in server.js or db.js). Replace the connection string with your actual MongoDB URI:

js
Copy
Edit
const mongoose = require('mongoose');

// For MongoDB Atlas (cloud):
const uri = 'your-atlas-connection-string'; 

// For local MongoDB:
const uri = 'mongodb://localhost:27017/road_assistance';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));
4. Start the Backend Server
Run the following command to start the backend server:

bash
Copy
Edit
npm start
This will start the backend on a local server (usually at http://localhost:5000).

Running the Full Application
Once both the frontend and backend are running, you should be able to:

Open the frontend in your browser (http://localhost:3000).
The backend API will be running on a separate port (e.g., http://localhost:5000).
Features Overview
User Registration & Volunteer Signup: Users and volunteers can sign up on the platform.
Request Assistance: Users can request road assistance (e.g., breakdowns, flat tires).
Volunteer Requests: Volunteers can browse and respond to available requests.
Community Interaction: Users and volunteers can communicate within the platform.
Real-time Updates: Both users and volunteers receive live updates on request statuses.
Admin Panel: Admins can manage requests and monitor activity.
Important Notes
Ensure MongoDB is running (local or via Atlas) before starting the backend.
If any package installations fail, try deleting the node_modules folder and package-lock.json file, then rerun npm install.
