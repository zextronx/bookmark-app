const helper = require("../../../utils/helper");
const { DB_FILE_PATH } = process.env;

module.exports = (req, res) => {
  let bookmarks = helper.readFile(DB_FILE_PATH);
  const { id } = req.params;

  bookmarks = bookmarks.filter(b => b.id != id);

  helper
    .writeFile(DB_FILE_PATH, bookmarks)
    .then(bookmarks => {
      res.status(200).json({
        total_count: bookmarks.length,
        items: bookmarks,
        bookmarkIds: helper.mapBookmarks(bookmarks)
      });
    })
    .catch(err => {
      res.status(400).json({
        error: "Something went wrong"
      });
    });
};
