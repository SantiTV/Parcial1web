import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            navigate('/robots');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
            <h2 className="text-center mb-4">Inicio de sesión</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin} className="w-50 p-4 border rounded bg-light">
                <div className="form-group mb-3">
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" type="submit">Ingresar</button>
                    <button className="btn btn-danger" type="button">Cancelar</button>
                </div>
            </form>
            <footer className="text-center mt-3">
                <p>Contact us: +57 3102109523 - info@robot-lovers.com - @robot-lovers</p>
            </footer>
        </div>
    );
};

export default AuthForm;
