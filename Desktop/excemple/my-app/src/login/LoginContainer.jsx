import React from 'react';
import { setPersonData } from '../features/loginSlice';
import Login from './Login';

export default function LoginContainer(){
    return <Login setPersonData = {setPersonData}/>
}