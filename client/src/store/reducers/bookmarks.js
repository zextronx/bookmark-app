import { constants } from "../../constants";

export const bookmarks = (state = { }, action) => {
  switch (action.type) {
    case constants.GETALL_REQUEST:
      return {
        isBookmarkRepoloading: true
      };
    case constants.GETALL_SUCCESS:
      return {
        ...state,
        bookmarkItems: action.payload.bookmarkItems,
        isBookmarkRepoloading: false
      };
    case constants.GETALL_FAILURE:
      return {
        error: action.error,
        isBookmarkRepoloading: false
      };
    case constants.CREATE_BOOKMARK_REQUEST:
      return {
        isCreateBookmarkRepoloading: true
      };
    case constants.CREATE_BOOKMARK_SUCCESS:
      return {
        createBookmark: action.payload.createBookmark,
        isCreateBookmarkRepoloading: false
      };
    case constants.CREATE_BOOKMARK_FAILURE:
      return {
        error: action.error,
        isCreateBookmarkRepoloading: false
      };
    case constants.REMOVE_BOOKMARK_REQUEST:
      return {
        isRemoveBookmarkRepoloading: true
      };
    case constants.REMOVE_BOOKMARK_SUCCESS:
      const { removeBookmarkId } = action.payload;

      console.log("action.payload", action.payload, state);
      // state.bookmarkItems.items = state.bookmarkItems.items.filter(item => {
      //   return item.id !== removeBookmarkId;
      // });
      return {
        ...state,
        bookmarkItems: action.payload.removeItem,
        isRemoveBookmarkRepoloading: false
      };
    case constants.REMOVE_BOOKMARK_FAILURE:
      return {
        error: action.error,
        isRemoveBookmarkRepoloading: false
      };
    default:
      return state;
  }
};
