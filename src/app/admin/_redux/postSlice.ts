import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./postApi";

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: null,
        categories: null
    },
    reducers: {
        isAdminLoading: (state, action) =>
        (state = {
            ...state,
            isLoading: action.payload,
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) =>{
            state.isLoading = true
        }),
        builder.addCase(getCategories.fulfilled, (state, action) =>{
            console.log('action: ', action.payload);
            state.isLoading = false
            state.categories = action.payload
        }),
        builder.addCase(getCategories.rejected, (state) =>{
            state.isLoading = false
        })
    }
})

export const { isAdminLoading } = postSlice.actions;

export default postSlice.reducer;