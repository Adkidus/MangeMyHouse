const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    apiUrl: {
        type: String,
        required: true,
    },
    meesageSwitchOn: String,
    meesageSwitchOff: String,
    phones: [String],
    mails: [String],
    type: Number
}, {
    timestamps: true
});

module.exports = Device = mongoose.model('Device', DeviceSchema);