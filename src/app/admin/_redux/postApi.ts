import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    "admin/get-category",
    async (data, { rejectWithValue, fulfillWithValue }: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "/api/admin/get-category",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log('response: ', response);
            if (response.data.status === 200) {
                return fulfillWithValue(response?.data?.categories)
            } else {
                return rejectWithValue();
            }
        } catch (error) {
            console.log("error", error)
            return rejectWithValue();
        }
    }
)

export const addCategory = createAsyncThunk(
    "admin/add-category",
    async (data: any, { dispatch }) => {
        try {
            const response = await axios({
                method: "POST",
                url: "/api/admin/add-category",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data
            })
            console.log("response", response)
            if (response.data.status === 200) {
                dispatch(getCategories())
                return response?.data?.msg
            } else {
                return response?.data?.msg;
            }
        } catch (error) {
            console.log("error", error)
            return error;
        }
    }
)

export const deleteCategory = createAsyncThunk(
    "admin/delete-category",
    async (data: any, { dispatch }) => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `/api/admin/delete-category`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log('response: ', response);
            if (response.data.status === 200) {
                dispatch(getCategories())
                return response?.data?.status;
            } else {
                return 
            }
        } catch (err) {
            console.log('err: ', err);
        }
    }
)