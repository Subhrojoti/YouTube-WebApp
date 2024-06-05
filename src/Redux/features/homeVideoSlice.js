import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allVideos: [],
};

const homeVideoSlice = createSlice({
  name: "homeVideo",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.allVideos = action.payload;
    },
  },
});

export const { addVideo } = homeVideoSlice.actions;
export default homeVideoSlice.reducer;
