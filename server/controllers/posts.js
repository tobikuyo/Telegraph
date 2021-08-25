const Post = require('../models/Post');

/**
 * Checks that a post is in the database and adds it to the request.
 */
const checkIfPostExists = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        req.post = post;
        next();
    } catch (error) {
        next(error);
    }
};

/**
 * Checks that a request body has a title and a text property, since they are required
 */
const checkIncomingFields = (req, res, next) => {
    const { title, text } = req.body;

    if (!title || !text) {
        return res.status(400).json({
            message: 'Missing title and/or text fields'
        });
    }

    next();
};

module.exports = { checkIfPostExists, checkIncomingFields };
