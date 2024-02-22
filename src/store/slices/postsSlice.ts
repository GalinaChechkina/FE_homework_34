import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/Post";

const initialState: {list: Post[], status: string} = {
    list:[],
    status: "ready"
};

export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(loadPosts.fulfilled, (state, {payload})=> {
            state.list.push(...payload.posts)
   //console.log(payload);- проверка
        })
        
    },
});

export const loadPosts = createAsyncThunk(
    "posts/loadPosts",
    async ()=> {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        return data;
    }
)
export default postsSlice.reducer;