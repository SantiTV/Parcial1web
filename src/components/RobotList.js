import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import robotImage from '../assets/robots.png';

const messages = {
    en: {
        title: 'Adopt a Robot with Robot Lovers!',
        loading: 'Loading...',
        error: 'Error: {message}',
        selectRobot: 'Select a robot to see the details',
        contact: 'Contact us: +57 3102109523 - info@robot-lovers.com - @robot-lovers',
        id: 'ID',
        name: 'Name',
        model: 'Model',
        manufacturer: 'Manufacturer',
        fabricationYear: 'Fabrication Year',
        processingCapacity: 'Processing Capacity',
        mood: 'Mood',
    },
    es: {
        title: '¡Adopta un Robot con Robot Lovers!',
        loading: 'Cargando...',
        error: 'Error: {message}',
        selectRobot: 'Selecciona un robot para ver los detalles',
        contact: 'Contáctanos: +57 3102109523 - info@robot-lovers.com - @robot-lovers',
        id: 'ID',
        name: 'Nombre',
        model: 'Modelo',
        manufacturer: 'Empresa Fabricante',
        fabricationYear: 'Año de Fabricación',
        processingCapacity: 'Capacidad de Procesamiento',
        mood: 'Humor',
    },
};

const RobotList = ({ locale = 'es' }) => {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRobots = async (robotId = null) => {
        try {
            setLoading(true);
            const url = robotId
                ? `http://localhost:3001/robots/${robotId}`
                : `http://localhost:3001/robots`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            if (robotId) {
                setSelectedRobot(data);
            } else {
                setRobots(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRobots();
    }, []);

    const handleSelectRobot = (robotId) => {
        fetchRobots(robotId);
    };

    if (loading) return <p className="text-center"><FormattedMessage id="loading" /></p>;
    if (error) return <p className="text-center text-danger"><FormattedMessage id="error" values={{ message: error }} /></p>;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4"><FormattedMessage id="title" /></h2>
            <div className="text-center mb-4">
                <img src={robotImage} alt="Robots" style={{ width: '100%', maxWidth: '600px' }} className="rounded shadow" />
            </div>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-striped table-hover table-bordered shadow">
                        <thead className="table-dark">
                            <tr>
                                <th><FormattedMessage id="id" /></th>
                                <th><FormattedMessage id="name" /></th>
                                <th><FormattedMessage id="model" /></th>
                                <th><FormattedMessage id="manufacturer" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map((robot) => (
                                <tr key={robot.id} onClick={() => handleSelectRobot(robot.id)} style={{ cursor: 'pointer' }}>
                                    <td>{robot.id}</td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresaFabricante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4">
                    {selectedRobot ? (
                        <div className="card shadow rounded">
                            <div className="card-header bg-primary text-white text-center">
                                <h4>{selectedRobot.nombre}</h4>
                            </div>
                            <div className="card-body text-center">
                                <img src={selectedRobot.imagen} alt={selectedRobot.nombre} className="rounded-circle mb-3" style={{ width: '80%', maxWidth: '200px' }} />
                                <p><strong><FormattedMessage id="fabricationYear" />:</strong> {selectedRobot.añoFabricacion}</p>
                                <p><strong><FormattedMessage id="processingCapacity" />:</strong> {selectedRobot.capacidadProcesamiento}</p>
                                <p><strong><FormattedMessage id="mood" />:</strong> {selectedRobot.humor}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="card shadow rounded text-center p-3">
                            <p><FormattedMessage id="selectRobot" /></p>
                        </div>
                    )}
                </div>
            </div>
            <footer className="text-center mt-3">
                <p><FormattedMessage id="contact" /></p>
            </footer>
        </div>
    );
};

const App = () => {
    const [locale, setLocale] = useState('es');

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <RobotList locale={locale} />
            <div className="text-center mt-4">
                <button onClick={() => setLocale('es')} className="btn btn-primary m-2">Español</button>
                <button onClick={() => setLocale('en')} className="btn btn-secondary m-2">English</button>
            </div>
        </IntlProvider>
    );
};

export default App;
