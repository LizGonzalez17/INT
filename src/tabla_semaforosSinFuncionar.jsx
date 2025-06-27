import React from "react";

export default function TablaSemaforosSinFuncionar() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Semáforos Fuera de Servicio
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fecha"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="hora"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* ¿Desde cuándo está fuera de servicio el semáforo? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fueraServicioDesde"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Desde cuándo está fuera de servicio el semáforo?
        </label>
        <input
          type="date"
          id="fueraServicioDesde"
          style={inputStyle}
          placeholder="Fecha desde que está fuera de servicio"
        />
      </div>

      {/* ¿El semáforo está completamente apagado o solo presenta fallas en una de sus luces? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="tipoFalla"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿El semáforo está completamente apagado o solo presenta fallas en una de sus luces?
        </label>
        <select id="tipoFalla" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="completamenteApagado">Completamente apagado</option>
          <option value="fallasLuces">Fallas en una o más luces</option>
        </select>
      </div>

      {/* ¿Está ocurriendo algún accidente o incidente debido a la falla del semáforo? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="accidente"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Está ocurriendo algún accidente o incidente debido a la falla del semáforo?
        </label>
        <select id="accidente" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿El semáforo está afectando el flujo de tráfico en la zona? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="afectacionFlujo"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿El semáforo está afectando el flujo de tráfico en la zona?
        </label>
        <select id="afectacionFlujo" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
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
          placeholder="Ej. 5551234567"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
