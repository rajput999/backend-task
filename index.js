// Abhishek
const express = require('express');
const connectDB = require('./db');
const dataRouter = require('./routes/dataRouter');
const priceVolumeRouter = require('./routes/priceVolumeRouter');
const errorHandler = require('./controllers/errorHandler');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/data', dataRouter);
app.use('/price-volume', priceVolumeRouter);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
