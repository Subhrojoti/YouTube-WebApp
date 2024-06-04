import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FullName: "",
  emailId: "",
  profilePhoto: "",
  watchList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.FullName = action.payload.FullName;
      state.emailId = action.payload.emailId;
      state.profilePhoto = action.payload.profilePhoto;
    },
    addWatchList: (state, action) => {
      state.watchList = [...state.watchList, action.payload];
    },
    removeWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addDetails, addWatchList, removeWatchList } = userSlice.actions;
export default userSlice.reducer;
