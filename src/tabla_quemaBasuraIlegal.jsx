import React, { Component } from "react";

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

class TablaQuemaBasuraIlegal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionHechos: "",
      tipoResiduos: "",
      quienRealizaQuema: "",
      quemaCercaBosque: "no",
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
      tipoResiduos,
      quienRealizaQuema,
      quemaCercaBosque,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Quema de Basura Ilegal
        </h2>

        <div style={{ marginBottom: "10px" }}>
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
        </div>

        <div style={{ marginBottom: "10px" }}>
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
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="descripcionHechos" style={labelStyle}>
            Descripción de los hechos
          </label>
          <textarea
            id="descripcionHechos"
            name="descripcionHechos"
            value={descripcionHechos}
            onChange={this.handleChange}
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="tipoResiduos" style={labelStyle}>
            ¿Qué tipo de residuos están siendo quemados?
          </label>
          <input
            type="text"
            id="tipoResiduos"
            name="tipoResiduos"
            value={tipoResiduos}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="quienRealizaQuema" style={labelStyle}>
            ¿Quién está realizando la quema?
          </label>
          <input
            type="text"
            id="quienRealizaQuema"
            name="quienRealizaQuema"
            value={quienRealizaQuema}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="quemaCercaBosque" style={labelStyle}>
            ¿La quema está cerca de áreas forestales o boscosas?
          </label>
          <select
            id="quemaCercaBosque"
            name="quemaCercaBosque"
            value={quemaCercaBosque}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
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
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="telefonoDenunciante" style={labelStyle}>
            Teléfono del denunciante
          </label>
          <input
            type="tel"
            id="telefonoDenunciante"
            name="telefonoDenunciante"
            value={telefonoDenunciante}
            onChange={this.handleChange}
            placeholder="Ej. 5551234567"
            style={inputStyle}
          />
        </div>
      </div>
    );
  }
}

export default TablaQuemaBasuraIlegal;
