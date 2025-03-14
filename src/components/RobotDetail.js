import React from 'react';
import { useParams } from 'react-router-dom';
import { robots } from '../data/robots';



const RobotDetail = () => {
    const { id } = useParams();
    const robot = robots.find((r) => r.id === parseInt(id));

    if (!robot) {
        return <p>Robot no encontrado</p>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Detalles del Robot</h2>
            <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={robot.imagen} className="card-img-top" alt={robot.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{robot.nombre}</h5>
                    <p><strong>Modelo:</strong> {robot.modelo}</p>
                    <p><strong>Empresa Fabricante:</strong> {robot.empresaFabricante}</p>
                    <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
                    <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
                    <p><strong>Humor:</strong> {robot.humor}</p>
                </div>
            </div>
            <footer className="text-center mt-3">
                <p>Contact us: +57 3102109523 - info@robot-lovers.com - @robot-lovers</p>
            </footer>
        </div>
    );
};

export default RobotDetail;
