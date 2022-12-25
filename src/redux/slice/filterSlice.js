import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "search", //name dùng để tạo actionCreator
  initialState: {
    city: "Ha Noi",
    numberOfDays: 3
  },
  reducers: {
    cityChange: (state, action) => {
      state.city = action.payload;
    }, 
    numOfDaysChange: (state, action) => {
      state.numberOfDays = action.payload;
    },
  },
});

export default filterSlice.reducer; //export reducer ra để dùng trong store
