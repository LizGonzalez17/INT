import React from "react";

export default function TablaIntentoSuicidio() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: "20px",
        overflowY: "auto", // para que se pueda scrollear si hay mucho contenido
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Suicidio o Intento de Suicidio
      </h2>

      {/* Cada campo con marginBottom para separación */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={labelStyle}>
          Hora del incidente o detección:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionHechos" style={labelStyle}>
          Descripción de los hechos:
        </label>
        <textarea
          id="descripcionHechos"
          placeholder="Describe los hechos"
          rows="3"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="descripcionPaciente" style={labelStyle}>
          Descripción del paciente (edad, sexo, características físicas):
        </label>
        <textarea
          id="descripcionPaciente"
          placeholder="Edad, sexo, características"
          rows="3"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="estadoConsciencia" style={labelStyle}>
          Estado de consciencia del paciente:
        </label>
        <input type="text" id="estadoConsciencia" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="intentoExitoso" style={labelStyle}>
          ¿El intento fue exitoso o está herido?:
        </label>
        <select id="intentoExitoso" defaultValue="no" style={inputStyle}>
          <option value="no">Herido</option>
          <option value="si">Suicidio consumado</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="sustanciasPeligrosas" style={labelStyle}>
          ¿Ingerió alguna sustancia peligrosa?:
        </label>
        <select id="sustanciasPeligrosas" defaultValue="no" style={inputStyle}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="accionesAutolesivas" style={labelStyle}>
          ¿Qué acción realizó? (ej. cortarse, colgarse, usar arma):
        </label>
        <input type="text" id="accionesAutolesivas" style={inputStyle} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="antecedentesMentales" style={labelStyle}>
          ¿Tiene antecedentes de trastornos mentales?:
        </label>
        <select id="antecedentesMentales" defaultValue="no" style={inputStyle}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="lugarDificilAcceso" style={labelStyle}>
          ¿Está en lugar de difícil acceso o requiere traslado urgente?:
        </label>
        <select id="lugarDificilAcceso" defaultValue="no" style={inputStyle}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="acompañadoFamiliar" style={labelStyle}>
          ¿Está acompañado por familiar o amigo?:
        </label>
        <select id="acompañadoFamiliar" defaultValue="no" style={inputStyle}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hayTestigos" style={labelStyle}>
          ¿Hay testigos?:
        </label>
        <select id="hayTestigos" defaultValue="no" style={inputStyle}>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="telefonoDenunciante" style={labelStyle}>
          Teléfono del denunciante:
        </label>
        <input
          type="tel"
          id="telefonoDenunciante"
          placeholder="Ej. 5551234567"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "4px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};
