import React, { Component } from "react";

export default class TablaMaltratoInfantil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcionViolencia: "",
      nombreMaltratador: "",
      nombreVictima: "",
      edadesCaracteristicas: "",
      descripcionFisicaVictima: "",
      descripcionFisicaMaltratador: "",
      tipoMaltrato: "",
      lesionesVisibles: "no",
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
          Formulario: Maltrato Infantil
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

        {/* Descripción de la violencia */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionViolencia" style={labelStyle}>
            Descripción de la violencia (hechos):
          </label>
          <textarea
            name="descripcionViolencia"
            rows="3"
            value={this.state.descripcionViolencia}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Nombre del maltratador */}
        <div style={fieldStyle}>
          <label htmlFor="nombreMaltratador" style={labelStyle}>
            Nombre de quien ejerce el maltrato:
          </label>
          <input
            type="text"
            name="nombreMaltratador"
            value={this.state.nombreMaltratador}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Nombre de la víctima */}
        <div style={fieldStyle}>
          <label htmlFor="nombreVictima" style={labelStyle}>
            Nombre de la víctima:
          </label>
          <input
            type="text"
            name="nombreVictima"
            value={this.state.nombreVictima}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Edades y características */}
        <div style={fieldStyle}>
          <label htmlFor="edadesCaracteristicas" style={labelStyle}>
            Edades y características físicas:
          </label>
          <textarea
            name="edadesCaracteristicas"
            rows="2"
            value={this.state.edadesCaracteristicas}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción física de la víctima */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionFisicaVictima" style={labelStyle}>
            Descripción física de la víctima:
          </label>
          <textarea
            name="descripcionFisicaVictima"
            rows="2"
            value={this.state.descripcionFisicaVictima}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción física del maltratador */}
        <div style={fieldStyle}>
          <label htmlFor="descripcionFisicaMaltratador" style={labelStyle}>
            Descripción física del maltratador:
          </label>
          <textarea
            name="descripcionFisicaMaltratador"
            rows="2"
            value={this.state.descripcionFisicaMaltratador}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Tipo de maltrato */}
        <div style={fieldStyle}>
          <label htmlFor="tipoMaltrato" style={labelStyle}>
            Tipo de maltrato:
          </label>
          <input
            type="text"
            name="tipoMaltrato"
            value={this.state.tipoMaltrato}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Lesiones visibles */}
        <div style={fieldStyle}>
          <label htmlFor="lesionesVisibles" style={labelStyle}>
            ¿Presenta lesiones visibles?
          </label>
          <select
            name="lesionesVisibles"
            value={this.state.lesionesVisibles}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Dirección de escape */}
        <div style={fieldStyle}>
          <label htmlFor="direccionEscape" style={labelStyle}>
            Dirección o ruta de escape:
          </label>
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
          <label htmlFor="hayTestigos" style={labelStyle}>
            ¿Hay testigos?
          </label>
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
          <label htmlFor="telefonoDenunciante" style={labelStyle}>
            Teléfono del denunciante:
          </label>
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

// Estilos usados (idénticos al de TablaAsalto)
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
