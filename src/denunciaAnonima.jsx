import React, { useState } from 'react';

const denunciaAnonima = () => {
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    ubicacion: '',
    comoOcurrio: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Denuncia enviada:', formData);
    alert('¡Denuncia enviada de forma anónima!');
    // Aquí puedes enviar los datos a tu backend
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: 20 }}>
      <h2>Formulario de Denuncia Anónima</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Fecha del suceso:</label><br />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Hora del suceso:</label><br />
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Ubicación del suceso:</label><br />
          <input
            type="text"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>¿Cómo ocurrió el asalto?</label><br />
          <textarea
            name="comoOcurrio"
            value={formData.comoOcurrio}
            onChange={handleChange}
            rows="4"
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Capturar Denuncia</button>
      </form>
    </div>
  );
};

export default denunciaAnonima;
