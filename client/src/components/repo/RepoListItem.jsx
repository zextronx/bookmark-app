import React from "react";

export default props => {
  const { repoItems, onBookmark } = props;

  if (!repoItems) {
    return null;
  }

  return repoItems.items.map(repoItem => (
    <div className="repo-list-item" key={repoItem.id}>
      <div className="repo-info">
        <div className="detail">
          <h2 className="name">{repoItem.name}</h2>
          <p className="author-name">{repoItem.owner.login}</p>
        </div>
        <div className="bookmark" onClick={onBookmark.bind(this, repoItem.id)}>
          <i
            className="fa fa-star"
          />
        </div>
      </div>
    </div>
  ));
};
