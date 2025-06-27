import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import catalogoIncidencias from "./data/catalogos.json";
import ubicaciones from "./data/ubicacion.json";

// Estilos y configuraciones
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

// Función para obtener dirección completa
const obtenerDireccion = async (lat, lng) => {
  const apiKey = "AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  );
  const data = await response.json();
  if (data.status === "OK") {
    return data.results[0]?.formatted_address || "Dirección no disponible";
  } else {
    return "No se pudo obtener dirección";
  }
};

const ConsultaFolio = () => {
  const [folio, setFolio] = useState("");
  const [folioEncontrado, setFolioEncontrado] = useState(null);
  const [ubicacion, setUbicacion] = useState(centerDefault);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState(
    "Ingrese un folio y haga clic en Buscar para mostrar su ubicación."
  );
  const [incidenciaSeleccionada, setIncidenciaSeleccionada] = useState("");
  const [marcadores, setMarcadores] = useState([]);
  const [marcadorSeleccionado, setMarcadorSeleccionado] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFolioEncontrado(null);
    setUbicacion(centerDefault);
    setErrorMsg("");
    setInfoMsg("Ingrese un folio y haga clic en Buscar para mostrar su ubicación.");
  }, [folio]);

  const buscarIncidencias = () => {
    setErrorMsg("");
    setInfoMsg("");
    setLoading(true);

    if (!folio.trim()) {
      setErrorMsg("Por favor ingrese un folio válido.");
      setFolioEncontrado(null);
      setUbicacion(centerDefault);
      setLoading(false);
      return;
    }

    const encontrado = ubicaciones.find(
      (u) => u.folio.toLowerCase() === folio.trim().toLowerCase()
    );

    if (encontrado) {
      setUbicacion({
        lat: parseFloat(encontrado.latitud),
        lng: parseFloat(encontrado.longitud),
      });
      setInfoMsg(`Dirección: ${encontrado.direccion}`);
      setFolioEncontrado(encontrado);
    } else {
      setErrorMsg("Folio no encontrado en la base de datos.");
      setUbicacion(centerDefault);
      setFolioEncontrado(null);
    }
    setLoading(false);
  };

  const irConsultaIncidente = () => {
    if (folioEncontrado) {
      navigate("/consulta_incidente", { state: { folio: folioEncontrado.folio } });
    }
  };

  const generarPuntosSimulados = () => {
    const puntos = [];
    for (let i = 0; i < 20; i++) {
      const lat = centerDefault.lat + (Math.random() - 0.5) * 0.1;
      const lng = centerDefault.lng + (Math.random() - 0.5) * 0.1;
      puntos.push({ lat, lng });
    }
    return puntos;
  };

  const handleIncidenciaChange = (tipo) => {
    setIncidenciaSeleccionada(tipo);
    setMarcadorSeleccionado(null);

    if (tipo === "") {
      setMarcadores([]);
      return;
    }

    const puntos = generarPuntosSimulados();
    setMarcadores(puntos);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", backgroundColor: "#fff", padding: "20px", fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ color: customStyles.accent, fontWeight: "700", fontSize: "1.8rem", borderBottom: "3px solid #4E232E", paddingBottom: "8px", marginBottom: "20px", textAlign: "center" }}>
        Consulta Incidente
      </h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <label htmlFor="folioInput" style={{ color: "#4E232E", fontWeight: "600", display: "block", marginBottom: "8px", fontSize: "1rem" }}>
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
              style={{ flexGrow: 1, padding: "10px", borderRadius: "6px", border: `1px solid ${customStyles.accent}`, fontSize: "1rem", color: customStyles.primary }}
            />
            <button
              onClick={buscarIncidencias}
              disabled={loading}
              style={{ backgroundColor: customStyles.accent, border: "none", color: "#fff", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", fontSize: "1rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4E232E")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = customStyles.accent)}
            >
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </div>
          {errorMsg && <div style={{ color: "#b93160", fontWeight: "600", marginTop: "8px", fontSize: "0.9rem" }}>{errorMsg}</div>}
          {infoMsg && <div style={{ color: customStyles.accent, fontWeight: "600", marginTop: "8px", fontSize: "0.9rem" }}>{infoMsg}</div>}
          <button
            onClick={irConsultaIncidente}
            disabled={!folioEncontrado}
            style={{ marginTop: "12px", width: "100%", backgroundColor: folioEncontrado ? customStyles.accent : "#ccc", border: "none", color: "#fff", padding: "10px 20px", borderRadius: "6px", cursor: folioEncontrado ? "pointer" : "not-allowed", fontWeight: "600", fontSize: "1rem" }}
            onMouseEnter={(e) => { if (folioEncontrado) e.currentTarget.style.backgroundColor = "#4E232E"; }}
            onMouseLeave={(e) => { if (folioEncontrado) e.currentTarget.style.backgroundColor = customStyles.accent; }}
          >
            Siguiente
          </button>
        </div>

        <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <label htmlFor="incidenciaSelect" style={{ color: "#4E232E", fontWeight: "600", display: "block", marginBottom: "8px", fontSize: "1rem" }}>
            Tipo de incidencia:
          </label>
          <select
            id="incidenciaSelect"
            value={incidenciaSeleccionada}
            onChange={(e) => handleIncidenciaChange(e.target.value)}
            disabled={loading}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: `1px solid ${customStyles.accent}`, backgroundColor: customStyles.secondary, color: customStyles.primary, fontWeight: "600" }}
          >
            <option value="">Seleccione una incidencia</option>
            {catalogoIncidencias.map((tipo) => (
              <option key={tipo.id} value={tipo.nombre}>{tipo.nombre}</option>
            ))}
          </select>
          {incidenciaSeleccionada && <div style={{ marginTop: "10px", fontWeight: "600", color: "#4E232E" }}>Incidencia seleccionada: <span style={{ color: "#b93160" }}>{incidenciaSeleccionada}</span></div>}
        </div>
      </div>

      <div style={{ flexGrow: 1, borderRadius: "8px", overflow: "hidden", border: "1px solid #621132", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", minHeight: "300px" }}>
        {!isLoaded ? (
          <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", color: "#621132" }}>
            Cargando mapa...
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={ubicacion}
            zoom={13}
            options={{ streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
          >
            <Marker position={ubicacion} />

            {marcadores.map((punto, index) => (
              <Marker
                key={index}
                position={punto}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 6,
                  fillColor: "#ff0000",
                  fillOpacity: 1,
                  strokeWeight: 0,
                }}
                onClick={async () => {
                  const direccion = await obtenerDireccion(punto.lat, punto.lng);
                  setMarcadorSeleccionado({
                    ...punto,
                    incidencia: incidenciaSeleccionada,
                    direccion,
                  });
                }}
              />
            ))}

            {marcadorSeleccionado && (
              <InfoWindow
                position={marcadorSeleccionado}
                onCloseClick={() => setMarcadorSeleccionado(null)}
              >
                <div style={{ color: "#4E232E", fontWeight: "600", maxWidth: "250px" }}>
                  <div>📍 <strong>Dirección:</strong></div>
                  <div style={{ fontWeight: "normal", marginBottom: "8px" }}>
                    {marcadorSeleccionado.direccion}
                  </div>
                  <div>📝 <strong>Incidencia:</strong> {marcadorSeleccionado.incidencia}</div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default ConsultaFolio;
