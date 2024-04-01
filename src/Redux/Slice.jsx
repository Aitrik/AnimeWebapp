import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";

const initialState = {

    recommendedAnime: [],
    topAnime:[],
    topCharcters:[],
    animeDet:[],
    searchAnime:[]
    
}


export const recommend = createAsyncThunk(
    "/recom",
    async () => {
        let res =await axiosInstance.get(`/v4/recommendations/anime`)
        return res?.data
    }
)

export const top = createAsyncThunk(
    "/top",
    async () => {
        let res =await axiosInstance.get(`/v4/top/anime`)
        return res?.data
    }
)

export const characters = createAsyncThunk(
    "/character",
    async () => {
        let res =await axiosInstance.get(`/v4/top/characters`)
        return res?.data
    }
)

export const details = createAsyncThunk(
    "/details",
    async (id) => {
        let res =await axiosInstance.get(`/v4/anime/${id}/full`)
        return res?.data
    }
)

export const search = createAsyncThunk(
    "/search",
    async (id) => {
        let res =await axiosInstance.get(`/v4/anime?q=${id}`)
        return res?.data
    }
)

export const Slice = createSlice({
    name: "anime",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(recommend.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(recommend.fulfilled, (state, {payload}) => {
                state.status = "idle"
                state.recommendedAnime=payload.data
            })
            .addCase(recommend.rejected, (state, action) => {
                state.status = "idle"
            })
            .addCase(top.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(top.fulfilled, (state, {payload}) => {
                state.status = "idle"
                state.topAnime=payload.data
            })
            .addCase(top.rejected, (state, action) => {
                state.status = "idle"
            })

            .addCase(characters.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(characters.fulfilled, (state, {payload}) => {
                state.status = "idle"
                state.topCharcters=payload.data
            })
            .addCase(characters.rejected, (state, action) => {
                state.status = "idle"
            })

            .addCase(details.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(details.fulfilled, (state, {payload}) => {
                state.status = "idle"
                state.animeDet=payload.data
            })
            .addCase(details.rejected, (state, action) => {
                state.status = "idle"
            })
            .addCase(search.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(search.fulfilled, (state, {payload}) => {
                state.status = "idle"
                state.searchAnime=payload.data
            })
            .addCase(search.rejected, (state, action) => {
                state.status = "idle"
            })
    }
})