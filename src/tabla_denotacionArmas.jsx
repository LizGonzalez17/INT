import React from "react";

export default function TablaDenotacionArmas() {
  return (
    <div>
     <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
  Formulario: Denotación de Armas
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
          placeholder="Describa lo sucedido"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Número aproximado de detonaciones */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="numeroDetonaciones" style={labelStyle}>
          Número aproximado de detonaciones:
        </label>
        <input
          type="number"
          id="numeroDetonaciones"
          placeholder="Ej. 5"
          style={inputStyle}
        />
      </div>

      {/* ¿Se observaron personas armadas? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasArmadas" style={labelStyle}>
          ¿Se observaron personas armadas?
        </label>
        <select id="personasArmadas" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿Hubo personas heridas? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasHeridas" style={labelStyle}>
          ¿Hubo personas heridas?
        </label>
        <select id="personasHeridas" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Dirección o ruta de escape */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="rutaEscape" style={labelStyle}>
          Dirección o ruta de escape:
        </label>
        <input
          type="text"
          id="rutaEscape"
          placeholder="Calle, colonia, punto de referencia"
          style={inputStyle}
        />
      </div>

      {/* ¿Hay testigos de los hechos? */}
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
