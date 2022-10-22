import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);
const initialState = {
    events:[
        {
            id:Math.random(),
            name:"BDay",
            date:dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD'),
            dict:"its about day when I born...",
            modalActive:false,
            toggleFollow:true
        },
        {
            id:Math.random(),
            name:"entered university",
            date:dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD'),
            dict:"its about day when I entered university...",
            modalActive:false,
            toggleFollow:true
        },
        {
            id:Math.random(),
            name:"bought a house",
            date:dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD'),
            dict:"its about day when I bought a house...",
            modalActive:false,
            toggleFollow:false
        },
        {
            id:Math.random(),
            name:"geaduated from high school",
            date:dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD'),
            dict:"its about day when I geaduated from high school...",
            modalActive:false,
            toggleFollow:false
        },
        {
            id:Math.random(),
            name:"my first flight",
            date:dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD'),
            dict:"its about my first flight...",
            modalActive:false,
            toggleFollow:false
        }
    ]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        modalActive:(state,action) =>{
            state.events.map(element =>{
                if(element.id === action.payload){
                    element.modalActive = !element.modalActive
                    return element
                }
                return element
            });
        },
        toggleFollow:(state,action) =>{
            state.events.map(element =>{
                if(element.id === action.payload){
                    element.toggleFollow = !element.toggleFollow
                    return element
                }
                return element
            });
        }
    }
});

export const {toggleFollow,modalActive} = userSlice.actions

export default userSlice.reducer