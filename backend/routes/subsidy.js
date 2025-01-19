const express = require('express');
const router = express.Router();
const Subsidy = require('../models/Subsidy'); // Replace with your subsidy model
const { updateSubsidyStatus } = require('../controllers/subsidyController');

// PUT /subsidy/requests/:id
router.put('/requests/:id', updateSubsidyStatus);


// POST /subsidy
router.post('/', async (req, res) => {
  try {
    const {
      username,
      type,
      name,
      email,
      phone,
      details,
      income,
      educationLevel,
      landSize,
      healthCondition,
      region,
      houseType,
      rentOrLoan,
      dependents,
      vehicleType,
      transportationCost,
      commuteDistance,
      energySource,
      energyBill,
      energyConsumption,
    } = req.body;

    // Validate required fields
    if (!username || !type || !name || !email || !phone || !details) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Validate additional fields if necessary
    // if (!income || !educationLevel || !region) {
    //   return res.status(400).json({ message: 'Income, education level, and region are required.' });
    // }

    // Generate application number and set initial status
    const applicationNumber = `SUB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const status = 'In the process';

    // Create subsidy object
    const subsidy = new Subsidy({
      username,
      type,
      name,
      email,
      phone,
      details,
      income,
      educationLevel,
      landSize,
      healthCondition,
      region,
      houseType,
      rentOrLoan,
      dependents,
      vehicleType,
      transportationCost,
      commuteDistance,
      energySource,
      energyBill,
      energyConsumption,
      status,
      applicationNumber,
    });

    // Save to database
    await subsidy.save();

    res.status(201).json({
      message: 'Subsidy application submitted successfully',
      applicationNumber,
    });
  } catch (error) {
    console.error('Error in subsidy submission:', error.message);
    res.status(500).json({ message: 'Failed to submit subsidy application' });
  }
});


// Fetch details of a specific subsidy request
router.get('/requests/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Subsidy.findById(id);

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.status(200).json(request);
  } catch (error) {
    console.error('Error fetching request details:', error);
    res.status(500).json({ message: 'Failed to fetch request details.' });
  }
});

// Fetch all subsidy requests
router.get('/requests', async (req, res) => {
  try {
    const requests = await Subsidy.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching subsidy requests:', error);
    res.status(500).json({ message: 'Failed to fetch subsidy requests.' });
  }
});

// Fetch subsidies with a specific status
router.get('/approved-subsidies', async (req, res) => {
  try {
    const subsidies = await Subsidy.find({ status: "Subsidy is approved and go to next step on bank" });
    res.status(200).json(subsidies);
  } catch (error) {
    console.error('Error fetching approved subsidies:', error);
    res.status(500).json({ message: 'Failed to fetch approved subsidies.' });
  }
});

router.get('/requests', async (req, res) => {
  try {
    const requests = await Subsidy.find();
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching subsidy requests:', error);
    res.status(500).json({ message: 'Failed to fetch subsidy requests.' });
  }
});




// Fetch all subsidies for a user by username
router.get('/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const subsidies = await Subsidy.find({ username });

    if (!subsidies || subsidies.length === 0) {
      return res.status(404).json({ message: 'No subsidies found for this user.' });
    }

    res.status(200).json(subsidies);
  } catch (error) {
    console.error('Error fetching user subsidies:', error);
    res.status(500).json({ message: 'Failed to fetch user subsidies.' });
  }
});

// Fetch subsidy status by application number
router.get('/track/:applicationNumber', async (req, res) => {
  try {
    const { applicationNumber } = req.params;
    const subsidy = await Subsidy.findOne({ applicationNumber });

    if (!subsidy) {
      return res.status(404).json({ message: 'Subsidy not found.' });
    }

    res.status(200).json({
      applicationNumber: subsidy.applicationNumber,
      username: subsidy.username, // Include the username for context
      type: subsidy.type, // Include subsidy type for additional information
      status: subsidy.status,
      submittedAt: subsidy.submittedAt, // Include timestamp (if available)
    });
  } catch (error) {
    console.error('Error tracking subsidy:', error);
    res.status(500).json({ message: 'Failed to track subsidy.' });
  }
});


// Backend Route for Updating Subsidy Status
router.put('/update/:applicationNumber', async (req, res) => {
  try {
    const { applicationNumber } = req.params;
    const { status } = req.body;

    const subsidy = await Subsidy.findOneAndUpdate(
      { applicationNumber },
      { status },
      { new: true } // Return the updated document
    );

    if (!subsidy) {
      return res.status(404).json({ message: 'Subsidy not found.' });
    }

    res.status(200).json(subsidy);
  } catch (error) {
    console.error('Error updating subsidy status:', error);
    res.status(500).json({ message: 'Failed to update subsidy status.' });
  }
});






module.exports = router;
