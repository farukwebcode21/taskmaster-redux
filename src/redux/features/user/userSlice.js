import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Faruk Ahmad",
  email: "farukahmad@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer; //export reducer
