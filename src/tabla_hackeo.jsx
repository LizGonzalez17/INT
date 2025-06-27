import React from "react";

export default function TablaHackeo() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario de Hackeo
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Descripción */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción de los hechos:
        </label>
        <textarea id="descripcion" placeholder="Describe el incidente" rows="3" style={inputStyle} />
      </div>

      {/* Tipo de dispositivo */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="tipoDispositivo"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Qué tipo de dispositivo fue afectado por el hackeo?
        </label>
        <input type="text" id="tipoDispositivo" placeholder="Ej. computadora, móvil..." style={inputStyle} />
      </div>

      {/* Correos no autorizados */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="correosNoAutorizados"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Se enviaron correos o mensajes sin su autorización?
        </label>
        <select id="correosNoAutorizados" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Comportamiento extraño */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="comportamientoExtraño"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Comportamiento extraño del dispositivo?
        </label>
        <select id="comportamientoExtraño" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Sitios sospechosos */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="sitiosSospechosos"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Redirecciones a sitios sospechosos?
        </label>
        <select id="sitiosSospechosos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Transacciones no autorizadas */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="transaccionesNoAutorizadas"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Transacciones o compras no autorizadas?
        </label>
        <select id="transaccionesNoAutorizadas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Notificaciones sospechosas */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="notificacionesSospechosas"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Notificaciones sospechosas de bancos o servicios?
        </label>
        <select id="notificacionesSospechosas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Software malicioso */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="softwareMalicioso"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Software malicioso instalado?
        </label>
        <select id="softwareMalicioso" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
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
        <input type="tel" id="telDenunciante" placeholder="Ej. 5551234567" style={inputStyle} />
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
