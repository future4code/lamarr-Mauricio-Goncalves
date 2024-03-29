import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from "../Pages/HomePage";
import {ListTripsPage} from '../Pages/ListTripsPage'
import {ApplicationFormPage} from '../Pages/ApplicationFormPage'
import { LoginPage } from "../Pages/LoginPage"
import { AdminHomePage } from "../Pages/AdminHomePage";
import { CreateTripPage } from "../Pages/CreateTripPage";
import { TripDetailsPage } from "../Pages/TripDetailsPage";


 export const Rotas=()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripsPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
            </Routes>
        
        
        
        </BrowserRouter>
    )
}