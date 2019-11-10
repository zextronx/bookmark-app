const bookmark = require('express').Router({ mergeParams: true });
const all = require('./all');
const save = require('./save');
const remove = require('./remove');

bookmark.get('/all', all);
bookmark.post('/:id/save', save);
bookmark.delete('/:id/remove', remove);

module.exports = bookmark;