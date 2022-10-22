import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './modale.module.scss';

export default function Modal({id,modalActive,toggleFollow}){
    const dispatch = useDispatch();
    function cancelModal(id){
        dispatch(modalActive(id));
    }
    function unfollow(id){
        dispatch(modalActive(id));
        dispatch(toggleFollow(id));
    }
    return(<div className = {styles.block}>
        <h3>are you want to unfollow?</h3>
        <button className = {styles.buttonNo} onClick = {()=>cancelModal(id)}>No</button>
        <button className = {styles.buttonYes} onClick = {()=>unfollow(id)}>unfollow</button>
    </div>)
}