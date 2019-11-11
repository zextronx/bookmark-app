import axios from "axios";

import { constants } from "../../constants";

const getAllBookmarks = () => {
  return dispatch => {
    dispatch({ type: constants.GETALL_REQUEST });

    axios
      .get(`http://localhost:3001/repositories/bookmark/all`)
      .then(res =>
        dispatch({
          type: constants.GETALL_SUCCESS,
          payload: { bookmarkItems: res.data }
        })
      )
      .catch(err =>
        dispatch({
          type: constants.GETALL_FAILURE,
          error: err
        })
      );
  };
};

const createBookmark = bookmarkId => {
  return dispatch => {
    dispatch({ type: constants.CREATE_BOOKMARK_REQUEST });

    axios
      .post(`http://localhost:3001/repositories/bookmark/${bookmarkId}/save`)
      .then(res =>
        dispatch({
          type: constants.CREATE_BOOKMARK_SUCCESS,
          payload: { createBookmark: res.data }
        })
      )
      .catch(err =>
        dispatch({
          type: constants.CREATE_BOOKMARK_FAILURE,
          error: err
        })
      );
  };
};

const removeBookmark = bookmarkId => {
  return dispatch => {
    dispatch({ type: constants.REMOVE_BOOKMARK_REQUEST });
    
    axios
      .delete(
        `http://localhost:3001/repositories/bookmark/${bookmarkId}/remove`
      )
      .then(res =>
        dispatch({
          type: constants.REMOVE_BOOKMARK_SUCCESS,
          payload: { removeItem: res.data, removeBookmarkId: bookmarkId }
        })
      )
      .catch(err =>
        dispatch({
          type: constants.REMOVE_BOOKMARK_FAILURE,
          error: err
        })
      );
  };
};

export const bookmarkActions = {
  getAllBookmarks,
  createBookmark,
  removeBookmark
};
