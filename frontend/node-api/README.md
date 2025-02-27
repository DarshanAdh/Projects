# Node.js API for Roadside Assistance

This project is a Node.js API designed to handle requests for roadside assistance. It allows users to submit their details and issues, which are then stored in a MongoDB database.

## Project Structure

```
node-api
├── src
│   ├── controllers
│   │   └── requestHelpController.js
│   ├── models
│   │   └── requestHelpModel.js
│   ├── routes
│   │   └── requestHelpRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd node-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   DATABASE_URL=<your-mongodb-connection-string>
   ```

4. **Run the application:**
   ```
   npm start
   ```

## API Usage

### Create a Request

- **Endpoint:** `POST /api/request-help`
- **Request Body:**
  ```json
  {
    "location": {
      "latitude": 12.345678,
      "longitude": 98.765432,
      "address": "123 Main St, City, Country"
    },
    "carDetails": {
      "model": "Toyota Camry",
      "color": "Blue",
      "year": "2020"
    },
    "name": "John Doe",
    "phone": "123-456-7890",
    "issue": "Flat Tire"
  }
  ```

- **Response:**
  - **Success:** Returns the created request details.
  - **Error:** Returns an error message.

## Technologies Used

- Node.js
- Express
- Mongoose
- dotenv

## License

This project is licensed under the MIT License.