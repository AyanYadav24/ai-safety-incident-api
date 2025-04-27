const Incident = require('../models/Incident');

exports.createIncident = async (req, res, next) => {
  try {
    const { title, description, severity } = req.body;
    const incident = await Incident.create({ title, description, severity });
    res.status(201).json(incident);
  } catch (err) {
    next(err);
  }
};

exports.getAllIncidents = async (req, res, next) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (err) {
    next(err);
  }
};

exports.getIncidentById = async (req, res, next) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) return res.status(404).json({ message: 'Incident not found' });
    res.json(incident);
  } catch (err) {
    next(err);
  }
};

exports.updateIncident = async (req, res, next) => {
  try {
    const incident = await Incident.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!incident) return res.status(404).json({ message: 'Incident not found' });
    res.json(incident);
  } catch (err) {
    next(err);
  }
};

exports.deleteIncident = async (req, res, next) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) return res.status(404).json({ message: 'Incident not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};