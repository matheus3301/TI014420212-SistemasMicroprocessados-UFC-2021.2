import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/Dashboard'

const Rotas = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Dashboard/>} />
        </Routes>
    );
}

export default Rotas;
