import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './profile.module.scss';
import { useDispatch} from 'react-redux';
import { useForm } from "react-hook-form";

export default function Profile({personData,isActive,list,toggleActive,setPersonData}){
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm({
        defaultValues:{
            lastName:personData.lastName,
            firstName:personData.firstName,
            dateOfBirth:personData.dateOfBirth,
            currentCity:personData.currentCity
        }
    });
    const  navigate = useNavigate();
    function onSubmit(d){
        dispatch(setPersonData(d));
        dispatch(toggleActive());
    }
    function showEvents(){
        navigate('/list');
    }
    return(<div>
        <div className = {styles.block}>
        <img className = {styles.pic} src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"></img>
        <div>
            <h2 className = {styles.title}>
                Personal info
            </h2>
            <form className = {styles.form} onSubmit = {handleSubmit(onSubmit)}>
                <div className = {styles.input}>
                    {!isActive ? (<p>lastname:
                        {personData.lastName} 
                    </p>) : <input  {...register("lastName")} />}
                    {!isActive ? (<p>firstname:
                        {personData.firstName}
                    </p>) : <input  {...register("firstName")}/>}
                    {!isActive ? (<p>birthday:
                        {personData.dateOfBirth}
                    </p>) : <input  defaultValue = {personData.dateOfBirth}  {...register("dateOfBirth")}/>}
                    {!isActive ? (<p>city:
                        {personData.currentCity}
                    </p>) : <input defaultValue = {personData.currentCity} {...register("currentCity")}/>}
                </div>    
                <button className = {styles.edite}>{!isActive ? 'edit profile' : 'save changes'}</button>
            </form>
            <div className = {styles.link}>
            <h3 className = {styles.event}>Events</h3>
                {list.map(val => {
                    if(val.toggleFollow){
                        return <NavLink key = {val.id} to = "/list">{val.name}</NavLink>
                    }
                })}
                <button className = {styles.more} onClick = {showEvents}>more events...</button>
            </div>
        </div>
    </div>
    <NavLink  className = {styles.logout} to ="/login">
            <button>logout</button>
    </NavLink>
    </div>)
}