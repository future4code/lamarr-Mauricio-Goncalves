import React from "react";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios"
import {useForm} from "../Hooks/useForm"
import * as MyRoute from '../router/codinator'
import { BASE_URL } from "../constants/constants";
import {ApplicationScreenContainer, ApplicationForm} from './Style'
export const CreateTripPage =() => {
    useProtectedPage();
    const navigate=useNavigate()

    
    
    const [form, onChange, clear] =useForm({name: "",planet: "",date: "",description: "",durationInDays: ""})
        const creatTrip = (e) => {
            e.preventDefault()
            const body = {
                name: form.name,
                planet: form.planet,
                date: form.date,
                description: form.description,
                durationInDays: form.durationInDays }
            console.log(body);
            axios.post(`${BASE_URL}mauricio-goncalves-lamarr/trips`,body,{headers:{auth:localStorage.getItem('token')}})
            .then((response)=>{
                alert("Viagem criada com Sucesso!")
                clear();
                console.log(response.data);
            }).catch((erro)=>{
                alert("Erro ao criar viagem")
                console.log(erro);
            })
        }
    return (
        <ApplicationScreenContainer>
            <h1>Criar Viagem</h1>
            <ApplicationForm onSubmit={creatTrip}>
            <label htmlFor='name'>Nome</label>
                <input
                name="name"
                value={form.name}
                id="name"
                onChange={onChange}
                placeholder="Nome"
                type="text"
                pattern={"^.{5,}$"}
                title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                required/>
                
                <label htmlFor='planet'>Destino</label>
                <select
                name={"planet"}
                onChange={onChange}
                placeholder={"Planeta"}
                required>
                 <option value={'Selecione uma viagem'}>Selecione uma viagem</option>
                 <option value={'marte'}>Marte</option>
                 <option value={'plutao'}>Plutao</option>
                 <option value={'lua'}>Lua</option>
                </select>
                <label htmlFor='date'>Data</label>
                <input
                placeholder={"Data"}
                type={"date"}
                name={"date"}
                value={form.date}
                onChange={onChange}
                required
                />
                <label htmlFor='description'>Descrição</label>
                <input
                 placeholder={"Descrição"}
                 name={"description"}
                 value={form.description}
                 onChange={onChange}
                 required
                 pattern={"^.{30,}$"}
                 title={"O nome deve ter no mínimo 30 caracteres"}
             />
             <label htmlFor='durationInDays'>Duração</label>
                <input
                placeholder={"Duração em dias"}
                type={"number"}
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                required
                min={50}/>
        <button type="submit">Enviar</button>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
            </ApplicationForm>
        </ApplicationScreenContainer>
    )
}