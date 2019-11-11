/*
Define routes and components with respect to it.
*/
import { Search } from "../components/repo";
import { Bookmarks } from "../components/bookmarks";
import PageNotFound from "../layouts/PageNotFound";

export const routes = [
  {
    path: "/",
    component: Search,
    exact: true
  },
  {
    path: "/bookmarks",
    component: Bookmarks
  },
  {
    component: PageNotFound
  }
];
