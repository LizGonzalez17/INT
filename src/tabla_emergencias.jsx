import React, { useState } from 'react';

const TablaEmergencias = () => {
  const [formData, setFormData] = useState({
    hora: '',
    fecha: '',
    latitud: '',
    longitud: '',
    direccionIncidente: '',
    descripcion: '',
    descripcionVehiculo: '',
    descripcionFisicaPaciente: '',
    testigos: 'no', // valor por defecto
    tipoAtencion: '', // vacío por ahora
    nomPaciente: '',
    edadPaciente: '',
    sexoPaciente: '',
    nomDenunciante: '',
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
      <h3 style={styles.titulo}>Formulario de Denuncia - Emergencias</h3>
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

        {/* Descripción física del paciente */}
        <div style={styles.campo}>
          <label style={styles.label}>Descripción física del paciente:</label>
          <textarea
            name="descripcionFisicaPaciente"
            value={formData.descripcionFisicaPaciente}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Testigos */}
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

        {/* Tipo de atención */}
        <div style={styles.campo}>
          <label style={styles.label}>Tipo de atención:</label>
          <select
            name="tipoAtencion"
            value={formData.tipoAtencion}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Seleccione tipo de atención</option>
          </select>
        </div>

        {/* Nombre del paciente */}
        <div style={styles.campo}>
          <label style={styles.label}>Nombre del paciente:</label>
          <input
            type="text"
            name="nomPaciente"
            value={formData.nomPaciente}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Edad del paciente */}
        <div style={styles.campo}>
          <label style={styles.label}>Edad del paciente:</label>
          <input
            type="number"
            name="edadPaciente"
            value={formData.edadPaciente}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Sexo del paciente */}
        <div style={styles.campo}>
          <label style={styles.label}>Sexo del paciente:</label>
          <select
            name="sexoPaciente"
            value={formData.sexoPaciente}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Nombre del denunciante */}
        <div style={styles.campo}>
          <label style={styles.label}>Nombre del denunciante:</label>
          <input
            type="text"
            name="nomDenunciante"
            value={formData.nomDenunciante}
            onChange={handleChange}
            required
            style={styles.input}
          />
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
    backgroundColor: '#E6D8AD',  // Tono suave
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
  },
  select: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #999',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #999',
    minHeight: '120px',
    resize: 'vertical',
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

export default TablaEmergencias;
