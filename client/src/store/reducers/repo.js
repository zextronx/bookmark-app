import { constants } from "../../constants";

export const repo = (state = {}, action) => {
  switch (action.type) {
    case constants.SEARCH_REQUEST:
      return {
        isRepoloading: true
      };
    case constants.SEARCH_SUCCESS:
      return {
        repoItems: action.payload.repoItems,
        isRepoloading: false
      };
    case constants.SEARCH_FAILURE:
      return {
        error: action.error,
        isRepoloading: false
      };
    case constants.REMOVE_REPO_ID_SUCCESS:
      const { removeBookmarkId } = action.payload;
      state.bookmarkIds = state.bookmarkIds.filter(id => {
        return id !== removeBookmarkId;
      });
      return {
        ...state
      };
    default:
      return state;
  }
};
