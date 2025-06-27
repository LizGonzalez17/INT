import React, { Component } from 'react';

class TablaDerrumbesDeslaves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcion: '',
      afectoInfraestructura: '',
      personasAtrapadas: 'no',
      personasZonaRiesgo: '',
      victimasFatales: 'no',
      danosInfraestructura: 'no',
      bloqueosVias: 'no',
      riesgoNuevosDerrumbes: 'no',
      accesoServiciosEmergencia: 'no',
      familiasAtrapadas: 'no',
      interrupcionServicios: 'no',
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
      descripcion,
      afectoInfraestructura,
      personasAtrapadas,
      personasZonaRiesgo,
      victimasFatales,
      danosInfraestructura,
      bloqueosVias,
      riesgoNuevosDerrumbes,
      accesoServiciosEmergencia,
      familiasAtrapadas,
      interrupcionServicios,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Derrumbes o Deslaves
        </h2>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha" style={labelStyle}>Fecha</label>
          <input type="date" name="fecha" value={fecha} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hora" style={labelStyle}>Hora</label>
          <input type="time" name="hora" value={hora} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos</label>
          <textarea name="descripcion" value={descripcion} onChange={this.handleChange} rows="3" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="afectoInfraestructura" style={labelStyle}>¿El derrumbe o deslave afectó carreteras, casas o edificios?</label>
          <input type="text" name="afectoInfraestructura" value={afectoInfraestructura} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="personasAtrapadas" style={labelStyle}>¿Hay personas atrapadas o heridas?</label>
          <select name="personasAtrapadas" value={personasAtrapadas} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="personasZonaRiesgo" style={labelStyle}>¿Cuántas personas se encuentran en la zona de riesgo?</label>
          <input type="number" name="personasZonaRiesgo" value={personasZonaRiesgo} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="victimasFatales" style={labelStyle}>¿Existen víctimas fatales reportadas?</label>
          <select name="victimasFatales" value={victimasFatales} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="danosInfraestructura" style={labelStyle}>¿Se han producido daños importantes a infraestructuras?</label>
          <select name="danosInfraestructura" value={danosInfraestructura} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="bloqueosVias" style={labelStyle}>¿El deslave ha causado bloqueos en las vías de acceso?</label>
          <select name="bloqueosVias" value={bloqueosVias} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="riesgoNuevosDerrumbes" style={labelStyle}>¿Hay riesgo de nuevos derrumbes o deslaves?</label>
          <select name="riesgoNuevosDerrumbes" value={riesgoNuevosDerrumbes} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="accesoServiciosEmergencia" style={labelStyle}>¿Las personas afectadas tienen acceso a servicios de emergencia?</label>
          <select name="accesoServiciosEmergencia" value={accesoServiciosEmergencia} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="familiasAtrapadas" style={labelStyle}>¿Existen familias atrapadas?</label>
          <select name="familiasAtrapadas" value={familiasAtrapadas} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="interrupcionServicios" style={labelStyle}>¿El derrumbe ha provocado interrupción de servicios?</label>
          <select name="interrupcionServicios" value={interrupcionServicios} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hayTestigos" style={labelStyle}>¿Hay testigos de los hechos?</label>
          <select name="hayTestigos" value={hayTestigos} onChange={this.handleChange} style={inputStyle}>
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="telefonoDenunciante" style={labelStyle}>Teléfono del denunciante</label>
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

export default TablaDerrumbesDeslaves;
