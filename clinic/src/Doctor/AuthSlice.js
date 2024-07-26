import { createSlice } from "@reduxjs/toolkit";
const localValues = JSON.parse(localStorage.getitem("userInfo"));
console.log(localValues);
const intialState = {
  value: localValues || {
    token: undefined,
    name: undefined,
    type: undefined,
    isLogin: false,
  },
};
const slice = createSlice({
  name: "userDetails",
  intialState,
  reducers: {
    authReducer: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
  },
});
