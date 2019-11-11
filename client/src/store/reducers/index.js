import { combineReducers } from "redux";

import { bookmarks } from "./bookmarks";
import { repo } from "./repo";

const rootReducer = combineReducers({
  bookmarks,
  repo
});

export default rootReducer;
