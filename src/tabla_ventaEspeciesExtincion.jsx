import React from "react";

export default function TablaVentaEspeciesExtincion() {
  return (
    <div>
      <h2
        style={{
          color: "#621132",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Formulario: Venta Ilegal de Especies en Extinción
      </h2>

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

      {/* Descripción de los hechos */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcionHechos"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción de los hechos:
        </label>
        <textarea
          id="descripcionHechos"
          placeholder="Describe los hechos"
          rows="3"
          style={inputStyle}
        ></textarea>
      </div>

      {/* Especie vendida ilegalmente */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="especieVendida"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Qué especie está siendo vendida ilegalmente?
        </label>
        <input
          type="text"
          id="especieVendida"
          placeholder="Nombre de la especie"
          style={inputStyle}
        />
      </div>

      {/* Quién está realizando la venta */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="responsableVenta"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Quién está realizando la venta?
        </label>
        <input
          type="text"
          id="responsableVenta"
          placeholder="Nombre o descripción"
          style={inputStyle}
        />
      </div>

      {/* Venta clandestina o abierta */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="tipoVenta"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿La venta se está llevando a cabo de manera clandestina o abierta?
        </label>
        <select id="tipoVenta" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="clandestina">Clandestina</option>
          <option value="abierta">Abierta</option>
        </select>
      </div>

      {/* Lugar de la venta (público o privado) */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="lugarVenta"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿La venta se realiza en lugares públicos o privados?
        </label>
        <select id="lugarVenta" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          <option value="publico">Público</option>
          <option value="privado">Privado</option>
        </select>
      </div>

      {/* ¿Hay testigos? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="testigos"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Hay testigos de los hechos?
        </label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="telefonoDenunciante"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
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

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
