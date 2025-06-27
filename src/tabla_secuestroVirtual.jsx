import React, { Component } from 'react';

class TablaSecuestroVirtual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      horaLlamada: '',
      ubicacion: '',
      descripcionHechos: '',
      numeroTelefono: '',
      nombreVictima: '',
      edadVictima: '',
      mensajeAmenaza: '',
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
      horaLlamada,
      ubicacion,
      descripcionHechos,
      numeroTelefono,
      nombreVictima,
      edadVictima,
      mensajeAmenaza,
      hayTestigos,
      telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "15px", textAlign: "center" }}>
          Formulario: Secuestro Virtual
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

        <label htmlFor="horaLlamada" style={labelStyle}>Hora en que se recibió la llamada o mensaje</label>
        <input
          type="time"
          id="horaLlamada"
          name="horaLlamada"
          value={horaLlamada}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="ubicacion" style={labelStyle}>Ubicación</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={ubicacion}
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

        <label htmlFor="numeroTelefono" style={labelStyle}>Número de teléfono desde donde se recibió la llamada o mensaje</label>
        <input
          type="tel"
          id="numeroTelefono"
          name="numeroTelefono"
          value={numeroTelefono}
          onChange={this.handleChange}
          style={inputStyle}
          placeholder="Ej. 5551234567"
        />

        <label htmlFor="nombreVictima" style={labelStyle}>Nombre de la supuesta víctima</label>
        <input
          type="text"
          id="nombreVictima"
          name="nombreVictima"
          value={nombreVictima}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="edadVictima" style={labelStyle}>Edad de la supuesta víctima</label>
        <input
          type="number"
          id="edadVictima"
          name="edadVictima"
          value={edadVictima}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label htmlFor="mensajeAmenaza" style={labelStyle}>Mensaje o amenazas recibidas</label>
        <textarea
          id="mensajeAmenaza"
          name="mensajeAmenaza"
          value={mensajeAmenaza}
          onChange={this.handleChange}
          rows={3}
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

export default TablaSecuestroVirtual;
