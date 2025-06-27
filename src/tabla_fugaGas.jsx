import React from "react";

export default function TablaFugaGas() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Fuga de Gas
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

      {/* Fuga visible o olor perceptible */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fugaVisible" style={labelStyle}>
          ¿Hay una fuga visible de gas o el olor es perceptible?
        </label>
        <select id="fugaVisible" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Posible causa */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="causaFuga" style={labelStyle}>
          ¿Cuál es la posible causa de la fuga de gas? (Si se conoce):
        </label>
        <input
          type="text"
          id="causaFuga"
          placeholder="Ej. tubería rota, negligencia"
          style={inputStyle}
        />
      </div>

      {/* Áreas afectadas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="areasAfectadas" style={labelStyle}>
          ¿La fuga está afectando viviendas, comercios o áreas cercanas?
        </label>
        <select id="areasAfectadas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Personas en riesgo */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasEnRiesgo" style={labelStyle}>
          ¿Cuántas personas se encuentran en riesgo debido a la fuga de gas?
        </label>
        <input
          type="number"
          id="personasEnRiesgo"
          placeholder="Número de personas"
          min="0"
          style={inputStyle}
        />
      </div>

      {/* Dirección o ruta de escape */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="rutaEscape" style={labelStyle}>
          Dirección o ruta de escape:
        </label>
        <input
          type="text"
          id="rutaEscape"
          placeholder="Ingrese la dirección o ruta"
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
