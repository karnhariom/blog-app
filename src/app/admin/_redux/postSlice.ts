import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "admin",
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

    }
})

export const { isAdminLoading } = postSlice.actions;

export default postSlice.reducer;