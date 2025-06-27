import React, { Component } from 'react';

class TablaMaltratoAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcion: '',
      tipoMaltrato: '',
      cantidadAnimales: '',
      tipoAnimales: '',
      condicionAnimal: '',
      responsableMaltrato: '',
      tipoEvento: '',
      lugarMaltrato: '',
      direccionEscape: '',
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
        <h2 style={titleStyle}>Formulario de Maltrato Animal</h2>
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

          <label htmlFor="tipoMaltrato" style={labelStyle}>¿Qué tipo de maltrato está sufriendo el animal?</label>
          <input type="text" name="tipoMaltrato" value={this.state.tipoMaltrato} onChange={this.handleChange} style={inputStyle} required />

          <label htmlFor="cantidadAnimales" style={labelStyle}>¿Cuántos animales están involucrados?</label>
          <input type="number" min="1" name="cantidadAnimales" value={this.state.cantidadAnimales} onChange={this.handleChange} style={inputStyle} required />

          <label htmlFor="tipoAnimales" style={labelStyle}>¿Qué tipo de animales están siendo maltratados?</label>
          <input type="text" name="tipoAnimales" value={this.state.tipoAnimales} onChange={this.handleChange} style={inputStyle} required />

          <label htmlFor="condicionAnimal" style={labelStyle}>¿Cuál es la condición física del animal?</label>
          <input type="text" name="condicionAnimal" value={this.state.condicionAnimal} onChange={this.handleChange} style={inputStyle} required />

          <label htmlFor="responsableMaltrato" style={labelStyle}>¿Quién está realizando el maltrato?</label>
          <input type="text" name="responsableMaltrato" value={this.state.responsableMaltrato} onChange={this.handleChange} style={inputStyle} required />

          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="tipoEvento" style={labelStyle}>¿Es continuo o evento aislado?</label>
              <select name="tipoEvento" value={this.state.tipoEvento} onChange={this.handleChange} style={inputStyle}>
                <option value="">Seleccione una opción</option>
                <option value="continuo">Continuo</option>
                <option value="aislado">Evento aislado</option>
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label htmlFor="lugarMaltrato" style={labelStyle}>¿Ocurre en hogar privado o espacio público?</label>
              <select name="lugarMaltrato" value={this.state.lugarMaltrato} onChange={this.handleChange} style={inputStyle}>
                <option value="">Seleccione una opción</option>
                <option value="privado">Hogar privado</option>
                <option value="publico">Espacio público</option>
              </select>
            </div>
          </div>

          <label htmlFor="direccionEscape" style={labelStyle}>Dirección o ruta de escape:</label>
          <input type="text" name="direccionEscape" value={this.state.direccionEscape} onChange={this.handleChange} style={inputStyle} required />

          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?</label>
              <select name="testigos" value={this.state.testigos} onChange={this.handleChange} style={inputStyle}>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label htmlFor="telDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
              <input type="tel" name="telDenunciante" value={this.state.telDenunciante} onChange={this.handleChange} style={inputStyle} required />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TablaMaltratoAnimal;

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
