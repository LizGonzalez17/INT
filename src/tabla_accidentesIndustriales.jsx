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

class TablaAccidentesIndustriales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionHechos: "",
      tipoAccidente: "",
      magnitudAccidente: "",
      personasAfectadas: "no",
      personasHeridas: "no",  // aunque no usas en render, lo dejé en state
      cantidadInvolucrados: "",
      causaAccidente: "",
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
      tipoAccidente,
      magnitudAccidente,
      personasAfectadas,
      cantidadInvolucrados,
      causaAccidente,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Accidentes Industriales
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
          <label htmlFor="tipoAccidente" style={labelStyle}>
            ¿Qué tipo de accidente ocurrió?
          </label>
          <input
            type="text"
            id="tipoAccidente"
            name="tipoAccidente"
            value={tipoAccidente}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="magnitudAccidente" style={labelStyle}>
            ¿Cuál es la magnitud del accidente?
          </label>
          <input
            type="text"
            id="magnitudAccidente"
            name="magnitudAccidente"
            value={magnitudAccidente}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="personasAfectadas" style={labelStyle}>
            ¿Hay personas atrapadas o heridas?
          </label>
          <select
            id="personasAfectadas"
            name="personasAfectadas"
            value={personasAfectadas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="cantidadInvolucrados" style={labelStyle}>
            ¿Cuántas personas están involucradas o afectadas?
          </label>
          <input
            type="number"
            id="cantidadInvolucrados"
            name="cantidadInvolucrados"
            value={cantidadInvolucrados}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="causaAccidente" style={labelStyle}>
            ¿Se ha identificado la causa del accidente?
          </label>
          <input
            type="text"
            id="causaAccidente"
            name="causaAccidente"
            value={causaAccidente}
            onChange={this.handleChange}
            style={inputStyle}
          />
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

export default TablaAccidentesIndustriales;
