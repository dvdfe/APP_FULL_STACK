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
    editPost: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            message: action.payload[0],
          };
        } else {
          return post;
        }
      });
    },
    deletePost: (state, action) => {
      state.postsData = state.postsData.filter(
        (post) => post._id !== action.payload
      );
    },
    like: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: [...post.likers, action.payload[0]],
          };
        } else {
          return post;
        }
      });
    }, 
    dislike: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: post.likers.filter((userId) => userId !== action.payload[0]),
          };
        } else {
          return post;
        }
      });
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

export const {
  getPostsSuccess,
  createPost,
  editPost,
  deletePost,
  like,
  dislike
} = postSlice.actions;
export default postSlice.reducer;
