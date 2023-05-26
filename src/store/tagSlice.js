import { createSlice } from "@reduxjs/toolkit";

const initialState ={tagId:"",tagScanStatus:false,tagListRequiredDetails:{}}
const tagSlice= createSlice({
    name:"tag",
    initialState,
    reducers:{
        setTagId(state,action){
            state.tagId= action.payload;
        },
        setTagScanStatus(state,action){
            state.tagScanStatus=action.payload
        },
        setTagDetailsRequiredDetails(state,action){
            state.tagListRequiredDetails=action.payload
        }
    }

})

export const tagAction=tagSlice.actions;
export default tagSlice.reducer;