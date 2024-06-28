require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(express.json());

// Your routes here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
