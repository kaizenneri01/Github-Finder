import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GHState } from "../types/ReducerTypes";
import axios from "axios";

const initialState: GHState = {
  readMe: "",
};

export const fetchReadMe = createAsyncThunk(
  "data/fetchReadMe",
  async (info: any) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${info.username}/${info.name}/readme`
      );
      const ReadmeResponse = await axios.get(response.data.download_url);
      return ReadmeResponse.data;
    } catch (err: any) {
      return err.message;
    }
  }
);

export const readSlice = createSlice({
  name: "read",
  initialState,
  reducers: {
    getUser(state, action) {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReadMe.pending, (state, action) => {
        return state;
      })
      .addCase(fetchReadMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.readMe = action.payload;
      })
      .addCase(fetchReadMe.rejected, (state, action) => {
        return state;
      });
  },
});

export const selectAllReadMe = (state: any) => state.read.readMe;

export const {} = readSlice.actions;
export default readSlice.reducer;
