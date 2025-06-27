import React, { Component } from 'react';

class TablaIntentoSecuestro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      nombreVictima: '',
      edadVictima: '',
      descripcionVictima: '',
      descripcionResponsables: '',
      intentoSubirVehiculo: 'no',
      escapeVictima: '',
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
      fecha, hora, descripcionHechos, nombreVictima, edadVictima,
      descripcionVictima, descripcionResponsables, intentoSubirVehiculo,
      escapeVictima, direccionEscape, hayTestigos, telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "15px", textAlign: "center" }}>
          Formulario: Intento de Secuestro
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

        <label htmlFor="descripcionHechos" style={labelStyle}>Descripción de los hechos</label>
        <textarea
          id="descripcionHechos"
          name="descripcionHechos"
          value={descripcionHechos}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="nombreVictima" style={labelStyle}>Nombre de la víctima (si se conoce)</label>
        <input
          type="text"
          id="nombreVictima"
          name="nombreVictima"
          value={nombreVictima}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="edadVictima" style={labelStyle}>Edad de la víctima</label>
        <input
          type="number"
          id="edadVictima"
          name="edadVictima"
          value={edadVictima}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="descripcionVictima" style={labelStyle}>Descripción física de la víctima</label>
        <textarea
          id="descripcionVictima"
          name="descripcionVictima"
          value={descripcionVictima}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="descripcionResponsables" style={labelStyle}>Descripción de los responsables</label>
        <textarea
          id="descripcionResponsables"
          name="descripcionResponsables"
          value={descripcionResponsables}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="intentoSubirVehiculo" style={labelStyle}>¿Intentaron subir a la víctima a un vehículo?</label>
        <select
          id="intentoSubirVehiculo"
          name="intentoSubirVehiculo"
          value={intentoSubirVehiculo}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="escapeVictima" style={labelStyle}>¿Cómo logró escapar la víctima?</label>
        <textarea
          id="escapeVictima"
          name="escapeVictima"
          value={escapeVictima}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="direccionEscape" style={labelStyle}>Dirección o ruta de escape</label>
        <input
          type="text"
          id="direccionEscape"
          name="direccionEscape"
          value={direccionEscape}
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

export default TablaIntentoSecuestro;
