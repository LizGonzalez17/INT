import React, { useState } from "react";

const RegistrarDenuncia = () => {
  const [folioBuscar, setFolioBuscar] = useState("");
  const [datos, setDatos] = useState(""); // texto que se muestra en textarea
  const [editable, setEditable] = useState(false);

  const datosRespaldo = [
    {
      folio: "12345",
      hora: "14:35",
      fecha: "2025-06-12",
      direccionIncidente: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX",
      descripcion: "El incidente ocurrió cuando la víctima salía de un establecimiento comercial. Fue interceptada por dos sujetos armados.",
      descripcionAgresores: "Dos hombres, uno de complexión delgada con sudadera negra y otro más robusto con chamarra azul. Ambos portaban cubrebocas.",
      descripcionVehiculo: "Vehículo tipo sedan, color rojo, placas XYZ-123-A. Se encontraba estacionado frente al lugar del incidente.",
      arma: "sí",
      objetosPerdidos: "Teléfono celular, cartera con identificaciones y dinero en efectivo (aproximadamente $1,500 MXN).",
      testigos: "sí",
      nomDenunciante: "María Fernanda López Ramírez",
      edadDenunciante: 32,
      telDenunciante: "5551234567"
    },
    {
      folio: "67890",
      hora: "09:20",
      fecha: "2025-06-13",
      direccionIncidente: "Calle Morelos 456, Col. Centro, Guadalajara, Jalisco",
      descripcion: "Mientras caminaba hacia su automóvil, la víctima fue interceptada por un sujeto que intentó arrebatarle el bolso.",
      descripcionAgresores: "Hombre joven, aproximadamente 25 años, tez morena, camiseta gris, pantalón de mezclilla, sin tatuajes visibles.",
      descripcionVehiculo: "Motocicleta negra sin placas visibles, modelo reciente.",
      arma: "no",
      objetosPerdidos: "Bolso de mano color beige con documentos personales y $800 en efectivo.",
      testigos: "no",
      nomDenunciante: "Luis Alberto Mendoza Torres",
      edadDenunciante: 41,
      telDenunciante: "3312456789"
    }
  ];

  const formatearDatos = (obj) => {
    return (
      `Folio: ${obj.folio}
Fecha: ${obj.fecha}
Hora: ${obj.hora}
Dirección del incidente: ${obj.direccionIncidente}
Descripción del incidente: ${obj.descripcion}
Descripción de los agresores: ${obj.descripcionAgresores}
Descripción del vehículo: ${obj.descripcionVehiculo}
¿Hubo arma?: ${obj.arma}
Objetos perdidos: ${obj.objetosPerdidos}
¿Hubo testigos?: ${obj.testigos}
Nombre del denunciante: ${obj.nomDenunciante}
Edad del denunciante: ${obj.edadDenunciante}
Teléfono del denunciante: ${obj.telDenunciante}`
    );
  };

  const handleBuscar = async () => {
    try {
      const response = await fetch("/datos.json");
      const json = await response.json();
      buscarPorFolio(json);
    } catch (error) {
      console.warn("Error al cargar archivo, usando respaldo local");
      buscarPorFolio(datosRespaldo);
    }
  };

  const buscarPorFolio = (data) => {
    const resultado = data.find((item) => item.folio === folioBuscar.trim());
    if (resultado) {
      setDatos(formatearDatos(resultado));
      setEditable(false);
    } else {
      setDatos("No se encontró el folio especificado.");
      setEditable(false);
    }
  };

  const handleModificar = () => {
    if (datos && datos !== "No se encontró el folio especificado.") {
      setEditable(true);
    }
  };

  const handleGuardar = () => {
    setEditable(false);
  };

  const handleExportarPDF = () => {
    // Aquí puedes implementar exportar PDF con la info de datos
    alert("Funcionalidad de exportar PDF no implementada aún.");
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: 24,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#2f2f2f",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: 24,
          fontWeight: "700",
          fontSize: "2rem",
          borderBottom: "3px solid #4E232E",
          paddingBottom: 8,
          color: "#621132",
          userSelect: "none",
        }}
      >
        Datos de consulta
      </h2>

      {/* Input para folio + botón Buscar */}
      <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Ingrese folio para buscar"
          value={folioBuscar}
          onChange={(e) => setFolioBuscar(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            fontSize: "1rem",
            borderRadius: 6,
            border: "2px solid #621132",
          }}
        />
        <button
          onClick={handleBuscar}
          style={{
            backgroundColor: "#621132",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 22px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            userSelect: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
        >
          Buscar
        </button>
      </div>

      {/* Textarea con datos formateados */}
      <textarea
        style={{
          flexGrow: 1,
          width: "100%",
          padding: 16,
          fontSize: "1rem",
          borderRadius: 8,
          border: `2px solid ${editable ? "#621132" : "#4E232E"}`,
          backgroundColor: editable ? "#fff" : "#f5f5f5",
          color: "#2f2f2f",
          resize: "vertical",
          boxSizing: "border-box",
          outline: "none",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          minHeight: 0,
          display: "block",
          transition: "border-color 0.25s ease",
          whiteSpace: "pre-wrap",
        }}
        value={datos}
        onChange={(e) => setDatos(e.target.value)}
        disabled={!editable}
        placeholder="Aquí aparecerán los datos de la consulta..."
      />

      {/* Botones Modificar, Guardar y Exportar PDF */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexShrink: 0,
        }}
      >
        <button
          onClick={handleModificar}
          style={{
            backgroundColor: "#621132",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 22px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
        >
          Modificar
        </button>

        <button
          onClick={handleGuardar}
          style={{
            backgroundColor: "#4E232E",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 22px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
        >
          Guardar
        </button>

        <button
          onClick={handleExportarPDF}
          style={{
            backgroundColor: "#2f2f2f",
            color: "#e6d3b2",
            fontWeight: "600",
            padding: "10px 22px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            userSelect: "none",
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

export default RegistrarDenuncia;
