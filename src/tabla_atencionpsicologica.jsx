import React, { Component } from "react";

class TablaAtencionPsicologica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      ubicacion: "",
      nombreSolicitante: "",
      edadSolicitante: "",
      motivo: "",
      sintomasTrastorno: "no",
      telefonoDenunciante: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fecha,
      hora,
      ubicacion,
      nombreSolicitante,
      edadSolicitante,
      motivo,
      sintomasTrastorno,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Atención Psicológica
        </h2>

        {/* Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha" style={labelStyle}>Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Hora */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hora" style={labelStyle}>Hora en que se solicitó</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Ubicación */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="ubicacion" style={labelStyle}>Ubicación o lugar de atención</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={ubicacion}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Nombre del solicitante */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="nombreSolicitante" style={labelStyle}>Nombre completo del solicitante</label>
          <input
            type="text"
            id="nombreSolicitante"
            name="nombreSolicitante"
            value={nombreSolicitante}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Edad */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="edadSolicitante" style={labelStyle}>Edad de la persona</label>
          <input
            type="number"
            id="edadSolicitante"
            name="edadSolicitante"
            value={edadSolicitante}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Motivo */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="motivo" style={labelStyle}>Motivo de la solicitud (ansiedad, estrés, etc.)</label>
          <textarea
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={this.handleChange}
            rows="3"
            style={inputStyle}
          />
        </div>

        {/* Síntomas */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="sintomasTrastorno" style={labelStyle}>
            ¿Presenta síntomas de trastorno psicológico?
          </label>
          <select
            id="sintomasTrastorno"
            name="sintomasTrastorno"
            value={sintomasTrastorno}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Teléfono */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="telefonoDenunciante" style={labelStyle}>Teléfono del denunciante</label>
          <input
            type="tel"
            id="telefonoDenunciante"
            name="telefonoDenunciante"
            value={telefonoDenunciante}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>
      </div>
    );
  }
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

export default TablaAtencionPsicologica;
