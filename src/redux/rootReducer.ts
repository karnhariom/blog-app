
import postSlice from "@/app/admin/_redux/postSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    posts: postSlice
})