const TradingPair = require('../models/TradingPair');

const getData = async (req, res) => {
  try {
    const data = await TradingPair.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createData = async (req, res) => {
  const newData = new TradingPair(req.body);
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await TradingPair.findByIdAndUpdate(id, req.body, {
      new: true
    });
    res.json(updatedData);
  } catch (error) {
    res.status(404).json({ message: 'Data not found' });
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await TradingPair.findByIdAndDelete(id);
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Data not found' });
  }
};

  
  
module.exports = { getData, createData, updateData, deleteData };
  

