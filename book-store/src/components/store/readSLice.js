import { createSlice } from "@reduxjs/toolkit";

const readSlice = createSlice({
    name:'read',
    initialState: {},
    reducers: {
        readBook: (state,action) => {
            return action.payload
        }
    }
})
export const {readBook} = readSlice.actions
export default readSlice.reducer