const mongoose = require('mongoose');

const CompetitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      cash: { type: Number, default: 100000 }, // Initial cash balance
      holdings: [
        {
          symbol: { type: String },
          quantity: { type: Number },
        },
      ],
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Competition', CompetitionSchema);