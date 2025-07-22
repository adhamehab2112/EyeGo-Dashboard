import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : 'userSlice' , 
    initialState : {user:null},
    reducers : 
    {
        login : (state,action)=>{
            state.user = action.payload;
        },
        logout : (state)=>{
            state.user = null;
        }
    }
});

export const userReducer = userSlice.reducer ;
export const {login , logout} = userSlice.actions; 