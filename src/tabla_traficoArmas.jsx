import React from "react";

export default function TablaTraficoArmas() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Tráfico de Armas
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora en que se observó el tráfico */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={labelStyle}>
          Hora en que se observó el tráfico de armas:
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
          placeholder="Describa lo sucedido"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Descripción de las personas involucradas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasInvolucradas" style={labelStyle}>
          Descripción de las personas involucradas:
        </label>
        <textarea
          id="personasInvolucradas"
          placeholder="Vestimenta, características, número de personas..."
          rows="2"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Uso de vehículos o transporte */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="usoTransporte" style={labelStyle}>
          ¿Las personas involucradas están usando vehículos o algún medio de transporte?
        </label>
        <select id="usoTransporte" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Tipo de armas traficadas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoArmas" style={labelStyle}>
          ¿Qué tipo de armas se están traficando?
        </label>
        <input
          type="text"
          id="tipoArmas"
          placeholder="Ej. armas cortas, rifles, municiones..."
          style={inputStyle}
        />
      </div>

      {/* Evidencia multimedia */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="evidencia" style={labelStyle}>
          ¿Existen fotos, videos, etcétera?
        </label>
        <select id="evidencia" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Testigos */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hayTestigos" style={labelStyle}>
          ¿Hay testigos de los hechos?
        </label>
        <select id="hayTestigos" style={inputStyle}>
          <option value="">Seleccione</option>
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
