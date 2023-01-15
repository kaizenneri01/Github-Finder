import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GHState } from "../types/ReducerTypes";
import axios from "axios";

const initialState: GHState = {
  repo: [],
};

export const fetchUserRepo = createAsyncThunk(
  "data/fetchUserRepo",
  async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return [...response.data];
    } catch (err: any) {
      return err.message;
    }
  }
);

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserRepo.pending, (state, action) => {
        return state;
      })
      .addCase(fetchUserRepo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.repo = action.payload;
      })
      .addCase(fetchUserRepo.rejected, (state, action) => {
        return state;
      });
  },
});

export const selectAllRepo = (state: any) => state.repo.repo;

export default repoSlice.reducer;
