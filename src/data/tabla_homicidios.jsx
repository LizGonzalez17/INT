import React from "react";

export default function TablaHomicidios() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Homicidios
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={labelStyle}>Hora:</label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Latitud */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="latitud" style={labelStyle}>Latitud:</label>
        <input type="number" id="latitud" placeholder="Ej. 19.4326" style={inputStyle} />
      </div>

      {/* Longitud */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="longitud" style={labelStyle}>Longitud:</label>
        <input type="number" id="longitud" placeholder="Ej. -99.1332" style={inputStyle} />
      </div>

      {/* Dirección del incidente */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="direccionIncidente" style={labelStyle}>Dirección del incidente:</label>
        <textarea id="direccionIncidente" placeholder="Describa la dirección" rows="2" style={inputStyle} />
      </div>

      {/* Descripción de los hechos */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos:</label>
        <textarea id="descripcion" placeholder="Describa el incidente" rows="3" style={inputStyle} />
      </div>

      {/* Descripción física del responsable */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionesFisicas" style={labelStyle}>Descripción física del responsable:</label>
        <textarea id="descripcionesFisicas" placeholder="Color de piel, altura, vestimenta, etc." rows="2" style={inputStyle} />
      </div>

      {/* ¿Hay testigos? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?</label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="telDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
        <input type="tel" id="telDenunciante" placeholder="Ej. 5551234567" style={inputStyle} />
      </div>

      {/* Nombre de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="nomVictima" style={labelStyle}>Nombre de la víctima:</label>
        <input type="text" id="nomVictima" placeholder="Nombre completo" style={inputStyle} />
      </div>

      {/* Edad de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="edadVictima" style={labelStyle}>Edad de la víctima:</label>
        <input type="number" id="edadVictima" placeholder="Edad" style={inputStyle} />
      </div>

      {/* Sexo de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="sexoVictima" style={labelStyle}>Sexo de la víctima:</label>
        <select id="sexoVictima" defaultValue="" style={inputStyle}>
          <option value="" disabled>Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Nombre del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="nomDenunciante" style={labelStyle}>Nombre del denunciante:</label>
        <input type="text" id="nomDenunciante" placeholder="Nombre completo" style={inputStyle} />
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
