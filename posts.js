const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');

const router = express.Router();

// Create a post
router.post('/', async(req, res) => {
    const { content, image } = req.body;
    const newPost = new Post({
        userId: req.userId,
        content,
        image,
    });

    await newPost.save();
    res.status(201).json(newPost);
});

// Get all posts
router.get('/', async(req, res) => {
    const posts = await Post.find().populate('userId', 'username profilePicture');
    res.json(posts);
});

module.exports = router;