const helper = require("./helper");
const { DB_FILE_PATH } = process.env;

const getBookmarkIds = () => {
  const bookmarks = helper.readFile(DB_FILE_PATH);
  return helper.mapBookmarks(bookmarks);
};

const mapRepos = ({ items }, limit = 100) => {
  const repos = items.slice(0, limit).map(repo => mapRepo(repo));

  return {
    total_count: limit,
    items: repos,
    bookmarkIds: getBookmarkIds()
  };
};

const mapRepo = repo => {
  const {
    id,
    name,
    full_name,
    owner,
    html_url,
    description,
    created_at,
    forks_count,
    language,
    stargazers_count,
    watchers_count
  } = repo;

  return {
    id,
    name,
    full_name,
    owner: {
      id: owner.id,
      login: owner.login,
      avatar_url: owner.avatar_url,
      html_url: owner.html_url
    },
    html_url,
    description,
    created_at,
    forks_count,
    language,
    stargazers_count,
    watchers_count
  };
};

module.exports = {
  mapRepos,
  mapRepo
};
