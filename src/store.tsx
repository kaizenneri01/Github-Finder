import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import RepoReducer from "./features/repoSlice";
import ReadMeReducer from "./features/readSlice";
import thunkMiddleware from "redux-thunk";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    user: UserReducer,
    repo: RepoReducer,
    read: ReadMeReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
