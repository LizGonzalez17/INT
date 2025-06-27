import React from "react";

export default function TablaIncendios() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Incendios
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

      {/* ¿El incendio está afectando a alguna persona? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="afectaPersonas" style={labelStyle}>
          ¿El incendio está afectando a alguna persona?
        </label>
        <select id="afectaPersonas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿El fuego ha alcanzado alguna estructura o edificios cercanos? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="alcanceEstructuras" style={labelStyle}>
          ¿El fuego ha alcanzado alguna estructura o edificios cercanos?
        </label>
        <select id="alcanceEstructuras" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿Existen personas atrapadas dentro de la estructura afectada? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="personasAtrapadas" style={labelStyle}>
          ¿Existen personas atrapadas dentro de la estructura afectada?
        </label>
        <select id="personasAtrapadas" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿Hay heridos o personas en peligro debido al incendio? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="heridosPeligro" style={labelStyle}>
          ¿Hay heridos o personas en peligro debido al incendio?
        </label>
        <select id="heridosPeligro" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿El incendio fue causado por alguna actividad humana o parece ser accidental? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="causaIncendio" style={labelStyle}>
          ¿El incendio fue causado por alguna actividad humana o parece ser accidental?
        </label>
        <select id="causaIncendio" defaultValue="" style={inputStyle}>
          <option value="">Seleccione</option>
          <option value="humana">Actividad humana</option>
          <option value="accidental">Accidental</option>
          <option value="desconocida">Desconocida</option>
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
