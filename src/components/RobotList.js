import React from 'react';
import robotImage from '../assets/robots.png';
import { robots } from '../data/robots';

const RobotList = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Adopta un Robot con Robot Lovers!</h2>
            <div className="text-center">
                <img src={robotImage} alt="Robots" style={{ width: '100%', maxWidth: '600px' }} />
            </div>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Modelo</th>
                        <th>Empresa Fabricante</th>
                        <th>Año de Fabricación</th>
                        <th>Capacidad de Procesamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => (
                        <tr key={robot.id}>
                            <td>{robot.id}</td>
                            <td>
                                <a href={`/robots/${robot.id}`}>{robot.nombre}</a>
                            </td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                            <td>{robot.añoFabricacion}</td>
                            <td>{robot.capacidadProcesamiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <footer className="text-center mt-3">
                <p>Contact us: +57 3102109523 - info@robot-lovers.com - @robot-lovers</p>
            </footer>
        </div>
    );
};

export default RobotList;
