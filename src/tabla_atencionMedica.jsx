import React, { Component } from "react";

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1rem",
};

export default class TablaAtencionMedica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      descripcionPaciente: '',
      pacienteConsciente: 'si',
      pacienteAccidenteTrauma: 'no',
      otrasPersonasInvolucradas: 'no',
      direccionEscape: '',
      hayTestigos: 'no',
      telefonoDenunciante: '',
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
      descripcionHechos,
      descripcionPaciente,
      pacienteConsciente,
      pacienteAccidenteTrauma,
      otrasPersonasInvolucradas,
      direccionEscape,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2
          style={{
            color: "#621132",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Formulario: Atención Médica
        </h2>

        {/* Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Fecha
          </label>
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
          <label htmlFor="hora" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Hora
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción de los hechos */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="descripcionHechos" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Descripción de los hechos
          </label>
          <textarea
            id="descripcionHechos"
            name="descripcionHechos"
            value={descripcionHechos}
            onChange={this.handleChange}
            rows={4}
            style={inputStyle}
          />
        </div>

        {/* Descripción del paciente */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="descripcionPaciente" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Descripción del paciente (edad, sexo)
          </label>
          <textarea
            id="descripcionPaciente"
            name="descripcionPaciente"
            value={descripcionPaciente}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* ¿Está consciente? */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="pacienteConsciente" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            ¿El paciente está consciente?
          </label>
          <select
            id="pacienteConsciente"
            name="pacienteConsciente"
            value={pacienteConsciente}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* ¿Víctima de trauma? */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="pacienteAccidenteTrauma" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            ¿El paciente ha sido víctima de un accidente o trauma?
          </label>
          <select
            id="pacienteAccidenteTrauma"
            name="pacienteAccidenteTrauma"
            value={pacienteAccidenteTrauma}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* ¿Hay otras personas involucradas? */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="otrasPersonasInvolucradas" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            ¿Hay otras personas involucradas que necesiten atención médica?
          </label>
          <select
            id="otrasPersonasInvolucradas"
            name="otrasPersonasInvolucradas"
            value={otrasPersonasInvolucradas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Dirección de escape */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="direccionEscape" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Dirección o ruta de escape
          </label>
          <input
            type="text"
            id="direccionEscape"
            name="direccionEscape"
            value={direccionEscape}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* ¿Hay testigos? */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hayTestigos" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            ¿Hay testigos de los hechos?
          </label>
          <select
            id="hayTestigos"
            name="hayTestigos"
            value={hayTestigos}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Teléfono del denunciante */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="telefonoDenunciante" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
            Teléfono del denunciante
          </label>
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
