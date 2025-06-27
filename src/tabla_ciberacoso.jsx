import React, { Component } from 'react';

class TablaCiberacoso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcion: '',
      plataforma: '',
      nombreAgresor: '',
      tipoAcoso: '',
      nombreVictima: '',
      edadVictima: '',
      testigos: 'no',
      telDenunciante: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>Formulario de Ciberacoso</h2>
        <form>
          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
              <input type="date" name="fecha" value={this.state.fecha} onChange={this.handleChange} style={inputStyle} required />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="hora" style={labelStyle}>Hora:</label>
              <input type="time" name="hora" value={this.state.hora} onChange={this.handleChange} style={inputStyle} required />
            </div>
          </div>

          <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos:</label>
          <textarea name="descripcion" value={this.state.descripcion} onChange={this.handleChange} rows="3" style={inputStyle} required />

          <label htmlFor="plataforma" style={labelStyle}>Plataforma o red social donde ocurrió el incidente:</label>
          <input type="text" name="plataforma" value={this.state.plataforma} onChange={this.handleChange} style={inputStyle} required />

          <label htmlFor="nombreAgresor" style={labelStyle}>Nombre del agresor (si se conoce):</label>
          <input type="text" name="nombreAgresor" value={this.state.nombreAgresor} onChange={this.handleChange} style={inputStyle} />

          <label htmlFor="tipoAcoso" style={labelStyle}>Tipo de acoso sufrido:</label>
          <input type="text" name="tipoAcoso" value={this.state.tipoAcoso} onChange={this.handleChange} style={inputStyle} required />

          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="nombreVictima" style={labelStyle}>Nombre de la víctima:</label>
              <input type="text" name="nombreVictima" value={this.state.nombreVictima} onChange={this.handleChange} style={inputStyle} required />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="edadVictima" style={labelStyle}>Edad de la víctima:</label>
              <input type="number" min="0" name="edadVictima" value={this.state.edadVictima} onChange={this.handleChange} style={inputStyle} required />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?</label>
              <select name="testigos" value={this.state.testigos} onChange={this.handleChange} style={inputStyle}>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
          </div>

          <label htmlFor="telDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
          <input type="tel" name="telDenunciante" value={this.state.telDenunciante} onChange={this.handleChange} style={inputStyle} required />
        </form>
      </div>
    );
  }
}

export default TablaCiberacoso;

// Estilos
const containerStyle = {
  maxWidth: "1200px",
  margin: "40px auto",
  padding: "30px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

const titleStyle = {
  textAlign: "center",
  color: "#621132",
  marginBottom: "30px",
  fontSize: "2rem",
  borderBottom: "2px solid #621132",
  paddingBottom: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "20px",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "6px",
  color: "#333",
};

const rowStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const inputGroupStyle = {
  flex: "1 1 30%",
};
