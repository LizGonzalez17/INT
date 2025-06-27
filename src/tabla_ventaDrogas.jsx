import React from "react";

export default function TablaVentaDrogas() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Venta de Drogas
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={labelStyle}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora en que se observó la venta */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="horaObservacion" style={labelStyle}>
          Hora en que se observó la venta de droga:
        </label>
        <input type="time" id="horaObservacion" style={inputStyle} />
      </div>

      {/* Ubicación exacta del punto de venta */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="ubicacionVenta" style={labelStyle}>
          Ubicación exacta del punto de venta:
        </label>
        <input
          type="text"
          id="ubicacionVenta"
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

      {/* Descripción de las personas involucradas */}
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

      {/* Tipo de droga que se vende */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="tipoDroga" style={labelStyle}>
          Tipo de droga que se vende:
        </label>
        <input
          type="text"
          id="tipoDroga"
          placeholder="Ej. marihuana, cocaína, etc."
          style={inputStyle}
        />
      </div>

      {/* Medios de transporte utilizados */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="mediosTransporte" style={labelStyle}>
          Medios de transporte utilizados por vendedores o compradores:
        </label>
        <input
          type="text"
          id="mediosTransporte"
          placeholder="Ej. auto, motocicleta, etc."
          style={inputStyle}
        />
      </div>

      {/* Amenazas, violencia o disputas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="amenazasViolencia" style={labelStyle}>
          ¿Se han registrado amenazas, violencia o disputas relacionadas con la venta de droga?
        </label>
        <select id="amenazasViolencia" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Existencia de pruebas */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="pruebas" style={labelStyle}>
          ¿Existen pruebas?
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
