import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    "admin/get-category",
    async (data: any, { rejectWithValue, fulfillWithValue }: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/admin/get-category",
                headers: {
                    'Content-Type': 'application/json'
                }
                body: data
            })
            console.log("response", response)
        } catch (error) {
            console.log("error", error)
            return rejectWithValue();
        }
    }
) 