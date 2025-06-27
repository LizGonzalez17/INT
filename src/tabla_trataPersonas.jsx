import React, { Component } from 'react';

class TablaTrataPersonas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      numeroPersonas: '',
      descripcionPersonas: '',
      edadVictimas: '',
      forzadasTrabajar: 'no',
      violenciaVisible: 'no',
      tipoExplotacion: '',
      rutaEscape: '',
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
      numeroPersonas,
      descripcionPersonas,
      edadVictimas,
      forzadasTrabajar,
      violenciaVisible,
      tipoExplotacion,
      rutaEscape,
      hayTestigos,
      telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "15px", textAlign: "center" }}>
          Formulario: Trata de Personas
        </h2>

        <label htmlFor="fecha" style={labelStyle}>Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fecha}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="hora" style={labelStyle}>Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={hora}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="numeroPersonas" style={labelStyle}>¿Cuántas personas están involucradas en la situación?</label>
        <input
          type="number"
          id="numeroPersonas"
          name="numeroPersonas"
          value={numeroPersonas}
          onChange={this.handleChange}
          style={inputStyle}
          min="0"
        />

        <label htmlFor="descripcionPersonas" style={labelStyle}>Descripción de las personas involucradas</label>
        <textarea
          id="descripcionPersonas"
          name="descripcionPersonas"
          value={descripcionPersonas}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="edadVictimas" style={labelStyle}>Edad aproximada de las víctimas (si se sabe)</label>
        <input
          type="text"
          id="edadVictimas"
          name="edadVictimas"
          value={edadVictimas}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="forzadasTrabajar" style={labelStyle}>¿Las víctimas están siendo forzadas a trabajar en condiciones abusivas o a realizar actividades ilegales?</label>
        <select
          id="forzadasTrabajar"
          name="forzadasTrabajar"
          value={forzadasTrabajar}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="violenciaVisible" style={labelStyle}>¿Existen señales de violencia física o emocional sobre las víctimas?</label>
        <select
          id="violenciaVisible"
          name="violenciaVisible"
          value={violenciaVisible}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="tipoExplotacion" style={labelStyle}>¿Se sabe si las víctimas están siendo explotadas sexualmente, laboralmente o de otra forma?</label>
        <textarea
          id="tipoExplotacion"
          name="tipoExplotacion"
          value={tipoExplotacion}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="rutaEscape" style={labelStyle}>Dirección o ruta de escape</label>
        <input
          type="text"
          id="rutaEscape"
          name="rutaEscape"
          value={rutaEscape}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="hayTestigos" style={labelStyle}>¿Hay testigos de los hechos?</label>
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

        <label htmlFor="telefonoDenunciante" style={labelStyle}>Teléfono del denunciante</label>
        <input
          type="tel"
          id="telefonoDenunciante"
          name="telefonoDenunciante"
          value={telefonoDenunciante}
          onChange={this.handleChange}
          style={inputStyle}
          placeholder="Ej. 5551234567"
        />
      </div>
    );
  }
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  boxSizing: "border-box",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "6px",
  color: "#333",
};

export default TablaTrataPersonas;
