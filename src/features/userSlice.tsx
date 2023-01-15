import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GHState } from "../types/ReducerTypes";
import axios from "axios";

const initialState: GHState = {
  data: {},
};

export const fetchUser = createAsyncThunk(
  "data/fetchUser",
  async (username: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      return response.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        return state;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        return state;
      });
  },
});

export const selectAllUser = (state: any) => state.user.data;

export const {} = userSlice.actions;
export default userSlice.reducer;
