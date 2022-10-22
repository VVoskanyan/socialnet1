import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    personData:{},
    isActive:false
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setPersonData:(state,action) =>{
            state.personData = action.payload
        },
        toggleActive:(state)=>{
            state.isActive = !state.isActive;
        }
    }
});

export const {setPersonData,toggleActive} = loginSlice.actions;

export default loginSlice.reducer;