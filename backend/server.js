require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));



// Routes
app.use('/login', require('./routes/login'));
app.use('/subsidy', require('./routes/subsidy'));

app.get("/", (req, res) => {
  res.send("<center> <h1>Backend in working well, for Subsidy . </h1> <br> <h2>Now Start working Frontend <h2><center>");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
