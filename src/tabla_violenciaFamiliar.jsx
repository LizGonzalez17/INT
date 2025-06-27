import React, { Component } from "react";

class TablaViolenciaFamiliar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionHechos: "",
      nombreAgresor: "",
      nombresVictimas: "",
      edadVictimas: "",
      relacionVictimasAgresor: "",
      descripcionFisicaVictimas: "",
      descripcionFisicaAgresor: "",
      tipoViolencia: "",
      lesionesVisibles: "no",
      direccionEscape: "",
      hayTestigos: "no",
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
      descripcionHechos,
      nombreAgresor,
      nombresVictimas,
      edadVictimas,
      relacionVictimasAgresor,
      descripcionFisicaVictimas,
      descripcionFisicaAgresor,
      tipoViolencia,
      lesionesVisibles,
      direccionEscape,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    const inputStyle = {
      width: "100%",
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      boxSizing: "border-box",
    };

    const labelStyle = {
      display: "block",
      fontWeight: "600",
      marginBottom: "6px",
      marginTop: "16px",
      color: "#444",
      fontSize: "1.1rem",
    };

    const containerStyle = {
      width: "100%", // Ocupa todo el ancho
      margin: 0, // Sin márgenes
      padding: "15px", // algo de padding interno
      fontFamily: "Arial, sans-serif",
      color: "#222",
      boxSizing: "border-box",
    };

    const headerStyle = {
      textAlign: "center",
      color: "#621132",
      marginBottom: "20px",
      fontSize: "2rem",
      fontWeight: "700",
    };

    return (
      <div style={containerStyle}>
        <h2 style={headerStyle}>Formulario: Violencia Familiar</h2>

        <label htmlFor="fecha" style={labelStyle}>
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

        <label htmlFor="hora" style={labelStyle}>
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

        <label htmlFor="descripcionHechos" style={labelStyle}>
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

        <label htmlFor="nombreAgresor" style={labelStyle}>
          Nombre(s) de la persona que ejerce la violencia
        </label>
        <input
          type="text"
          id="nombreAgresor"
          name="nombreAgresor"
          value={nombreAgresor}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="nombresVictimas" style={labelStyle}>
          Nombre(s) de las víctimas de violencia familiar
        </label>
        <input
          type="text"
          id="nombresVictimas"
          name="nombresVictimas"
          value={nombresVictimas}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="edadVictimas" style={labelStyle}>
          Edad de las víctimas
        </label>
        <input
          type="text"
          id="edadVictimas"
          name="edadVictimas"
          value={edadVictimas}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="relacionVictimasAgresor" style={labelStyle}>
          Relación de las víctimas con el agresor
        </label>
        <input
          type="text"
          id="relacionVictimasAgresor"
          name="relacionVictimasAgresor"
          value={relacionVictimasAgresor}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="descripcionFisicaVictimas" style={labelStyle}>
          Descripción física de las víctimas
        </label>
        <textarea
          id="descripcionFisicaVictimas"
          name="descripcionFisicaVictimas"
          value={descripcionFisicaVictimas}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="descripcionFisicaAgresor" style={labelStyle}>
          Descripción física de la persona que ejerce la violencia
        </label>
        <textarea
          id="descripcionFisicaAgresor"
          name="descripcionFisicaAgresor"
          value={descripcionFisicaAgresor}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="tipoViolencia" style={labelStyle}>
          Tipo de violencia (física, psicológica, emocional, económica, sexual,
          etc.)
        </label>
        <input
          type="text"
          id="tipoViolencia"
          name="tipoViolencia"
          value={tipoViolencia}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="lesionesVisibles" style={labelStyle}>
          ¿Las víctimas presentan lesiones visibles?
        </label>
        <select
          id="lesionesVisibles"
          name="lesionesVisibles"
          value={lesionesVisibles}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="direccionEscape" style={labelStyle}>
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

        <label htmlFor="hayTestigos" style={labelStyle}>
          ¿Hay testigos de los hechos?
        </label>
        <select
          id="hayTestigos"
          name="hayTestigos"
          value={hayTestigos}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="telefonoDenunciante" style={labelStyle}>
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
    );
  }
}

export default TablaViolenciaFamiliar;
