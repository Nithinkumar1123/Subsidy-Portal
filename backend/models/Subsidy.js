const mongoose = require('mongoose');

const subsidySchema = new mongoose.Schema({
  username: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  details: { type: String, required: true },
  income: { type: String, required: false },
  educationLevel: { type: String, required: false },
  landSize: { type: String, required: false },
  healthCondition: { type: String, required: false },
  region: { type: String, required: false },
  houseType: { type: String, required: false },
  rentOrLoan: { type: String, required: false },
  dependents: { type: String, required: false },
  vehicleType: { type: String, required: false },
  transportationCost: { type: String, required: false },
  commuteDistance: { type: String, required: false },
  energySource: { type: String, required: false },
  energyBill: { type: String, required: false },
  energyConsumption: { type: String, required: false },
  status: { type: String, required: true },
  applicationNumber: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subsidy', subsidySchema);
