import React from "react";

export default function TablaPortacionArmas() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Portación de Armas
      </h2>

      <label htmlFor="hora" style={labelStyle}>Hora:</label>
      <input type="time" id="hora" style={inputStyle} />

      <label htmlFor="fecha" style={labelStyle}>Fecha:</label>
      <input type="date" id="fecha" style={inputStyle} />

      <label htmlFor="latitud" style={labelStyle}>Latitud:</label>
      <input type="number" id="latitud" step="any" style={inputStyle} />

      <label htmlFor="longitud" style={labelStyle}>Longitud:</label>
      <input type="number" id="longitud" step="any" style={inputStyle} />

      <label htmlFor="direccionIncidente" style={labelStyle}>Dirección del incidente:</label>
      <textarea id="direccionIncidente" rows="3" style={inputStyle} />

      <label htmlFor="descripcion" style={labelStyle}>Descripción de los hechos:</label>
      <textarea id="descripcion" rows="3" style={inputStyle} />

      <label htmlFor="descripcionAgresores" style={labelStyle}>Descripción de agresores:</label>
      <textarea id="descripcionAgresores" rows="3" style={inputStyle} />

      <label htmlFor="heridos" style={labelStyle}>¿Heridos?</label>
      <select id="heridos" defaultValue="no" style={inputStyle}>
        <option value="no">No</option>
        <option value="si">Sí</option>
      </select>

      <label htmlFor="tipoAmenaza" style={labelStyle}>Tipo de amenaza:</label>
      <select id="tipoAmenaza" style={inputStyle}>
        <option value="">Seleccione tipo de amenaza</option>
      </select>

      <label htmlFor="tipoArma" style={labelStyle}>Tipo de arma:</label>
      <select id="tipoArma" style={inputStyle}>
        <option value="">Seleccione tipo de arma</option>
      </select>

      <label htmlFor="descripcionVehiculo" style={labelStyle}>Descripción del vehículo:</label>
      <textarea id="descripcionVehiculo" rows="3" style={inputStyle} />

      <label htmlFor="numComplices" style={labelStyle}>Número de cómplices:</label>
      <input type="number" id="numComplices" style={inputStyle} />

      <label htmlFor="testigos" style={labelStyle}>¿Hay testigos?</label>
      <select id="testigos" defaultValue="no" style={inputStyle}>
        <option value="no">No</option>
        <option value="si">Sí</option>
      </select>

      <label htmlFor="telDenunciante" style={labelStyle}>Teléfono del denunciante:</label>
      <input type="tel" id="telDenunciante" placeholder="Ej. 5551234567" style={inputStyle} />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "10px",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
  color: "#333",
};
