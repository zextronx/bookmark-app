const helper = require('../../../utils/helper');
const { DB_FILE_PATH } = process.env;

module.exports = (req, res) => {
    let bookmarks = helper.readFile(DB_FILE_PATH);

    res.status(200).json({
        total_count: bookmarks.length,
        items: bookmarks,
        bookmarkIds: helper.mapBookmarks(bookmarks)
    })
};
