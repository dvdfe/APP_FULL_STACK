import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3000/post/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPostsSuccess: (state, action) => {
      state.postsData = action.payload;
    },
    createPost: (state, action) => {
      state.postsData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.postsData = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {});
  },
});

export const { getPostsSuccess, createPost } = postSlice.actions;
export default postSlice.reducer;
