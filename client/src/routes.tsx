import path from "path";
import React, { FC } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { MainPage } from "./pages/MainPage/MainPage";

export const UseRoutes = (isLogin: boolean) => {
   if(isLogin) {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
   }

   return (
    <Routes>
        <Route path='/login' element={<AuthPage/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
)
}