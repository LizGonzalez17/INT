import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const RegistrarDenuncia = () => {
  const [folioBuscar, setFolioBuscar] = useState("");
  const [datos, setDatos] = useState(null);
  const [editable, setEditable] = useState(false);
  const pdfRef = useRef();

  const datosRespaldo = [
    {
      folio: "ABC123",
      hora: "14:35",
      fecha: "2025-06-12",
      direccionIncidente: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX",
      descripcion:
        "Interceptada por dos sujetos armados al salir de un establecimiento.",
      descripcionAgresores:
        "Dos hombres, sudadera negra y chamarra azul, con cubrebocas.",
      descripcionVehiculo: "Sedan rojo, placas XYZ-123-A.",
      arma: "sí",
      objetosPerdidos: "Teléfono, cartera, dinero.",
      testigos: "sí",
      nomDenunciante: "María Fernanda López",
      edadDenunciante: 32,
      telDenunciante: "5551234567",
    },
  ];

  const buscar = () => {
    const encontrado = datosRespaldo.find(
      (d) => d.folio.toLowerCase() === folioBuscar.trim().toLowerCase()
    );
    if (encontrado) {
      setDatos({ ...encontrado, descripcionExtra: "" });
      setEditable(false);
    } else {
      setDatos("No se encontró el folio especificado.");
    }
  };

  const handleChange = (key, val) => {
    setDatos((prev) => ({ ...prev, [key]: val }));
  };

  const formatearEtiqueta = (key) => {
    const etiquetas = {
      folio: "Folio",
      fecha: "Fecha",
      hora: "Hora",
      direccionIncidente: "Dirección del incidente",
      descripcion: "Descripción del incidente",
      descripcionAgresores: "Descripción de los agresores",
      descripcionVehiculo: "Descripción del vehículo",
      arma: "¿Hubo arma?",
      objetosPerdidos: "Objetos perdidos",
      testigos: "¿Hubo testigos?",
      nomDenunciante: "Nombre del denunciante",
      edadDenunciante: "Edad del denunciante",
      telDenunciante: "Teléfono de contacto",
    };
    return etiquetas[key] || key;
  };

  const handleExportarPDF = async () => {
    if (!pdfRef.current) return;

    const original = pdfRef.current;
    const clone = original.cloneNode(true);
    clone.style.maxHeight = "none";
    clone.style.overflow = "visible";
    clone.style.position = "absolute";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    clone.style.width = "210mm";
    clone.style.padding = "20px";
    document.body.appendChild(clone);

    const canvas = await html2canvas(clone, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
    const pdfHeight = pdf.internal.pageSize.getHeight();

    let position = 0;
    let heightLeft = imgHeight;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`denuncia_${folioBuscar || "export"}.pdf`);
    document.body.removeChild(clone);
  };

  const estiloLabel = {
    fontWeight: "700",
    fontSize: "1rem",
    marginBottom: 4,
    color: "#7a1f24",
  };

  const estiloCampo = {
    padding: "10px",
    fontSize: "0.95rem",
    borderRadius: 12,
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: "24px 32px",
        background: "linear-gradient(to bottom, #f6f6f6, #ffffff)",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          color: "#7a1f24",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "30px",
          borderBottom: "3px solid #7a1f24",
          paddingBottom: "10px",
        }}
      >
        Consulta de Denuncia - CDMX
      </h2>

      <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Ingrese folio para buscar"
          value={folioBuscar}
          onChange={(e) => setFolioBuscar(e.target.value)}
          style={{ ...estiloCampo, flex: 1, borderColor: "#7a1f24", fontWeight: "600" }}
        />
        <button
          onClick={buscar}
          style={{
            backgroundColor: "#7a1f24",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: 10,
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#551319")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7a1f24")}
        >
          Buscar
        </button>
      </div>

      {datos && typeof datos === "object" ? (
        <div
          ref={pdfRef}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "24px",
            maxHeight: "65vh",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ color: "#7a1f24", fontSize: "1.6rem", margin: 0 }}>Detalles de la Denuncia</h3>
            <div style={{ display: "flex", gap: 12 }}>
              <img src="/assets/policiafederal.png" alt="Logo" style={{ height: 50, borderRadius: 10 }} />
              <img src="/assets/logoCdmx.png" alt="Logo" style={{ height: 50, borderRadius: 10 }} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 24,
              gap: "16px 4%",
            }}
          >
            {Object.entries(datos).map(([key, value]) => {
              if (key === "descripcionExtra") return null;

              const isTextArea =
                key === "descripcion" ||
                key === "descripcionAgresores" ||
                key === "descripcionVehiculo" ||
                key === "objetosPerdidos";

              const anchoCampo = isTextArea ? "100%" : "48%";

              return (
                <div key={key} style={{ width: anchoCampo }}>
                  <label style={estiloLabel}>{formatearEtiqueta(key)}</label>
                  {editable && key === "descripcion" ? (
                    <div>
                      <div
                        style={{
                          ...estiloCampo,
                          backgroundColor: "#f1f1f1",
                          marginBottom: 6,
                          minHeight: 60,
                          whiteSpace: "pre-wrap",
                          border: "1px dashed #bbb",
                        }}
                      >
                        {value}
                      </div>
                      <textarea
                        placeholder="Agregar más información..."
                        value={datos.descripcionExtra || ""}
                        onChange={(e) =>
                          setDatos((prev) => ({
                            ...prev,
                            descripcionExtra: e.target.value,
                          }))
                        }
                        style={{
                          ...estiloCampo,
                          minHeight: 70,
                          backgroundColor: "#fffbea",
                          border: "1px solid #e5d28a",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        ...estiloCampo,
                        backgroundColor: "#f9f9f9",
                        minHeight: isTextArea ? 60 : 40,
                        whiteSpace: "pre-wrap",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {key === "descripcion" && datos.descripcionExtra
                        ? value + "\n\n" + datos.descripcionExtra
                        : value}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : datos ? (
        <p style={{ color: "#a13b3e", fontWeight: "600", textAlign: "center", marginTop: 20 }}>
          {datos}
        </p>
      ) : null}

      {datos && typeof datos === "object" && (
        <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setEditable(true)}
            disabled={editable}
            style={{
              backgroundColor: editable ? "#ccc" : "#7a1f24",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: 10,
              fontWeight: "bold",
              cursor: editable ? "not-allowed" : "pointer",
            }}
          >
            Modificar
          </button>
          <button
            onClick={() => setEditable(false)}
            disabled={!editable}
            style={{
              backgroundColor: editable ? "#205050" : "#bbb",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: 10,
              fontWeight: "bold",
              cursor: editable ? "pointer" : "not-allowed",
            }}
          >
            Guardar
          </button>
          <button
            onClick={handleExportarPDF}
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: 10,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Exportar PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrarDenuncia;
