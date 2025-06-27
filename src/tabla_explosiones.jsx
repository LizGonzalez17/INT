import React from "react";

export default function TablaExplosiones() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Explosiones
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

      {/* Causa de la explosión */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="causaExplosion" style={labelStyle}>
          ¿Cuál fue la causa de la explosión? (Si se sabe):
        </label>
        <input
          type="text"
          id="causaExplosion"
          placeholder="Ej. gas, artefacto, material peligroso"
          style={inputStyle}
        />
      </div>

      {/* Heridos o personas atrapadas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="heridosAtrapados" style={labelStyle}>
          ¿Hubo heridos o personas atrapadas en la explosión?
        </label>
        <select id="heridosAtrapados" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Víctimas fatales */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="victimasFatales" style={labelStyle}>
          ¿Se reportan víctimas fatales?
        </label>
        <select id="victimasFatales" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Tipo de explosión */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoExplosion" style={labelStyle}>
          ¿Qué tipo de explosión fue?
        </label>
        <select id="tipoExplosion" defaultValue="" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="gas">Explosión de gas</option>
          <option value="combustible">Explosión de combustible</option>
          <option value="materialPeligroso">Material peligroso</option>
          <option value="artefacto">Artefacto</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Personas en zona afectada */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasZona" style={labelStyle}>
          ¿Cuántas personas están en la zona afectada?
        </label>
        <input
          type="number"
          id="personasZona"
          placeholder="Número de personas"
          min="0"
          style={inputStyle}
        />
      </div>

      {/* Áreas afectadas cercanas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="areasAfectadas" style={labelStyle}>
          ¿La explosión ha afectado áreas cercanas, como viviendas o comercios?
        </label>
        <select id="areasAfectadas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Personas atrapadas bajo escombros */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasAtrapadas" style={labelStyle}>
          ¿Hay personas atrapadas bajo escombros o ruinas?
        </label>
        <select id="personasAtrapadas" defaultValue="no" style={inputStyle}>
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
