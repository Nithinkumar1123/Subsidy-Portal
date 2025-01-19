const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'mediator', 'government'], 
    required: true 
  },
  dob: { type: Date, required: true },  // Date of Birth
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },  // Gender
  email: { type: String, required: true, unique: true },  // Email
});

module.exports = mongoose.model('User', UserSchema);
