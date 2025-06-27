import React from "react";

export default function TablaFraudeElectronico() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Fraude Electrónico
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora en que se detectó el fraude */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="horaDeteccion" style={labelStyle}>
          Hora en que se detectó el fraude electrónico:
        </label>
        <input type="time" id="horaDeteccion" style={inputStyle} />
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

      {/* Tipo de fraude electrónico */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoFraude" style={labelStyle}>
          Tipo de fraude electrónico:
        </label>
        <input
          type="text"
          id="tipoFraude"
          placeholder="Ej. phishing, robo de identidad, etc."
          style={inputStyle}
        />
      </div>

      {/* Plataforma o medio donde ocurrió */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="plataforma" style={labelStyle}>
          Plataforma o medio donde ocurrió:
        </label>
        <input
          type="text"
          id="plataforma"
          placeholder="Ej. correo electrónico, red social, banca en línea..."
          style={inputStyle}
        />
      </div>

      {/* Existencia de pruebas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="pruebas" style={labelStyle}>
          ¿Existen pruebas como correos electrónicos, capturas de pantalla, grabaciones de llamadas u otros datos que puedan ayudar en la investigación?
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
