import React from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './item/Item';
import styles from './list.module.scss';
import { useSelector } from 'react-redux';
import { modalActive, toggleFollow} from '../features/listSlice';
export default function List(){
    const list = useSelector((state) => state.list.events);
    const  navigate = useNavigate();
    function onSubmit(){
        navigate("/profile");
    }
    return(<div>
       <h2 className = {styles.title}>Events</h2>
       <div className = {styles.block}>
            {list.map(val => <Item key = {val.id} item = {val} modalActive = {modalActive} toggleFollow = {toggleFollow}/>)}
       </div>
       <button className = {styles.button} onClick={onSubmit}>
            go to profile
       </button>
    </div>)
}