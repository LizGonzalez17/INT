import React, { Component } from "react";

export default class TablaAsalto extends Component {
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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario de Asaltos
        </h2>

        {/* Fecha */}
        <div style={fieldStyle}>
          <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
          <input type="date" name="fecha" value={this.state.fecha} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Hora */}
        <div style={fieldStyle}>
          <label htmlFor="hora" style={labelStyle}>Hora:</label>
          <input type="time" name="hora" value={this.state.hora} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Dirección */}
        <div style={fieldStyle}>
          <label htmlFor="direccionIncidente" style={labelStyle}>Dirección del incidente:</label>
          <input type="text" name="direccionIncidente" value={this.state.direccionIncidente} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Descripción de los hechos */}
        <div style={fieldStyle}>
          <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos:</label>
          <textarea name="descripcion" rows="3" value={this.state.descripcion} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Descripción agresores */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionAgresores" style={labelStyle}>Descripción de los agresores:</label>
          <textarea name="descripcionAgresores" rows="2" value={this.state.descripcionAgresores} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Descripción vehículo */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionVehiculo" style={labelStyle}>Descripción del vehículo (si hubo):</label>
          <textarea name="descripcionVehiculo" rows="2" value={this.state.descripcionVehiculo} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Arma */}
        <div style={fieldStyle}>
          <label htmlFor="arma" style={labelStyle}>¿Se utilizó arma?</label>
          <select name="arma" value={this.state.arma} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Testigos */}
        <div style={fieldStyle}>
          <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?</label>
          <select name="testigos" value={this.state.testigos} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Objetos perdidos */}
        <div style={fieldStyle}>
          <label htmlFor="objetosPerdidos" style={labelStyle}>Objetos perdidos:</label>
          <input type="text" name="objetosPerdidos" value={this.state.objetosPerdidos} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Nombre denunciante */}
        <div style={fieldStyle}>
          <label htmlFor="nomDenunciante" style={labelStyle}>Nombre del denunciante:</label>
          <input type="text" name="nomDenunciante" value={this.state.nomDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Edad denunciante */}
        <div style={fieldStyle}>
          <label htmlFor="edadDenunciante" style={labelStyle}>Edad:</label>
          <input type="number" min="0" name="edadDenunciante" value={this.state.edadDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Teléfono denunciante */}
        <div style={fieldStyle}>
          <label htmlFor="telDenunciante" style={labelStyle}>Teléfono:</label>
          <input type="tel" name="telDenunciante" value={this.state.telDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>
      </div>
    );
  }
}

// Estilos usados
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
