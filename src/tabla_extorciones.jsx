import React from "react";

export default function TablaExtorsiones() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Extorsiones
      </h2>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="hora"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fecha"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Latitud */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="latitud"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Latitud:
        </label>
        <input type="number" id="latitud" style={inputStyle} />
      </div>

      {/* Longitud */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="longitud"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Longitud:
        </label>
        <input type="number" id="longitud" style={inputStyle} />
      </div>

      {/* Descripción */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción:
        </label>
        <textarea
          id="descripcion"
          placeholder="Describa el incidente"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Tipo de extorsión */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="tipoExtorsion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Tipo de extorsión:
        </label>
        <select id="tipoExtorsion" style={inputStyle}>
          <option value="">Seleccione tipo de extorsión</option>
        </select>
      </div>

      {/* Teléfono del extorsionador */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="telExtorsion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Teléfono del extorsionador:
        </label>
        <input
          type="tel"
          id="telExtorsion"
          placeholder="Ej. 5551234567"
          style={inputStyle}
        />
      </div>

      {/* ¿Hay testigos? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="testigos"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Hay testigos?
        </label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="telDenunciante"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Teléfono del denunciante:
        </label>
        <input type="tel" id="telDenunciante" placeholder="Ej. 5551234567" style={inputStyle} />
      </div>

      {/* Nombre de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="nomVictima"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Nombre de la víctima:
        </label>
        <input
          type="text"
          id="nomVictima"
          placeholder="Nombre completo"
          style={inputStyle}
        />
      </div>

      {/* Edad de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="edadVictima"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Edad de la víctima:
        </label>
        <input type="number" id="edadVictima" placeholder="Edad" style={inputStyle} />
      </div>

      {/* Sexo de la víctima */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="sexoVictima"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
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
