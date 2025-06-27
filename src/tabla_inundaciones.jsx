import React, { Component } from 'react';

class TablaInundaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      personasAtrapadas: 'no',
      personasHeridas: 'no',
      servicioElectricidadInterrumpido: 'no',
      riesgosAdicionales: '',
      viasAfectadas: 'no',
      estadoAgua: '',
      hayTestigos: 'no',
      telefonoDenunciante: ''
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
      personasAtrapadas,
      personasHeridas,
      servicioElectricidadInterrumpido,
      riesgosAdicionales,
      viasAfectadas,
      estadoAgua,
      hayTestigos,
      telefonoDenunciante
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Inundaciones
        </h2>

        <div style={campo}>
          <label style={labelStyle}>Fecha</label>
          <input type="date" name="fecha" value={fecha} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={campo}>
          <label style={labelStyle}>Hora</label>
          <input type="time" name="hora" value={hora} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={campo}>
          <label style={labelStyle}>Descripción de los hechos</label>
          <textarea name="descripcionHechos" value={descripcionHechos} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Hay personas atrapadas o en peligro debido a la inundación?</label>
          <select name="personasAtrapadas" value={personasAtrapadas} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Hay reportes de personas heridas o fallecidas debido a la inundación?</label>
          <select name="personasHeridas" value={personasHeridas} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Se ha interrumpido el servicio de electricidad en la zona afectada?</label>
          <select name="servicioElectricidadInterrumpido" value={servicioElectricidadInterrumpido} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Existen riesgos adicionales como deslizamientos, caídas de árboles o daños estructurales?</label>
          <textarea name="riesgosAdicionales" value={riesgosAdicionales} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿El agua ha afectado las vías de comunicación, como calles y carreteras?</label>
          <select name="viasAfectadas" value={viasAfectadas} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Las aguas están subiendo o han comenzado a descender?</label>
          <input type="text" name="estadoAgua" value={estadoAgua} onChange={this.handleChange} placeholder="Ej. Están subiendo / Han comenzado a descender" style={inputStyle} />
        </div>

        <div style={campo}>
          <label style={labelStyle}>¿Hay testigos de los hechos?</label>
          <select name="hayTestigos" value={hayTestigos} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={campo}>
          <label style={labelStyle}>Teléfono del denunciante</label>
          <input type="tel" name="telefonoDenunciante" value={telefonoDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>
      </div>
    );
  }
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

const campo = {
  marginBottom: "10px",
};

export default TablaInundaciones;
