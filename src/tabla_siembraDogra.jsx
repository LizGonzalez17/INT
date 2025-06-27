import React from "react";

export default function TablaSiembraDroga() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Siembra de Droga
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

      {/* Ubicación exacta del terreno */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="ubicacionTerreno" style={labelStyle}>
          Ubicación exacta del terreno o lugar donde se está cultivando la droga:
        </label>
        <input
          type="text"
          id="ubicacionTerreno"
          placeholder="Ingrese la ubicación exacta"
          style={inputStyle}
        />
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

      {/* Tipo de droga sembrada */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoDroga" style={labelStyle}>
          Tipo de droga que se está sembrando (si es conocido):
        </label>
        <input
          type="text"
          id="tipoDroga"
          placeholder="Ej. marihuana, coca, etc."
          style={inputStyle}
        />
      </div>

      {/* Descripción de personas involucradas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionPersonas" style={labelStyle}>
          Descripción de las personas involucradas:
        </label>
        <textarea
          id="descripcionPersonas"
          placeholder="Describa a las personas involucradas"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Personas armadas observadas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasArmadas" style={labelStyle}>
          ¿Se han observado personas armadas en el lugar?
        </label>
        <select id="personasArmadas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Existencia de pruebas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="pruebas" style={labelStyle}>
          ¿Existen pruebas como fotos, videos, etcétera?
        </label>
        <select id="pruebas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
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
