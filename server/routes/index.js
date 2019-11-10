const repositories = require('express').Router();
const search = require('./search');
const bookmark = require('./bookmark');

repositories.use('/bookmark', bookmark);
repositories.get('/:repo', search);

module.exports = repositories;
