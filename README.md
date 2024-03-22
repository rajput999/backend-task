# Backend Task

## Description

This project implements a RESTful API for managing trading pair data, including CRUD operations and endpoints for fetching price and volume data. It uses MongoDB Atlas as the database and Node.js with Express.js for server-side development.

## Setup Instructions

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file in the root directory and add your MongoDB Atlas connection URI as `MONGODB_URI`.
4. Start the server with `node index.js`.

## API Endpoints

### Trading Pair Data
- `GET /data`: Fetch all trading pair data.
- `POST /data`: Create a new trading pair entry.
- `PUT /data/:id`: Update an existing trading pair entry.
- `DELETE /data/:id`: Delete a trading pair entry by ID.

### Price and Volume Data
- `GET /price-volume/price`: Fetch all prices.
- `GET /price-volume/volume`: Fetch all volumes.

## File Structure

- `db.js`: Database connectivity setup.
- `index.js`: Main entry point for the server.
- `models/TradingPair.js`: Mongoose model for trading pair data.
- `routes/dataRouter.js`: Express routes for CRUD operations on trading pair data.
- `routes/priceVolumeRouter.js`: Express routes for fetching price and volume data.
- `controllers/dataController.js`: Controller functions for handling CRUD operations on trading pair data.
- `controllers/priceVolumeController.js`: Controller functions for fetching price and volume data.
- `controllers/errorHandler.js`: Middleware for error handling.
- `.env`: Configuration file for environment variables.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
