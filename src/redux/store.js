import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/dataSlice";
import filterSlice from "./slice/filterSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        data: dataSlice
    }
})

export default store;