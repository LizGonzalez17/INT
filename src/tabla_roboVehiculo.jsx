import React, { Component } from "react";

class TablaRoboVehiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "",
      fecha: "",
      direccionIncidente: "",
      descripcion: "",
      descripcionAgresores: "",
      descripcionVehiculo: "",
      arma: "no",
      objetosPerdidos: "",
      testigos: "no",
      nomDenunciante: "",
      edadDenunciante: "",
      telDenunciante: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      hora,
      fecha,
      direccionIncidente,
      descripcion,
      descripcionAgresores,
      descripcionVehiculo,
      arma,
      objetosPerdidos,
      testigos,
      nomDenunciante,
      edadDenunciante,
      telDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Robo de Vehículos
        </h2>

        <div style={fieldStyle}>
          <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
          <input type="date" name="fecha" value={fecha} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="hora" style={labelStyle}>Hora:</label>
          <input type="time" name="hora" value={hora} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="direccionIncidente" style={labelStyle}>Dirección del incidente:</label>
          <input type="text" name="direccionIncidente" value={direccionIncidente} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos:</label>
          <textarea name="descripcion" value={descripcion} onChange={this.handleChange} rows="3" style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="descripcionAgresores" style={labelStyle}>Descripción de los agresores:</label>
          <textarea name="descripcionAgresores" value={descripcionAgresores} onChange={this.handleChange} rows="2" style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="descripcionVehiculo" style={labelStyle}>Descripción del vehículo:</label>
          <textarea name="descripcionVehiculo" value={descripcionVehiculo} onChange={this.handleChange} rows="2" style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="arma" style={labelStyle}>¿Se utilizó arma?:</label>
          <select name="arma" value={arma} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?:</label>
          <select name="testigos" value={testigos} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={fieldStyle}>
          <label htmlFor="objetosPerdidos" style={labelStyle}>Objetos perdidos:</label>
          <input type="text" name="objetosPerdidos" value={objetosPerdidos} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="nomDenunciante" style={labelStyle}>Nombre del denunciante:</label>
          <input type="text" name="nomDenunciante" value={nomDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="edadDenunciante" style={labelStyle}>Edad del denunciante:</label>
          <input type="number" name="edadDenunciante" value={edadDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="telDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
          <input type="tel" name="telDenunciante" value={telDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>
      </div>
    );
  }
}

export default TablaRoboVehiculo;

// Estilos visuales consistentes
const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

const fieldStyle = {
  marginBottom: "10px",
};
