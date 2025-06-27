import React, { Component } from "react";

export default class TablaAmenazas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionHechos: "",
      metodoAmenaza: "",
      descripcionPersona: "",
      tipoAmenaza: "directa",
      existenPruebas: "no",
      direccionEscape: "",
      hayTestigos: "no",
      telefonoDenunciante: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario de Amenazas
        </h2>

        {/* Fecha */}
        <div style={fieldStyle}>
          <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={this.state.fecha}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Hora */}
        <div style={fieldStyle}>
          <label htmlFor="hora" style={labelStyle}>Hora:</label>
          <input
            type="time"
            name="hora"
            value={this.state.hora}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción de los hechos */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionHechos" style={labelStyle}>Descripción de los hechos:</label>
          <textarea
            name="descripcionHechos"
            rows="3"
            value={this.state.descripcionHechos}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Método de amenaza */}
        <div style={fieldStyle}>
          <label htmlFor="metodoAmenaza" style={labelStyle}>Método de amenaza (teléfono, redes sociales, etc.):</label>
          <input
            type="text"
            name="metodoAmenaza"
            value={this.state.metodoAmenaza}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción de la persona */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionPersona" style={labelStyle}>Descripción de la persona que realizó la amenaza:</label>
          <textarea
            name="descripcionPersona"
            rows="2"
            value={this.state.descripcionPersona}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Tipo de amenaza */}
        <div style={fieldStyle}>
          <label htmlFor="tipoAmenaza" style={labelStyle}>Tipo de amenaza:</label>
          <select
            name="tipoAmenaza"
            value={this.state.tipoAmenaza}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="directa">Directa</option>
            <option value="advertencia">Advertencia</option>
          </select>
        </div>

        {/* Existen pruebas */}
        <div style={fieldStyle}>
          <label htmlFor="existenPruebas" style={labelStyle}>¿Existen pruebas?</label>
          <select
            name="existenPruebas"
            value={this.state.existenPruebas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Dirección de escape */}
        <div style={fieldStyle}>
          <label htmlFor="direccionEscape" style={labelStyle}>Dirección o ruta de escape:</label>
          <input
            type="text"
            name="direccionEscape"
            value={this.state.direccionEscape}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Hay testigos */}
        <div style={fieldStyle}>
          <label htmlFor="hayTestigos" style={labelStyle}>¿Hay testigos?</label>
          <select
            name="hayTestigos"
            value={this.state.hayTestigos}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Teléfono del denunciante */}
        <div style={fieldStyle}>
          <label htmlFor="telefonoDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
          <input
            type="tel"
            name="telefonoDenunciante"
            value={this.state.telefonoDenunciante}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>
      </div>
    );
  }
}

// Estilos reutilizados del formulario de asaltos
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
