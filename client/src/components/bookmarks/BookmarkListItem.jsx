import React from "react";

export default props => {
  const { bookmarkItems, onRemoveBookmark } = props;

  if (!bookmarkItems) {
    return null;
  }

  return bookmarkItems.items.map(bookmarkItem => (
    <div className="repo-list-item" key={bookmarkItem.id}>
      <div className="repo-info">
        <div className="detail">
          <h2 className="name">{bookmarkItem.name}</h2>
          <p className="author-name">{bookmarkItem.owner.login}</p>
        </div>
        <div
          className="not-bookmark"
          onClick={onRemoveBookmark.bind(this, bookmarkItem.id)}
        >
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  ));
};
