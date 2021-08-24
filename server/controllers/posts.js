const Post = require('../models/Post');

/**
 * Checks that a post is in the database and adds it to the request.
 */
const checkIfPostExists = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
        return res.status(404).json({
            message: `There is no post with the id '${id}'`
        });
    }

    req.post = post;
    next();
};

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
