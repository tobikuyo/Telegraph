const Post = require('../models/Post');
const { checkIfPostExists } = require('../controllers/posts');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.all;
        res.status(200).json({ data: posts });
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/:id', checkIfPostExists, async (req, res) => {
    try {
        const post = req.post;
        res.status(200).json({ data: post });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
