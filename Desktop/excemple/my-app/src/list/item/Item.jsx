import React from 'react';
import Modal from './modal/Modal';
import style from './Item.module.scss';
import { useDispatch } from 'react-redux';

export default function Item({item,toggleFollow,modalActive}){
    const dispatch = useDispatch();
    function handlerFollow(id){
        if(!item.toggleFollow){
            dispatch(toggleFollow(id));
        }else dispatch(modalActive(id));
    }
    return(<div className = {style.block}>
        <p>date: {item.date}</p>
        <p>name: {item.name}</p>
        <label>
            <input className={style.show} id = "show" type='checkbox'/>
            <div className={style.text}>description: {item.dict.split(" ").slice(0,4).join(' ')}...</div>
            <div className = {style.content} >
                <p>story: {item.dict}</p>
            </div>
            <p className = {style.label}>
                read more
            </p>
        </label>
        <button className = {style.button} onClick = {()=>handlerFollow(item.id)}>{!item.toggleFollow ? 'follow' : 'unfollow'}</button>
        {(item.modalActive && item.toggleFollow) && <Modal id = {item.id} toggleFollow = {toggleFollow} modalActive = {modalActive} />}
    </div>)
}