import axios from "axios";

import { constants } from "../../constants";

const searchRepos = search => {
  return dispatch => {
    dispatch({ type: constants.SEARCH_REQUEST });

    axios
      .get(`http://localhost:3001/repositories/${search}`)
      .then(res =>
        dispatch({
          type: constants.SEARCH_SUCCESS,
          payload: { repoItems: res.data }
        })
      )
      .catch(err =>
        dispatch({
          type: constants.SEARCH_FAILURE,
          error: err
        })
      );
  };
};

const removeBookmarkId = removeBookmarkId => {
  return dispatch => {
    dispatch({
      type: constants.REMOVE_REPO_ID_SUCCESS,
      payload: { removeBookmarkId }
    });
  };
};

export const repoActions = { searchRepos, removeBookmarkId };
