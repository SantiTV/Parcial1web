import React from 'react';
import { IntlProvider } from 'react-intl'; // Importa IntlProvider
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import RobotList from './components/RobotList';
import messages from './locales/en.json'; // Ruta del archivo de mensajes

function App() {
    return (
        <IntlProvider locale="en" messages={messages}>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/robots" element={<RobotList />} />

                </Routes>
            </BrowserRouter>
        </IntlProvider>
    );
}

export default App;
