
const { validationResult } = require('express-validator');
const Post = require('../models/posts.model');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: 'author' });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error: error.message });
  }
};

// Create a new post with validation
exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { title, description, authorId } = req.body;
  try {
    const newPost = await Post.create({ title, description, authorId });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
};
