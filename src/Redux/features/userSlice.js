import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profilePhoto: "",
  watchList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.name = action?.payload?.name;
      state.email = action?.payload?.email;
      state.profilePhoto = action?.payload?.profilePhoto;
      state.watchList = action?.payload?.watchList;
    },
    addWatchList: (state, action) => {
      state.watchList = [...state.watchList, action.payload];
    },
    addProfilePhoto: (state, action) => {
      state.profilePhoto = action.payload;
    },
    removeWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.videoId !== action.payload.videoId
      );
    },
    removeDetails: (state) => {
      state.name = "";
      state.email = "";
      state.profilePhoto = "";
      state.watchList = [];
    },
  },
});

export const {
  addDetails,
  addWatchList,
  removeWatchList,
  removeDetails,
  addProfilePhoto,
} = userSlice.actions;
export default userSlice.reducer;
