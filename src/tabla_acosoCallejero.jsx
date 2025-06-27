import React, { Component } from 'react';

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1rem",
};

export default class TablaAcosoCallejero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      descripcionFisicaAgresor: '',
      agresionFisica: 'no',
      nombreVictima: '',
      edadVictima: '',
      danoVictima: 'no',
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
      fecha, hora, descripcionHechos, descripcionFisicaAgresor, agresionFisica,
      nombreVictima, edadVictima, danoVictima, direccionEscape, hayTestigos, telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Acoso Callejero
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
            Hora en que ocurrió
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

        {/* Descripción física agresor */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionFisicaAgresor"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción física del agresor (si se conoce)
          </label>
          <textarea
            id="descripcionFisicaAgresor"
            name="descripcionFisicaAgresor"
            value={descripcionFisicaAgresor}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Agresión física */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="agresionFisica"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿El agresor mostró algún tipo de agresión física?
          </label>
          <select
            id="agresionFisica"
            name="agresionFisica"
            value={agresionFisica}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Nombre víctima */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="nombreVictima"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Nombre de la víctima
          </label>
          <input
            type="text"
            id="nombreVictima"
            name="nombreVictima"
            value={nombreVictima}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Edad víctima */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="edadVictima"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Edad de la víctima
          </label>
          <input
            type="number"
            id="edadVictima"
            name="edadVictima"
            value={edadVictima}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Daño víctima */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="danoVictima"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿La víctima sufrió algún daño físico o emocional a raíz del incidente?
          </label>
          <select
            id="danoVictima"
            name="danoVictima"
            value={danoVictima}
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
