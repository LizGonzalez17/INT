import React, { Component } from 'react';

class TablaTraficoOrganos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      ubicacion: '',
      descripcionHechos: '',
      descripcionPersonas: '',
      vehiculosInvolucrados: 'no',
      pruebasExistentes: '',
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
      ubicacion,
      descripcionHechos,
      descripcionPersonas,
      vehiculosInvolucrados,
      pruebasExistentes,
      hayTestigos,
      telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "15px", textAlign: "center" }}>
          Formulario: Tráfico de Órganos
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

        <label htmlFor="ubicacion" style={labelStyle}>Ubicación donde ocurre el tráfico de órganos</label>
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

        <label htmlFor="descripcionPersonas" style={labelStyle}>Descripción de las personas involucradas</label>
        <textarea
          id="descripcionPersonas"
          name="descripcionPersonas"
          value={descripcionPersonas}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label htmlFor="vehiculosInvolucrados" style={labelStyle}>¿Existen vehículos involucrados en el traslado de órganos?</label>
        <select
          id="vehiculosInvolucrados"
          name="vehiculosInvolucrados"
          value={vehiculosInvolucrados}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label htmlFor="pruebasExistentes" style={labelStyle}>¿Existen pruebas como fotos, videos, etc.?</label>
        <textarea
          id="pruebasExistentes"
          name="pruebasExistentes"
          value={pruebasExistentes}
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

export default TablaTraficoOrganos;
