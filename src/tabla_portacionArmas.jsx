import React, { useState } from 'react';

const TablaPortacionArmas = () => {
  const [formData, setFormData] = useState({
    hora: '',
    fecha: '',
    latitud: '',
    longitud: '',
    direccionIncidente: '',
    descripcion: '',
    descripcionAgresores: '',
    heridos: 'no', // valor por defecto
    tipoAmenaza: '', // vacío por ahora
    tipoArma: '',    // vacío por ahora
    descripcionVehiculo: '',
    numComplises: '',
    testigos: 'no',  // valor por defecto
    telDenunciante: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos capturados:', formData);
    // Aquí puedes agregar la lógica para capturar los datos, por ejemplo, enviarlos a una API o almacenarlos
  };

  return (
    <div style={styles.contenedor}>
      <h3 style={styles.titulo}>Formulario de Denuncia - Portación de Armas</h3>
      <form onSubmit={handleSubmit} style={styles.formulario}>
        {/* Hora */}
        <div style={styles.campo}>
          <label style={styles.label}>Hora:</label>
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Fecha */}
        <div style={styles.campo}>
          <label style={styles.label}>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Latitud */}
        <div style={styles.campo}>
          <label style={styles.label}>Latitud:</label>
          <input
            type="number"
            name="latitud"
            value={formData.latitud}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Longitud */}
        <div style={styles.campo}>
          <label style={styles.label}>Longitud:</label>
          <input
            type="number"
            name="longitud"
            value={formData.longitud}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Dirección del incidente */}
        <div style={styles.campo}>
          <label style={styles.label}>Dirección del incidente:</label>
          <textarea
            name="direccionIncidente"
            value={formData.direccionIncidente}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Descripción de los hechos */}
        <div style={styles.campo}>
          <label style={styles.label}>Descripción de los hechos:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Descripción de agresores */}
        <div style={styles.campo}>
          <label style={styles.label}>Descripción de agresores:</label>
          <textarea
            name="descripcionAgresores"
            value={formData.descripcionAgresores}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Heridos */}
        <div style={styles.campo}>
          <label style={styles.label}>¿Heridos?</label>
          <select
            name="heridos"
            value={formData.heridos}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Tipo de amenaza */}
        <div style={styles.campo}>
          <label style={styles.label}>Tipo de amenaza:</label>
          <select
            name="tipoAmenaza"
            value={formData.tipoAmenaza}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Seleccione tipo de amenaza</option>
          </select>
        </div>

        {/* Tipo de arma */}
        <div style={styles.campo}>
          <label style={styles.label}>Tipo de arma:</label>
          <select
            name="tipoArma"
            value={formData.tipoArma}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Seleccione tipo de arma</option>
          </select>
        </div>

        {/* Descripción del vehículo */}
        <div style={styles.campo}>
          <label style={styles.label}>Descripción del vehículo:</label>
          <textarea
            name="descripcionVehiculo"
            value={formData.descripcionVehiculo}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Número de cómplices */}
        <div style={styles.campo}>
          <label style={styles.label}>Número de cómplices:</label>
          <input
            type="number"
            name="numComplises"
            value={formData.numComplises}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* ¿Hay testigos? */}
        <div style={styles.campo}>
          <label style={styles.label}>¿Hay testigos?</label>
          <select
            name="testigos"
            value={formData.testigos}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Teléfono del denunciante */}
        <div style={styles.campo}>
          <label style={styles.label}>Teléfono del denunciante:</label>
          <input
            type="tel"
            name="telDenunciante"
            value={formData.telDenunciante}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Botón para capturar los datos */}
        <div>
          <button type="submit" style={styles.boton}>Capturar datos</button>
        </div>
      </form>
    </div>
  );
};

// Estilos con los colores solicitados
const styles = {
  contenedor: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#E6D8AD',  // Tono beige suave
    maxWidth: '800px',
    margin: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.2)',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#621132', // Tono oscuro para el título
    fontSize: '28px',
    fontWeight: '600',
  },
  formulario: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  campo: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #999',
    transition: 'border 0.3s ease, box-shadow 0.3s ease',
  },
  select: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #999',
    transition: 'border 0.3s ease, box-shadow 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #999',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'border 0.3s ease, box-shadow 0.3s ease',
  },
  boton: {
    padding: '14px 25px',
    backgroundColor: '#621132',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default TablaPortacionArmas;
