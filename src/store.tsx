import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import RepoReducer from "./features/repoSlice";
import ReadMeReducer from "./features/readSlice";
import thunkMiddleware from "redux-thunk";

export default configureStore({
  reducer: {
    user: UserReducer,
    repo: RepoReducer,
    read: ReadMeReducer,
  },
  middleware: [thunkMiddleware],
});
