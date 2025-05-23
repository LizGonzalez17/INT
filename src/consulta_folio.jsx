import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
  marginTop: "20px",
  borderRadius: "8px",
  border: "1px solid #621132",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const centerDefault = {
  lat: 19.4326,
  lng: -99.1332,
};

const ConsultaFolio = () => {
  const [folio, setFolio] = useState("");
  const [catalogoIncidencias, setCatalogoIncidencias] = useState([]);
  const [incidenciasFiltradas, setIncidenciasFiltradas] = useState([]);
  const [incidenciaSeleccionada, setIncidenciaSeleccionada] = useState("");
  const [ubicacion, setUbicacion] = useState(centerDefault);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState(
    "Seleccione una incidencia del catálogo para ver su ubicación."
  );

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M",
  });

  useEffect(() => {
    setIncidenciasFiltradas([]);
    setIncidenciaSeleccionada("");
    setErrorMsg("");
    setInfoMsg("Seleccione una incidencia del catálogo para ver su ubicación.");
    setUbicacion(centerDefault);
  }, [folio]);

  const buscarIncidencias = () => {
    setErrorMsg("");
    setInfoMsg("");
    if (!folio.trim()) {
      setErrorMsg("Por favor ingrese un folio válido.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      if (folio === "123") {
        const filtradas = catalogoIncidencias.filter(
          (inc) => inc.id === "1" || inc.id === "3"
        );
        setIncidenciasFiltradas(filtradas);
        setInfoMsg(
          `Se encontraron ${filtradas.length} incidencias vinculadas al folio "${folio}".`
        );
      } else {
        setIncidenciasFiltradas([]);
        setInfoMsg(`No se encontraron incidencias para el folio "${folio}".`);
      }
      setLoading(false);
    }, 1000);
  };

  const handleSeleccionIncidencia = (e) => {
    const id = e.target.value;
    setIncidenciaSeleccionada(id);
    const incidencia = catalogoIncidencias.find((i) => i.id === id);
    if (incidencia) {
      setUbicacion({ lat: incidencia.lat, lng: incidencia.lng });
      const vinculada = incidenciasFiltradas.some((i) => i.id === id);
      setInfoMsg(
        `Mostrando ubicación: ${incidencia.nombre}${
          vinculada ? " (vinculada al folio)" : " (no vinculada al folio)"}`
      );
    } else {
      setUbicacion(centerDefault);
      setInfoMsg("Seleccione una incidencia válida.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#e6d3b2",
        padding: "20px",
        boxSizing: "border-box",
        flexDirection: "column",
        color: "#2f2f2f",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: "20px",
          boxSizing: "border-box",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          flexGrow: 1,
          overflowY: "auto",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(98, 17, 50, 0.2)",
          border: "1px solid #621132",
        }}
      >
        <h2
          style={{
            color: "#621132",
            fontWeight: "700",
            fontSize: "2rem",
            borderBottom: "3px solid #4E232E",
            paddingBottom: "6px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Consulta Incidente
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="folioInput" style={{ color: "#4E232E", fontWeight: "600", display: "block", marginBottom: "8px" }}>
            Folio
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              id="folioInput"
              type="text"
              placeholder="Ingrese folio"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && buscarIncidencias()}
              disabled={loading}
              style={{
                flexGrow: 1,
                padding: "10px 12px",
                borderRadius: "6px",
                border: "2px solid #621132",
                fontSize: "1rem",
                color: "#2f2f2f",
              }}
            />
            <button
              onClick={buscarIncidencias}
              disabled={loading}
              style={{
                backgroundColor: "#621132",
                border: "none",
                color: "#e6d3b2",
                padding: "10px 25px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#621132")}
              aria-label="Buscar incidencias"
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                  style={{ color: "#e6d3b2" }}
                />
              ) : (
                "Buscar"
              )}
            </button>
          </div>
          {errorMsg && (
            <div style={{ color: "#b93160", fontWeight: "600", marginTop: "8px" }}>{errorMsg}</div>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="incidenciaSelect" style={{ color: "#4E232E", fontWeight: "600", display: "block", marginBottom: "8px" }}>
            Catálogo de Incidencias
          </label>
          <select
            id="incidenciaSelect"
            value={incidenciaSeleccionada}
            onChange={handleSeleccionIncidencia}
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "2px solid #621132",
              fontWeight: "600",
              color: "#2f2f2f",
            }}
            aria-label="Seleccionar incidencia"
          >
            <option value="" disabled>Seleccione una incidencia</option>
            {catalogoIncidencias.length > 0 &&
              catalogoIncidencias.map((inc) => {
                const vinculada = incidenciasFiltradas.some((i) => i.id === inc.id);
                return (
                  <option key={inc.id} value={inc.id}>
                    {inc.nombre} {vinculada ? "(Vinculada)" : ""}
                  </option>
                );
              })}
          </select>
          {infoMsg && (
            <div style={{ color: "#4E232E", fontWeight: "600", marginTop: "8px" }}>{infoMsg}</div>
          )}
        </div>

        {!isLoaded ? (
          <div style={{ textAlign: "center", fontWeight: "600", color: "#621132" }}>
            Cargando mapa...
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={ubicacion}
            zoom={14}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            aria-label="Mapa con ubicación de incidencia seleccionada"
          >
            <Marker position={ubicacion} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default ConsultaFolio;
