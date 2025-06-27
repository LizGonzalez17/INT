import React from "react";

export default function TablaFallasAlumbrado() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Fallas en Alumbrado
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

      {/* ¿Qué tipo de falla presenta el alumbrado? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="tipoFalla"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Qué tipo de falla presenta el alumbrado?
        </label>
        <select id="tipoFalla" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="apagadoTotal">Apagado total</option>
          <option value="parpadeo">Parpadeo</option>
          <option value="luzDebil">Luz débil</option>
          <option value="otra">Otra</option>
        </select>
      </div>

      {/* ¿Cuántas lámparas están afectadas? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="cantidadLamparas"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Cuántas lámparas están afectadas?
        </label>
        <input
          type="number"
          id="cantidadLamparas"
          min="1"
          placeholder="Número de lámparas"
          style={inputStyle}
        />
      </div>

      {/* ¿Desde cuándo se ha presentado la falla en el alumbrado? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fechaInicioFalla"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Desde cuándo se ha presentado la falla en el alumbrado?
        </label>
        <input type="date" id="fechaInicioFalla" style={inputStyle} />
      </div>

      {/* ¿La falla afecta toda la zona o solo una parte de la calle? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="zonaAfectada"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿La falla afecta toda la zona o solo una parte de la calle?
        </label>
        <select id="zonaAfectada" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="todaZona">Toda la zona</option>
          <option value="parteCalle">Solo una parte de la calle</option>
        </select>
      </div>

      {/* ¿Hay riesgo de accidentes debido a la falta de iluminación en esa zona? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="riesgoAccidentes"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Hay riesgo de accidentes debido a la falta de iluminación en esa zona?
        </label>
        <select id="riesgoAccidentes" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿La zona afectada está cerca de alguna institución, parque o escuela que requiera mayor visibilidad? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="zonaCercana"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿La zona afectada está cerca de alguna institución, parque o escuela que requiera mayor visibilidad?
        </label>
        <select id="zonaCercana" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿La falta de iluminación está generando inseguridad en la zona? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="inseguridadZona"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿La falta de iluminación está generando inseguridad en la zona?
        </label>
        <select id="inseguridadZona" defaultValue="no" style={inputStyle}>
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
