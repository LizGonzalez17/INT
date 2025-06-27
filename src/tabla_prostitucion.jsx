import React, { Component } from "react";

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1rem",
};

export default class TablaProstitucion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionHechos: "",
      numeroPersonasInvolucradas: "",
      descripcionPersonasInvolucradas: "",
      forzadaContraVoluntad: "no",
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
      numeroPersonasInvolucradas,
      descripcionPersonasInvolucradas,
      forzadaContraVoluntad,
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
          Formulario: Prostitución
        </h2>

        {/* Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="fecha"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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
          <label
            htmlFor="hora"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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
          <label
            htmlFor="descripcionHechos"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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

        {/* Número de personas involucradas */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="numeroPersonasInvolucradas"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿Cuántas personas están involucradas en la situación de prostitución?
          </label>
          <input
            type="number"
            id="numeroPersonasInvolucradas"
            name="numeroPersonasInvolucradas"
            min="0"
            value={numeroPersonasInvolucradas}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción personas involucradas */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionPersonasInvolucradas"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción de las personas involucradas (edad, género)
          </label>
          <textarea
            id="descripcionPersonasInvolucradas"
            name="descripcionPersonasInvolucradas"
            value={descripcionPersonasInvolucradas}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Forzada contra voluntad */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="forzadaContraVoluntad"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿Se observa que las personas involucradas en la prostitución están siendo forzadas a ejercerla contra su voluntad?
          </label>
          <select
            id="forzadaContraVoluntad"
            name="forzadaContraVoluntad"
            value={forzadaContraVoluntad}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Dirección o ruta de escape */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="direccionEscape"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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

        {/* Hay testigos */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="hayTestigos"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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

        {/* Teléfono denunciante */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="telefonoDenunciante"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
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
