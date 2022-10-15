import axios from "axios"
import { BASE_URL } from '../constants/constants'
import { goToLoginPage } from "../router/codinator"

export const sendApplication = (body, tripId, clear) => {
    axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!")
            clear()
        })
        .catch((err) => alert(err.response.message))
}

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
    })
    .catch((err) => alert(err.response.data.message))
}
export const logout = (navigate) => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Decisão registrada com sucesso!")
        getTripDetails()
    })
    .catch((err) => alert(err.response.data.message))
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem adicionada com sucesso!")
        clear()
    })
    .catch((err) => alert(err.response.data.message))
}