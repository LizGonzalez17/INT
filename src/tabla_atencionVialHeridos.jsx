import React, { Component } from "react";

class TablaAtencionVialHeridos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      descripcion: "",
      numVehiculos: "",
      hayHeridos: "",
      descripcionVehiculos: "",
      tipoColision: "",
      victimasAtrapadas: "no",
      personasConscientes: "si",
      lesionesGraves: "no",
      alcoholDrogas: "no",
      condicionesClimaticas: "no",
      atropello: "no",
      trasladoUrgente: "no",
      direccion: "",
      testigos: "no",
      telefonoDenunciante: "",
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
      numVehiculos,
      hayHeridos,
      descripcionVehiculos,
      tipoColision,
      victimasAtrapadas,
      personasConscientes,
      lesionesGraves,
      alcoholDrogas,
      condicionesClimaticas,
      atropello,
      trasladoUrgente,
      direccion,
      testigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Atención Vial con Heridos
        </h2>

        {/* Fecha y Hora */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "10px" }}>
          <div style={{ flex: "1 1 45%" }}>
            <label htmlFor="fecha" style={labelStyle}>Fecha</label>
            <input type="date" name="fecha" value={fecha} onChange={this.handleChange} style={inputStyle} />
          </div>
          <div style={{ flex: "1 1 45%" }}>
            <label htmlFor="hora" style={labelStyle}>Hora del accidente</label>
            <input type="time" name="hora" value={hora} onChange={this.handleChange} style={inputStyle} />
          </div>
        </div>

        {/* Descripción */}
        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Descripción de los hechos</label>
          <textarea name="descripcion" value={descripcion} onChange={this.handleChange} rows="3" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Número de vehículos involucrados</label>
          <input type="number" name="numVehiculos" value={numVehiculos} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>¿Hay heridos? ¿Cuántos?</label>
          <input type="text" name="hayHeridos" value={hayHeridos} onChange={this.handleChange} style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Descripción de los vehículos (marca, modelo, color)</label>
          <textarea name="descripcionVehiculos" value={descripcionVehiculos} onChange={this.handleChange} rows="2" style={inputStyle} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Tipo de colisión (frontal, lateral, atropello, etc.)</label>
          <input type="text" name="tipoColision" value={tipoColision} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Selects múltiples */}
        {this.renderSelect("victimasAtrapadas", "¿Hay víctimas atrapadas en vehículos?", ["no", "si"])}
        {this.renderSelect("personasConscientes", "¿Personas conscientes o inconscientes?", [
          "conscientes", "inconscientes", "mixto"
        ])}
        {this.renderSelect("lesionesGraves", "¿Hay signos visibles de lesiones graves?", ["no", "si"])}
        {this.renderSelect("alcoholDrogas", "¿Conductores o pasajeros bajo efectos de alcohol/drogas?", [
          "no", "si", "no_se_sabe"
        ])}
        {this.renderSelect("condicionesClimaticas", "¿Fue por condiciones climáticas o mal estado de carretera?", ["no", "si"])}
        {this.renderSelect("atropello", "¿Hubo atropello de peatón o ciclista?", ["no", "si"])}
        {this.renderSelect("trasladoUrgente", "¿Algún herido necesita traslado urgente?", ["no", "si"])}
        {this.renderSelect("testigos", "¿Hay testigos?", ["no", "si"])}

        {/* Dirección */}
        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Dirección o ruta de escape</label>
          <input type="text" name="direccion" value={direccion} onChange={this.handleChange} style={inputStyle} />
        </div>

        {/* Teléfono */}
        <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Teléfono del denunciante</label>
          <input type="tel" name="telefonoDenunciante" value={telefonoDenunciante} onChange={this.handleChange} style={inputStyle} />
        </div>
      </div>
    );
  }

  renderSelect(name, label, options) {
    return (
      <div style={{ marginBottom: "10px" }} key={name}>
        <label htmlFor={name} style={labelStyle}>{label}</label>
        <select name={name} value={this.state[name]} onChange={this.handleChange} style={inputStyle}>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "no_se_sabe" ? "No se sabe" : opt.charAt(0).toUpperCase() + opt.slice(1)}
            </option>
          ))}
        </select>
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

export default TablaAtencionVialHeridos;
