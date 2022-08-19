import React from "react";
import {useNavigate} from "react-router-dom"
import {useForm} from "../Hooks/useForm"
import * as MyRoute from '../router/codinator'
export const CreateTripPage =() => {
    const navigate=useNavigate()
    const [form, onChange] =useForm({nome: "",planet: "",date: "",description: "",durationInDays: ""})
    useProtectedPage();
    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(form)
    }

    return (
        <div>
            <h1>Criar Viagem</h1>
            <form onSubmit={onClickCreate}>
                <input
                name="nome"
                value={form.password}
                onChange={onChange}
                placeholder="Nome"
                type="nome"
                pattern={"^.{5,}$"}
                title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                required/>
                <select
                name={"planet"}
                onChange={onChange}
                placeholder={"Planeta"}
                required>
                 <option value={'marte'}>Marte</option>
                 <option value={'plutao'}>Plutao</option>
                 <option value={'lua'}>Lua</option>
                </select>
                <input
                placeholder={"Data"}
                type={"date"}
                name={"date"}
                value={form.date}
                onChange={onChange}
                required
                />
                <input
                 placeholder={"Descrição"}
                 name={"description"}
                 value={form.description}
                 onChange={onChange}
                 required
                 pattern={"^.{30,}$"}
                 title={"O nome deve ter no mínimo 30 caracteres"}
             />
                <input
                placeholder={"Duração em dias"}
                type={"number"}
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                required
                min={50}/>
        <button type="submit">Eviar</button>
            </form>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}