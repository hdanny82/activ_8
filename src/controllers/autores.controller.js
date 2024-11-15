
const { validationResult } = require('express-validator');
const Author = require('../models/autores.model');

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving authors', error: error.message });
  }
};

// Create a new author with validation
exports.createAuthor = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { name, email, image } = req.body;
  try {
    const newAuthor = await Author.create({ name, email, image });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating author', error: error.message });
  }
};
