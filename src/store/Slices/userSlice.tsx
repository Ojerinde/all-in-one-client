import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // Sychronous reducers
  },
});

export const usersActions = userSlice.actions;

export default userSlice.reducer;
