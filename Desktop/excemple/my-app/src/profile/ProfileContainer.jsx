import React from 'react';
import {useSelector} from 'react-redux';
import Profile from './Profile';
import { setPersonData, toggleActive } from '../features/loginSlice';

export default function ProfileContainer(){
    const personData = useSelector((state) =>state.login.personData);
    const isActive = useSelector((state) => state.login.isActive);
    const list = useSelector((state) => state.list.events);
    return <Profile personData = {personData} 
                    isActive = {isActive} 
                    list = {list} 
                    setPersonData = {setPersonData}
                    toggleActive = {toggleActive}/>
}
