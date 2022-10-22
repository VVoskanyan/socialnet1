import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.scss";
import {useDispatch} from 'react-redux';


export default function Login({setPersonData}){
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const  navigate = useNavigate();
    function onSubmit(d){
        dispatch(setPersonData(d));
        navigate("/profile");
    }

    return (<>
    <div className = {styles.block}>
        <h2 className = {styles.title}> Login </h2>
        <form className = {styles.form} onSubmit = {handleSubmit(onSubmit)}>
            <label>
                First Name:
                <input {...register("firstName")}/>
            </label>
            <label>
                Last Name:
                <input {...register("lastName")}/>
            </label>
            <label>
                Date of Birth:
                <input defaultValue = "dd/mm/yyyy"  {...register("dateOfBirth")}/>
            </label>
            <label>
                Current City:
                <input {...register("currentCity")}/>
            </label>
            <button className = {styles.button}>
                    sign up
            </button>    
        </form>

        </div>      
    </>)
}