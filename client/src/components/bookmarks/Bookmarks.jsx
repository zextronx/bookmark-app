import React, { Component } from "react";
import { connect } from "react-redux";

import { bookmarkActions } from "../../store/actions";

import BookmarkList from "./BookmarkList";

class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAllBookmarkedRepos = this.getAllBookmarkedRepos.bind(this);
  }

  componentDidMount() {
    this.getAllBookmarkedRepos();
  }

  async getAllBookmarkedRepos() {
    const { getAllBookmarks } = this.props;
    await getAllBookmarks();
  }

  onRemoveBookmark = bookmarkId => {
    const { removeBookmark } = this.props;
    removeBookmark(bookmarkId);
  };

  render() {
    const {
      response: { bookmarkItems, isBookmarkRepoloading }
    } = this.props;

    return (
      <div className="repo-container">
        <BookmarkList
          bookmarkItems={bookmarkItems}
          isBookmarkRepoloading={isBookmarkRepoloading}
          onRemoveBookmark={this.onRemoveBookmark}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ bookmarks }) => {
  return {
    response: bookmarks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBookmarks: () => {
      dispatch(bookmarkActions.getAllBookmarks());
    },
    removeBookmark: bookmarkId => {
      dispatch(bookmarkActions.removeBookmark(bookmarkId));
    }
  };
};

const bookmarks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmarks);

export { bookmarks as Bookmarks };
