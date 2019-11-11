import React from "react";
import Loader from "react-loader-spinner";

import RepoListItem from "./RepoListItem";

export default props => {
  const { isRepoloading, repoItems, onBookmark } = props;

  if (isRepoloading) {
    return (
      <div className="repo-list-container">
        <Loader type="Bars" color="#00BFFF" height={40} width={40} />
      </div>
    );
  }

  return (
    <div className="repo-list-container">
      <RepoListItem repoItems={repoItems} onBookmark={onBookmark}/>
    </div>
  );
};
