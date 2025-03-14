import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import RobotDetail from './components/RobotDetail';
import RobotList from './components/RobotList';

function App() {
    return (
        <>
            <h1>Adopta un Robot con Robot Lovers</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/robots" element={<RobotList />} />
                    <Route path="/robots/:id" element={<RobotDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
