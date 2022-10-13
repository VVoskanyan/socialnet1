import React from 'react';
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
export default function Login(){
    const {register, handleSubmit} = useForm();
    function onSubmit(d){
        console.log(JSON.stringify(d));
    }
    return (<div className = {styles.block}>
        <h2> Login </h2>
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
            <button className = {styles.button}>submit</button>
        </form>
    </div>
        
    )
}