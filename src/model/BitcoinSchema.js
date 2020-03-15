const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BitcoinSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  private_key: {
    type: String,
    required: false
  },
  wif : {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 1
  }
}, { versionKey: false });

export const Bitcoin = mongoose.model('Bitcoin', BitcoinSchema);