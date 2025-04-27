const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ['low', 'medium', 'high'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Incident', IncidentSchema);