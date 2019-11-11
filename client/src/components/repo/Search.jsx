import React, { Component } from "react";
import { connect } from "react-redux";

import { repoActions } from "../../store/actions";
import { bookmarkActions } from "../../store/actions";

import SearchInput from "./SearchInput";
import RepoList from "./RepoList";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAllSearchedRepos = this.getAllSearchedRepos.bind(this);
  }

  onSearchRepo = search => {
    this.getAllSearchedRepos(search);
  };

  async getAllSearchedRepos(search) {
    const { searchRepos } = this.props;
    await searchRepos(search);
  }

  onBookmark = bookmarkId => {
    const { createBookmark } = this.props;
    createBookmark(bookmarkId);
  };

  render() {
    const {
      response: { repoItems, isRepoloading }
    } = this.props;

    return (
      <div className="repo-container">
        <SearchInput onSearchRepo={this.onSearchRepo} />
        <RepoList
          repoItems={repoItems}
          isRepoloading={isRepoloading}
          onBookmark={this.onBookmark}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ repo }) => {
  return {
    response: repo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRepos: search => {
      dispatch(repoActions.searchRepos(search));
    },
    createBookmark: bookmarkId => {
      dispatch(bookmarkActions.createBookmark(bookmarkId));
    }
  };
};

const search = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export { search as Search };
