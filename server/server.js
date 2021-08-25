const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const server = express();
server.use(cors());
server.use(express.json());
server.use('/api/posts', postRoutes);

module.exports = server;
