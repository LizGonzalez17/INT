import React from "react";

export default function TablaFugaPresos() {
  return (
    <div style={{ width: "100%", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Fuga de Presos
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
        <input type="number" id="latitud" placeholder="Ej. 19.4326" style={inputStyle} />
      </div>

      {/* Longitud */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="longitud"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Longitud:
        </label>
        <input type="number" id="longitud" placeholder="Ej. -99.1332" style={inputStyle} />
      </div>

      {/* Dirección del incidente */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="direccionIncidente"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Dirección del incidente:
        </label>
        <textarea
          id="direccionIncidente"
          placeholder="Escribe la dirección completa"
          rows="3"
          style={inputStyle}
        />
      </div>

      {/* Descripción */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción de los hechos:
        </label>
        <textarea
          id="descripcion"
          placeholder="Describe lo ocurrido"
          rows="4"
          style={inputStyle}
        />
      </div>

      {/* Descripción responsables */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcionResponsables"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción de responsables:
        </label>
        <textarea
          id="descripcionResponsables"
          placeholder="Detalles de los responsables"
          rows="3"
          style={inputStyle}
        />
      </div>

      {/* Testigos */}
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

      {/* Teléfono denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="telDenunciante"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Teléfono del denunciante:
        </label>
        <input
          type="tel"
          id="telDenunciante"
          placeholder="Ej. 5551234567"
          style={inputStyle}
        />
      </div>

      {/* Nombre denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="nomDenunciante"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Nombre del denunciante:
        </label>
        <input
          type="text"
          id="nomDenunciante"
          placeholder="Nombre completo"
          style={inputStyle}
        />
      </div>

      {/* Edad denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="edadDenunciante"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Edad del denunciante:
        </label>
        <input
          type="number"
          id="edadDenunciante"
          placeholder="Ej. 30"
          style={inputStyle}
        />
      </div>

      {/* Sexo responsable */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Sexo del responsable:
        </label>
        <select id="sexoResponsable" defaultValue="" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", // Ocupa todo el ancho
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box", // importante para que el padding no expanda el ancho
};
