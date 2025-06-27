import React, { Component } from "react";

class TablaTerremotosHuracanes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      tipoDesastre: "",
      personasAtrapadas: "no",
      asistenciaMedica: "no",
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
      tipoDesastre,
      personasAtrapadas,
      asistenciaMedica,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Terremotos y Huracanes
        </h2>

        {/* Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha" style={labelStyle}>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={fecha}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Hora */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hora" style={labelStyle}>Hora</label>
          <input
            type="time"
            name="hora"
            value={hora}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Tipo de desastre */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="tipoDesastre" style={labelStyle}>Tipo de desastre natural</label>
          <select
            name="tipoDesastre"
            value={tipoDesastre}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="">Seleccione</option>
            <option value="terremoto">Terremoto</option>
            <option value="huracan">Huracán</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Personas atrapadas */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="personasAtrapadas" style={labelStyle}>
            ¿Hay personas atrapadas o heridas?
          </label>
          <select
            name="personasAtrapadas"
            value={personasAtrapadas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Asistencia médica */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="asistenciaMedica" style={labelStyle}>
            ¿Se requiere asistencia médica inmediata?
          </label>
          <select
            name="asistenciaMedica"
            value={asistenciaMedica}
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

export default TablaTerremotosHuracanes;
