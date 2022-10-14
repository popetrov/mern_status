import "./AuthPage.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "../../components/Login/Login"
import { Register } from "../../components/Register/Register"

export const AuthPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}