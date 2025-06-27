import React, { Component } from 'react';

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1rem",
};

export default class TablaExplotacionLaboral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      numeroPersonasInvolucradas: '',
      descripcionPersonasExplotadas: '',
      descripcionLugarTrabajo: '',
      condicionesPeligrosas: 'no',
      abusoFisicoPsicologico: 'no',
      intentoEscaparAyuda: 'no',
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
      fecha, hora, descripcionHechos, numeroPersonasInvolucradas, descripcionPersonasExplotadas,
      descripcionLugarTrabajo, condicionesPeligrosas, abusoFisicoPsicologico, intentoEscaparAyuda,
      direccionEscape, hayTestigos, telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Explotación Laboral
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
            ¿Cuántas personas están involucradas en la situación?
          </label>
          <input
            type="number"
            id="numeroPersonasInvolucradas"
            name="numeroPersonasInvolucradas"
            value={numeroPersonasInvolucradas}
            onChange={this.handleChange}
            min="0"
            style={inputStyle}
          />
        </div>

        {/* Descripción de las personas explotadas */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionPersonasExplotadas"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción de las personas explotadas laboralmente (edad, género)
          </label>
          <textarea
            id="descripcionPersonasExplotadas"
            name="descripcionPersonasExplotadas"
            value={descripcionPersonasExplotadas}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Descripción lugar trabajo */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="descripcionLugarTrabajo"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            Descripción del lugar o condiciones de trabajo (si se sabe)
          </label>
          <textarea
            id="descripcionLugarTrabajo"
            name="descripcionLugarTrabajo"
            value={descripcionLugarTrabajo}
            onChange={this.handleChange}
            rows={3}
            style={inputStyle}
          />
        </div>

        {/* Condiciones peligrosas */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="condicionesPeligrosas"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿Las víctimas están siendo obligadas a trabajar en condiciones peligrosas o insalubres?
          </label>
          <select
            id="condicionesPeligrosas"
            name="condicionesPeligrosas"
            value={condicionesPeligrosas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Abuso físico o psicológico */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="abusoFisicoPsicologico"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿Las víctimas están siendo forzadas a trabajar durante horarios excesivos o bajo condiciones de abuso físico o psicológico?
          </label>
          <select
            id="abusoFisicoPsicologico"
            name="abusoFisicoPsicologico"
            value={abusoFisicoPsicologico}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        {/* Intento de escapar o pedir ayuda */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="intentoEscaparAyuda"
            style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
          >
            ¿La víctima ha intentado escapar de la situación o ha pedido ayuda en algún momento?
          </label>
          <select
            id="intentoEscaparAyuda"
            name="intentoEscaparAyuda"
            value={intentoEscaparAyuda}
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
