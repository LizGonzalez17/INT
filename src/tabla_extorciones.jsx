import React, { useState } from 'react';

const TablaExtorciones = () => {
  const [formData, setFormData] = useState({
    hora: '',
    fecha: '',
    latitud: '',
    longitud: '',
    descripcion: '',
    tipoExtorsion: '',  // Campo de tipo extorsión como select vacío
    telExtorsion: '',
    testigos: 'no', // valor por defecto
    telDenunciante: '',
    nomVictima: '',
    edadVictima: '',
    sexoVictima: '',
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
      <h3 style={styles.titulo}>Formulario de Denuncia - Tabla Extorciones</h3>
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

        {/* Descripción */}
        <div style={styles.campo}>
          <label style={styles.label}>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>

        {/* Tipo de extorsión (select vacío) */}
        <div style={styles.campo}>
          <label style={styles.label}>Tipo de extorsión:</label>
          <select
            name="tipoExtorsion"
            value={formData.tipoExtorsion}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Seleccione tipo de extorsión</option>
          </select>
        </div>

        {/* Teléfono del extorsionador */}
        <div style={styles.campo}>
          <label style={styles.label}>Teléfono del extorsionador:</label>
          <input
            type="tel"
            name="telExtorsion"
            value={formData.telExtorsion}
            onChange={handleChange}
            required
            style={styles.input}
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

        {/* Nombre de la víctima */}
        <div style={styles.campo}>
          <label style={styles.label}>Nombre de la víctima:</label>
          <input
            type="text"
            name="nomVictima"
            value={formData.nomVictima}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Edad de la víctima */}
        <div style={styles.campo}>
          <label style={styles.label}>Edad de la víctima:</label>
          <input
            type="number"
            name="edadVictima"
            value={formData.edadVictima}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Sexo de la víctima */}
        <div style={styles.campo}>
          <label style={styles.label}>Sexo de la víctima:</label>
          <select
            name="sexoVictima"
            value={formData.sexoVictima}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>

        {/* Botón para capturar los datos */}
        <div>
          <button type="submit" style={styles.boton}>Capturar datos</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  contenedor: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#E7DCB7FF', // Fondo suave
    maxWidth: '800px',
    margin: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 25px rgba(0, 0, 0, 0.2)',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#621132', 
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

export default TablaExtorciones;