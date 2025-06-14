import React from "react";

export default function TablaSecuestros() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px" }}>
        Formulario de Secuestros
      </h2>

      {/* Nombre de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="nombreVictima"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Nombre de la víctima:
        </label>
        <input
          type="text"
          id="nombreVictima"
          placeholder="Ingrese el nombre"
          style={inputStyle}
        />
      </div>

      {/* Lugar del secuestro */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="lugarSecuestro"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Lugar del secuestro:
        </label>
        <input
          type="text"
          id="lugarSecuestro"
          placeholder="Ingrese el lugar"
          style={inputStyle}
        />
      </div>

      {/* Fecha del secuestro */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fechaSecuestro"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Fecha del secuestro:
        </label>
        <input
          type="date"
          id="fechaSecuestro"
          style={inputStyle}
        />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Descripción */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcion" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Descripción:
        </label>
        <textarea id="descripcion" placeholder="Describe el incidente" rows="3" style={inputStyle}></textarea>
      </div>

      {/* Descripción del vehículo */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionVehiculo" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Descripción del vehículo:
        </label>
        <textarea id="descripcionVehiculo" placeholder="Color, modelo, placas..." rows="2" style={inputStyle}></textarea>
      </div>

      {/* Testigos */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="testigos" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          ¿Hubo testigos?
        </label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="telDenunciante" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Teléfono del denunciante:
        </label>
        <input type="tel" id="telDenunciante" placeholder="Ej. 5551234567" style={inputStyle} />
      </div>

      {/* Edad de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="edadVictima" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Edad de la víctima:
        </label>
        <input type="number" id="edadVictima" placeholder="Edad" style={inputStyle} />
      </div>

      {/* Sexo de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="sexoVictima" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Sexo de la víctima:
        </label>
        <select id="sexoVictima" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>
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
