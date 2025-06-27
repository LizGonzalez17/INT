import React, { Component } from "react";

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

export default class TablaTormentasElectricas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: "",
      hora: "",
      vientosLluviasIntensas: "no",
      rayosCerca: "no",
      danosInfraestructura: "no",
      viasBloqueadas: "no",
      personasHeridas: "no",
      inundaciones: "no",
      riesgosAdicionales: "",
      panicoPoblacion: "no",
      fenomenosGraves: "no",
      riesgoAnimalesPersonas: "no",
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
      vientosLluviasIntensas,
      rayosCerca,
      danosInfraestructura,
      viasBloqueadas,
      personasHeridas,
      inundaciones,
      riesgosAdicionales,
      panicoPoblacion,
      fenomenosGraves,
      riesgoAnimalesPersonas,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
          Formulario: Tormentas Eléctricas
        </h2>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha" style={labelStyle}>
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

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="hora" style={labelStyle}>
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

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="vientosLluviasIntensas" style={labelStyle}>
            ¿Está la tormenta acompañada de fuertes vientos o lluvias intensas?
          </label>
          <select
            id="vientosLluviasIntensas"
            name="vientosLluviasIntensas"
            value={vientosLluviasIntensas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="rayosCerca" style={labelStyle}>
            ¿Se han reportado caídas de rayos cerca de viviendas, instalaciones o áreas públicas?
          </label>
          <select
            id="rayosCerca"
            name="rayosCerca"
            value={rayosCerca}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="danosInfraestructura" style={labelStyle}>
            ¿Se han registrado daños en edificios, vehículos u otras infraestructuras?
          </label>
          <select
            id="danosInfraestructura"
            name="danosInfraestructura"
            value={danosInfraestructura}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="viasBloqueadas" style={labelStyle}>
            ¿Líneas eléctricas o árboles caídos están bloqueando vías?
          </label>
          <select
            id="viasBloqueadas"
            name="viasBloqueadas"
            value={viasBloqueadas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="personasHeridas" style={labelStyle}>
            ¿Hay personas heridas o atrapadas debido a la tormenta?
          </label>
          <select
            id="personasHeridas"
            name="personasHeridas"
            value={personasHeridas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="inundaciones" style={labelStyle}>
            ¿La tormenta está causando inundaciones o desbordes?
          </label>
          <select
            id="inundaciones"
            name="inundaciones"
            value={inundaciones}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="riesgosAdicionales" style={labelStyle}>
            ¿Existen riesgos adicionales (como incendios por rayos)?
          </label>
          <textarea
            id="riesgosAdicionales"
            name="riesgosAdicionales"
            value={riesgosAdicionales}
            onChange={this.handleChange}
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="panicoPoblacion" style={labelStyle}>
            ¿Se han reportado situaciones de pánico entre la población?
          </label>
          <select
            id="panicoPoblacion"
            name="panicoPoblacion"
            value={panicoPoblacion}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fenomenosGraves" style={labelStyle}>
            ¿El fenómeno está acompañado de tornados, granizo u otros graves?
          </label>
          <select
            id="fenomenosGraves"
            name="fenomenosGraves"
            value={fenomenosGraves}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="riesgoAnimalesPersonas" style={labelStyle}>
            ¿Se han reportado animales o personas en riesgo?
          </label>
          <select
            id="riesgoAnimalesPersonas"
            name="riesgoAnimalesPersonas"
            value={riesgoAnimalesPersonas}
            onChange={this.handleChange}
            style={inputStyle}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="telefonoDenunciante" style={labelStyle}>
            Teléfono del denunciante
          </label>
          <input
            type="tel"
            id="telefonoDenunciante"
            name="telefonoDenunciante"
            value={telefonoDenunciante}
            onChange={this.handleChange}
            placeholder="Ej. 5551234567"
            style={inputStyle}
          />
        </div>
      </div>
    );
  }
}
