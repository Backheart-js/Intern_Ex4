import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: {},
    forecast: {},
    location: {}
  }

export const dataSlice = createSlice({
  name: "data", //name dùng để tạo actionCreator
  initialState,
  reducers: {
    dataChange: (state, action) => {
        const newData = action.payload;
        
        return state = newData;
    },
  },
});

export default dataSlice.reducer; //export reducer ra để dùng trong store
