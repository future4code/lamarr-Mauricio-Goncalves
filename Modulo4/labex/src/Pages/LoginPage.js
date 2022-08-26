import React from "react";
import {useNavigate} from "react-router-dom"
import {useForm} from "../Hooks/useForm"
import * as MyRoute from '../router/codinator'
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export const LoginPage =() => {
    const navigate=useNavigate()

   const [form, onChange, clear] =useForm({email: "", password: ""})


    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}mauricio-goncalves-lamarr/login`,form)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error)=> console.log(error.message));
        clear();
      }

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={fazerLogin }>
                <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="E-mail"
                type="email"/>
                <input
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="Password"
                type="password"/>
            <button type="submit" >Entrar</button>
            </form>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}