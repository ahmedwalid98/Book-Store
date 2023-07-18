import { configureStore } from "@reduxjs/toolkit";
import book from './bookSlice'
import auth from './authSlice'
import read from './readSLice'
export default configureStore({
    reducer: {
        book,
        auth,
        read
    }
})