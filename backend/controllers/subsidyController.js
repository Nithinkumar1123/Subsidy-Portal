const Subsidy = require('../models/Subsidy'); // Ensure you're using the correct model

// Update subsidy request status
const updateSubsidyStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // Expects status to be sent in the request body

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const updatedRequest = await Subsidy.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Returns the updated document
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.status(200).json(updatedRequest); // Return updated request
  } catch (err) {
    console.error('Error updating subsidy status:', err);
    res.status(500).json({ message: 'Failed to update request status' });
  }
};

module.exports = { updateSubsidyStatus };
