import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "",
    language : ""
}

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        language : (state, action)=>{
            
        },
        theme : (state, action)=>{

        }
    }
})
