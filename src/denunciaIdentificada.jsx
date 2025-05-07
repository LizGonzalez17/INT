import React from 'react';

const DenunciaIdentificada = () => {
  const styles = {
    contenedor: {
      backgroundColor: '#f7f7f7',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    encabezado: {
      backgroundColor: '#e6d3b2',
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '50px',
    },
    contenido: {
      backgroundColor: 'white',
      padding: '30px',
      marginTop: '20px',
    },
    campos: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '15px',
    },
    campo: {
      display: 'flex',
      flexDirection: 'column',
    },
    select: {
      padding: '5px',
      backgroundColor: '#ddd',
      border: 'none',
      fontSize: '14px',
    }
  };

  return (
    <div style={styles.contenedor}>
      {/* Encabezado con imagen */}
      <div style={styles.encabezado}>
        <img
          src="/assets/logoCdmx.png"
          style={styles.logo}
        />
      </div>

      {/* Sección de datos */}
      <div style={styles.contenido}>
        <h3>Datos de los hechos</h3>

        <div style={styles.campos}>
          <div style={styles.campo}>
            <label>Alcaldía:</label>
            <select style={styles.select}>
              <option value="">Seleccione</option>
            </select>
          </div>

          <div style={styles.campo}>
            <label>Categoría:</label>
            <select style={styles.select}>
              <option value="">Seleccione</option>
            </select>
          </div>

          <div style={styles.campo}>
            <label>Tipo de incidencia:</label>
            <select style={styles.select}>
              <option value="">Seleccione</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DenunciaIdentificada;
