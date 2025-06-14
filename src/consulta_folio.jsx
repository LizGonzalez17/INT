import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import catalogoIncidencias from "./data/catalogos.json";
import ubicaciones from "./data/ubicacion.json";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "1px solid #621132",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const centerDefault = {
  lat: 19.4326,
  lng: -99.1332,
};

const customStyles = {
  accent: "#621132",
  secondary: "#f9f4f0",
  primary: "#2f2f2f",
};

const ConsultaFolio = () => {
  const [folio, setFolio] = useState("");
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

  const navigate = useNavigate();

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

  const folioEncontrado = ubicaciones.find(
    (u) => u.folio.toLowerCase() === folio.trim().toLowerCase()
  );

  if (folioEncontrado) {
    setUbicacion({
      lat: parseFloat(folioEncontrado.latitud),
      lng: parseFloat(folioEncontrado.longitud),
    });
setInfoMsg('Dirección: ${folioEncontrado.direccion}');
  } else {
    setErrorMsg("Folio no encontrado en la base de datos.");
    setUbicacion(centerDefault);
  }

  //navigate("/consulta_incidente", { state: { folio } });
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
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: "20px",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          color: customStyles.accent,
          fontWeight: "700",
          fontSize: "1.8rem",
          borderBottom: "3px solid #4E232E",
          paddingBottom: "8px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Consulta Incidente
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* FOLIO */}
        <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <label
            htmlFor="folioInput"
            style={{
              color: "#4E232E",
              fontWeight: "600",
              display: "block",
              marginBottom: "8px",
              fontSize: "1rem",
            }}
          >
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
                padding: "10px",
                borderRadius: "6px",
                border: `1px solid ${customStyles.accent}`,
                fontSize: "1rem",
                color: customStyles.primary,
              }}
            />
            <button
              onClick={buscarIncidencias}
              disabled={loading}
              style={{
                backgroundColor: customStyles.accent,
                border: "none",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4E232E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = customStyles.accent)
              }
            >
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </div>
          {errorMsg && (
            <div
              style={{
                color: "#b93160",
                fontWeight: "600",
                marginTop: "8px",
                fontSize: "0.9rem",
              }}
            >
              {errorMsg}
            </div>
          )}
        </div>

        {/* CATALOGO INCIDENCIAS con estilo de tipoFormulario */}
        <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <label
            htmlFor="incidenciaSelect"
            style={{
              color: "#4E232E",
              fontWeight: "600",
              display: "block",
              marginBottom: "8px",
              fontSize: "1rem",
            }}
          >
            Tipo de incidencia:
          </label>
          <select
            id="incidenciaSelect"
            value={incidenciaSeleccionada}
            onChange={handleSeleccionIncidencia}
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: `1px solid ${customStyles.accent}`,
              backgroundColor: customStyles.secondary,
              color: customStyles.primary,
              fontWeight: "600",
            }}
          >
            <option value="">Seleccione una incidencia</option>
            {catalogoIncidencias.map((tipo) => {
              const vinculada = incidenciasFiltradas.some((i) => i.id === tipo.id);
              return (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.nombre} {vinculada ? "(Vinculada)" : ""}
                </option>
              );
            })}
          </select>
          {infoMsg && (
            <div
              style={{
                color: customStyles.accent,
                fontWeight: "600",
                marginTop: "8px",
                fontSize: "0.9rem",
              }}
            >
              {infoMsg}
            </div>
          )}
        </div>
      </div>

      {/* MAPA */}
      <div
        style={{
          flexGrow: 1,
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #621132",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          minHeight: "300px",
        }}
      >
        {!isLoaded ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
              color: "#621132",
            }}
          >
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
          >
            <Marker position={ubicacion} />
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default ConsultaFolio;
