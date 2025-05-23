import React, { useState } from "react";

const DatosConsulta = () => {
  const [datos, setDatos] = useState("");
  const [editable, setEditable] = useState(false);

  const handleModificar = () => setEditable(true);
  const handleGuardar = () => setEditable(false);
  const handleExportarPDF = () => {
    // Lógica para exportar PDF
  };

  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{
        minHeight: "90vh",
        padding: 20,
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#ffffff", // Cambiado a blanco
        color: "#2f2f2f",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          color: "#621132",
          fontWeight: "700",
          borderBottom: "3px solid #4E232E",
          paddingBottom: 8,
          flexShrink: 0,
        }}
      >
        Datos de consulta
      </h2>

      <textarea
        className="form-control mb-4"
        style={{
          resize: "none",
          fontSize: "1rem",
          borderColor: "#621132",
          backgroundColor: editable ? "#fff" : "#f5f5f5",
          color: "#2f2f2f",
          flexGrow: 1,
          minHeight: 0,
          height: "100%",
          display: "block",
        }}
        value={datos}
        onChange={(e) => setDatos(e.target.value)}
        disabled={!editable}
        placeholder="Aquí aparecerán los datos de la consulta..."
      />

      <div
        className="d-flex justify-content-center gap-3"
        style={{ flexShrink: 0 }}
      >
        <button
          type="button"
          className="btn"
          onClick={handleModificar}
          style={{
            backgroundColor: "#621132",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: 6,
            border: "none",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
        >
          Modificar
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleGuardar}
          style={{
            backgroundColor: "#4E232E",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: 6,
            border: "none",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
        >
          Guardar
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleExportarPDF}
          style={{
            backgroundColor: "#2f2f2f",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: 6,
            border: "none",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2f2f2f")}
        >
          Exportar PDF
        </button>
      </div>
    </div>
  );
};

export default DatosConsulta;
