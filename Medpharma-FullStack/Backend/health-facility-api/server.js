const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const app = express();

require('dotenv').config();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', consultationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
