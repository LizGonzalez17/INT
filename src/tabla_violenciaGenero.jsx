import React, { Component } from 'react';

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1rem",
};

export default class TablaViolenciaGenero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      nombreAgresor: '',
      nombreVictima: '',
      edadVictima: '',
      descripcionFisicaVictima: '',
      relacionVictimaAgresor: '',
      descripcionFisicaAgresor: '',
      tipoViolencia: '',
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
      fecha, hora, descripcionHechos, nombreAgresor, nombreVictima, edadVictima,
      descripcionFisicaVictima, relacionVictimaAgresor, descripcionFisicaAgresor,
      tipoViolencia, direccionEscape, hayTestigos, telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Violencia de Género
        </h2>

        {/* Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="fecha"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Fecha:
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
            Hora:
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
            Descripción de los hechos:
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

        {/* Nombre agresor */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="nombreAgresor"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Nombre(s) de la persona que ejerce la violencia:
          </label>
          <input
            type="text"
            id="nombreAgresor"
            name="nombreAgresor"
            value={nombreAgresor}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Nombre víctima */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="nombreVictima"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Nombre de la víctima:
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
            Edad de la víctima:
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

        {/* Relación víctima agresor */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="relacionVictimaAgresor"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Relación de la víctima con el agresor:
          </label>
          <input
            type="text"
            id="relacionVictimaAgresor"
            name="relacionVictimaAgresor"
            value={relacionVictimaAgresor}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Descripción física víctima */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionFisicaVictima"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción física de la víctima:
          </label>
          <textarea
            id="descripcionFisicaVictima"
            name="descripcionFisicaVictima"
            value={descripcionFisicaVictima}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Descripción física agresor */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionFisicaAgresor"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción física de la persona que ejerce la violencia:
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

        {/* Tipo de violencia */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="tipoViolencia"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Tipo de violencia (física, psicológica, emocional, económica, sexual, etc.):
          </label>
          <input
            type="text"
            id="tipoViolencia"
            name="tipoViolencia"
            value={tipoViolencia}
            onChange={this.handleChange}
            style={inputStyle}
          />
        </div>

        {/* Dirección o ruta de escape */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="direccionEscape"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Dirección o ruta de escape:
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

        {/* Teléfono del denunciante */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="telefonoDenunciante"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Teléfono del denunciante:
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
