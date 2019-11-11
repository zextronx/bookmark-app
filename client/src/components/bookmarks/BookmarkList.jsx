import React from "react";
import Loader from "react-loader-spinner";

import BookmarkListItem from "./BookmarkListItem";

export default props => {
  const { isBookmarkRepoloading, bookmarkItems, onRemoveBookmark } = props;

  if (isBookmarkRepoloading) {
    return (
      <div className="repo-list-container">
        <Loader type="Bars" color="#00BFFF" height={40} width={40} />
      </div>
    );
  }

  return (
    <div className="repo-list-container">
      <BookmarkListItem
        bookmarkItems={bookmarkItems}
        onRemoveBookmark={onRemoveBookmark}
      />
    </div>
  );
};
