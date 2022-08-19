import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

export const Routs = (isLogin) => {
	if (isLogin) {
		return (
			<Routes>
				<Route path='/' exact element={<MainPage />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/registration' element={<RegistrationPage />} />
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	);
};

export default Routs;
