import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos los componentes necesarios
import Login from './login.jsx';
import Principal from './principal.jsx';
import Buscar from './buscar.jsx';
import RegistrarDenuncia from './registrar_denuncia.jsx';
import ConsultaFolio from './consulta_folio.jsx';
import ConsultaIncidente from './consulta_incidente.jsx'; // ✅ NUEVO
import Dashboard from './dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/registrar_denuncia" element={<RegistrarDenuncia />} />
        <Route path="/consulta_folio" element={<ConsultaFolio />} />
        <Route path="/consulta_incidente" element={<ConsultaIncidente />} /> {/* ✅ NUEVA RUTA */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
