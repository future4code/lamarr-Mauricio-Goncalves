import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useForm} from "../Hooks/useForm"
import * as MyRoute from '../router/codinator'
export const ApplicationFormPage =() => {
    const navigate=useNavigate()
    const [trip, setTrip] =useState("")
    const [form, onChange] =useForm({name: "", age: "", textapp: "", profession: "", country: "" })

    const clearTrip = () => {
        clear()
       
    }
    const clickSend = (e) => {
        e.preventDefault()
        sendApplication(form, trip, clearTrip)
    }
    

    return (
        <div>
            <h1>ApplicationFormPage</h1>
            <form onSubmit={clickSend}>
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
        </div>
    )
}