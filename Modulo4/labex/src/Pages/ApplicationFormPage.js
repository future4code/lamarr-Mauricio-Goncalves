import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useForm} from "../Hooks/useForm"
import { useParams } from 'react-router-dom'
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import * as MyRoute from '../router/codinator'
import axios from "axios";


export const ApplicationFormPage =() => {
    const navigate=useNavigate()
    //const params = useParams()
  const [form, onChange, clear] = useForm({ name: '', age: 0, applicationText: '', profession: '', country: ''})
   
    const onSubmitApplication = (e) => {
        e.preventDefault()
        console.log(form)
       
        axios.post(`${BASE_URL}mauricio-goncalves-lamarr/trips/${form.id}/apply`, form)
            .then(() => {
                alert("Aplicação enviada com sucesso!")
                clear()
            })
            .catch(() => alert("Erro ao enviar a aplicação"))
    }



    return (
        <div>
            <h1>ApplicationFormPage</h1>
            <form onSubmit={onSubmitApplication}>
                <select

                
                >

                </select>
                <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Nome"
                type="nome"
                pattern={"^.{3,}$"}
                title={"O nome deve ter no mínimo 3 caracteres"}
                required
                />
                <input
                name="age"
                value={form.age}
                onChange={onChange}
                placeholder="Idade"
                type="number"
                min={18}
                required/>
                <input
                name="textapp"
                value={form.textapp}
                onChange={onChange}
                placeholder="Texto de Candidatura"
                pattern={"^.{30,}$"}
                title={"O texto deve ter no mínimo 30 caracteres"}
                required
                />
                <input
                name="profession"
                value={form.profession}
                onChange={onChange}
                placeholder="profissao"
                pattern={"^.{10,}$"}
                title={"A profissão deve ter no mínimo 10 caracteres"}
                required/>
                
                <select
                name="country"
                value={form.country}
                onChange={onChange}
                placeholder="Pais"
                type="pais"
                required>
                <option value={'brasil'}>Brasil</option>
                <option value={'argentina'}>Argentina</option>
                 <option value={'eua'}>Estados Unidos</option>
                </select>





        <button type="submit">Enviar</button>
            </form>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
            <button type={"submit"}>Enviar</button>
        </div>
    )
}


