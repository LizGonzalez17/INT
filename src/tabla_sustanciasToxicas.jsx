import React from "react";

export default function TablaSustanciasToxicas() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Sustancias Tóxicas
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={labelStyle}>
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Descripción de los hechos */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionHechos" style={labelStyle}>
          Descripción de los hechos:
        </label>
        <textarea
          id="descripcionHechos"
          placeholder="Describa los hechos"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Tipo de sustancia tóxica */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoSustancia" style={labelStyle}>
          ¿Qué tipo de sustancia tóxica se ha derramado?
        </label>
        <input
          type="text"
          id="tipoSustancia"
          placeholder="Ej. ácido, solvente, pesticida..."
          style={inputStyle}
        />
      </div>

      {/* Testigos */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="testigos" style={labelStyle}>
          ¿Hay testigos de los hechos?
        </label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="telDenunciante" style={labelStyle}>
          Teléfono del denunciante:
        </label>
        <input
          type="tel"
          id="telDenunciante"
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

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};
