import { createSlice } from "@reduxjs/toolkit";

const localvalues =JSON.parse(localStorage.getItem("userInfo"))
console.log(localvalues)
const initialState ={
  value : localvalues || {id: undefined,
    token: undefined, name :undefined ,type : undefined, isLogin : false
  }
}
const slice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    authReducer: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      localStorage.setItem("userInfo",JSON.stringify(action.payload))
    },
  },
});

export const { authReducer } = slice.actions;
export default slice.reducer;
