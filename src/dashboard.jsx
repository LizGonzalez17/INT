import React, { useState, useRef } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from "@react-google-maps/api";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(98, 17, 50, 0.15)",
};

const center = {
  lat: 19.4000,
  lng: -99.1200,
};

const iztapalapaCenter = {
  lat: 19.3575,
  lng: -99.0631,
};

const benitoJuarezCenter = {
  lat: 19.3871,
  lng: -99.1621,
};

const gustavoMaderoCenter = {
  lat: 19.4905,
  lng: -99.1092,
};

const venustianoCarranzaCenter = {
  lat: 19.4300,
  lng: -99.1020,
};

const alvaroObregonCenter = {
  lat: 19.3683,
  lng: -99.2170,
};

const miguelHidalgoCenter = {
  lat: 19.4185,
  lng: -99.1913,
};

const tlalpanCenter = {
  lat: 19.2921,
  lng: -99.1860,
};

const azcapotzalcoCenter = {
  lat: 19.4823,
  lng: -99.1916,
};

const coyoacanCenter = {
  lat: 19.3500,
  lng: -99.1600,
};

const cuauhtemocCenter = {
  lat: 19.4333,
  lng: -99.1436,
};

const iztacalcoCenter = {
  lat: 19.3950,
  lng: -99.0900,
};

const cuajimalpaCenter = {
  lat: 19.3600,
  lng: -99.3000,
};

const xochimilcoCenter = {
  lat: 19.2700,
  lng: -99.1000,
};

const magdalenaContrerasCenter = {
  lat: 19.3050,
  lng: -99.2400,
};

const tlahuacCenter = {
  lat: 19.2600,
  lng: -99.0000,
};

const delitos = [
  "Robo de asaltos",
  "Portación de armas",
  "Secuestros",
  "Extorsiones",
  "Drogas",
  "Fraude",
  "Ataques",
  "Homicidios",
  "Fuga de presos",
  "Violencia",
  "Emergencias",
  "Desastres naturales",
  "Maltrato animal",
  "Servicios públicos",
  "Delitos cibernéticos",
];

const delitosDatos = [15, 10, 8, 7, 12, 6, 9, 4, 3, 11, 5, 2, 1, 3, 4];

const delitosColores = [
  "#C63449",
  "#3670EB",
  "#FFCE56",
  "#4BC0C0",
  "#9B59B6",
  "#E67E22",
  "#2ECC71",
  "#F39C12",
  "#34495E",
  "#1ABC9C",
  "#8E44AD",
  "#D35400",
  "#27AE60",
  "#2980B9",
  "#E74C3C",
];

const alcaldias = [
  "Álvaro Obregón",
  "Azcapotzalco",
  "Benito Juárez",
  "Coyoacán",
  "Cuajimalpa",
  "Cuauhtémoc",
  "Gustavo A. Madero",
  "Iztacalco",
  "Iztapalapa",
  "Magdalena Contreras",
  "Miguel Hidalgo",
  "Milpa Alta",
  "Tláhuac",
  "Tlalpan",
  "Venustiano Carranza",
  "Xochimilco",
];

const alcaldiasDatos = [12, 9, 15, 8, 5, 7, 14, 6, 20, 4, 11, 2, 3, 10, 13, 5];

const incidencias = alcaldias
  .map((nombre, i) => ({ nombre, valor: alcaldiasDatos[i] }))
  .sort((a, b) => b.valor - a.valor);

const pieData = {
  labels: delitos,
  datasets: [
    {
      label: "Delitos",
      data: delitosDatos,
      backgroundColor: delitosColores,
      borderWidth: 0,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 14,
        padding: 10,
        font: {
          size: 12,
          weight: "600",
          family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        color: "#621132",
        usePointStyle: true,
        pointStyle: "circle",
        maxWidth: 400,
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: "#621132",
      titleFont: { weight: "700" },
      bodyFont: { weight: "500" },
    },
  },
  maintainAspectRatio: false,
};

const barData = {
  labels: alcaldias,
  datasets: [
    {
      label: "Incidencia",
      data: alcaldiasDatos,
      backgroundColor: "rgba(98, 17, 50, 0.8)",
      borderRadius: 10,
      barPercentage: 0.7,
    },
  ],
};

const generateMarkers = (center, count) => {
  const markers = [];
  for (let i = 0; i < count; i++) {
    const latOffset = (Math.random() - 0.5) * 0.01;
    const lngOffset = (Math.random() - 0.5) * 0.01;
    markers.push({
      id: i + 1,
      lat: center.lat + latOffset,
      lng: center.lng + lngOffset,
      delito: delitos[i % delitos.length],
    });
  }
  return markers;
};

const iztapalapaMarkers = generateMarkers(iztapalapaCenter, 20);
const benitoJuarezMarkers = generateMarkers(benitoJuarezCenter, 15);
const gustavoMarkers = generateMarkers(gustavoMaderoCenter, 14);
const venustianoCarranzaMarkers = generateMarkers(venustianoCarranzaCenter, 13);
const alvaroObregonMarkers = generateMarkers(alvaroObregonCenter, 12);
const miguelHidalgoMarkers = generateMarkers(miguelHidalgoCenter, 11);
const tlalpanMarkers = generateMarkers(tlalpanCenter, 10);
const azcapotzalcoMarkers = generateMarkers(azcapotzalcoCenter, 9);
const coyoacanMarkers = generateMarkers(coyoacanCenter, 8);
const cuauhtemocMarkers = generateMarkers(cuauhtemocCenter, 7);
const iztacalcoMarkers = generateMarkers(iztacalcoCenter, 6);
const cuajimalpaMarkers = generateMarkers(cuajimalpaCenter, 5);
const xochimilcoMarkers = generateMarkers(xochimilcoCenter, 5);
const magdalenaContrerasMarkers = generateMarkers(magdalenaContrerasCenter, 4);
const tlahuacMarkers = generateMarkers(tlahuacCenter, 3);

const Dashboard = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [address, setAddress] = useState("");
  const geocoderRef = useRef(null);

  const handleMarkerClick = (marker, maps) => {
    setSelectedMarker(marker);
    if (!geocoderRef.current && maps) {
      geocoderRef.current = new maps.Geocoder();
    }

    if (geocoderRef.current) {
      const latlng = {
        lat: marker.lat,
        lng: marker.lng,
      };
      geocoderRef.current.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            setAddress(results[0].formatted_address);
          } else {
            setAddress("Dirección no encontrada");
          }
        } else {
          setAddress("Error al obtener dirección");
        }
      });
    }
  };

  return (
    <div
      className="container-fluid p-4"
      style={{
        height: "100vh",
        backgroundColor: "#fcfcfd",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          marginBottom: 24,
          textAlign: "center",
          color: "#621132",
          fontWeight: "700",
          fontSize: "2rem",
          userSelect: "none",
          letterSpacing: "1.2px",
          textShadow: "1px 1px 2px rgba(98, 17, 50, 0.3)",
        }}
      >
        Dashboard de Incidencias
      </header>

      <div style={{ display: "flex", flexGrow: 1, gap: 24 }}>
        <aside
          style={{
            flexBasis: "30%",
            backgroundColor: "#fff",
            borderRadius: 16,
            boxShadow: "0 4px 12px rgba(98, 17, 50, 0.1)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <section style={{ marginBottom: 32 }}>
            <h3
              style={{
                color: "#621132",
                fontWeight: "700",
                marginBottom: 16,
                borderBottom: "3px solid #621132",
                paddingBottom: 6,
              }}
            >
              Distribución de delitos
            </h3>
            <div style={{ maxWidth: 360, height: 360, margin: "0 auto" }}>
              <Pie data={pieData} options={pieOptions} />
            </div>
          </section>

          <section style={{ marginBottom: 32, maxHeight: 250, overflowY: "auto" }}>
            <h3
              style={{
                color: "#621132",
                fontWeight: "700",
                marginBottom: 16,
                borderBottom: "3px solid #621132",
                paddingBottom: 6,
              }}
            >
              Incidencia por alcaldía
            </h3>
            <div style={{ maxWidth: 360, height: 300, margin: "0 auto" }}>
              <Bar data={barData} />
            </div>
          </section>

          <section>
            <h3
              style={{
                color: "#621132",
                fontWeight: "700",
                marginBottom: 16,
                borderBottom: "3px solid #621132",
                paddingBottom: 6,
              }}
            >
              Alcaldías con mayor incidencia
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {incidencias.map((inc, idx) => {
                const maxFont = 24;
                const minFont = 14;
                const maxWeight = 800;
                const minWeight = 400;
                const scale =
                  (inc.valor - incidencias[incidencias.length - 1].valor) /
                  (incidencias[0].valor - incidencias[incidencias.length - 1].valor || 1);
                const fontSize = minFont + scale * (maxFont - minFont);
                const fontWeight = Math.round(minWeight + scale * (maxWeight - minWeight));

                return (
                  <li
                    key={inc.nombre}
                    style={{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                      color: "#4E232E",
                      userSelect: "none",
                    }}
                  >
                    {inc.nombre}: {inc.valor}
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>

        <main
          style={{
            flexGrow: 1,
            backgroundColor: "#f7f9fb",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(98, 17, 50, 0.12)",
          }}
        >
          <LoadScriptNext googleMapsApiKey="AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
            >
              {[
                ...iztapalapaMarkers,
                ...benitoJuarezMarkers,
                ...gustavoMarkers,
                ...venustianoCarranzaMarkers,
                ...alvaroObregonMarkers,
                ...miguelHidalgoMarkers,
                ...tlalpanMarkers,
                ...azcapotzalcoMarkers,
                ...coyoacanMarkers,
                ...cuauhtemocMarkers,
                ...iztacalcoMarkers,
                ...cuajimalpaMarkers,
                ...xochimilcoMarkers,
                ...magdalenaContrerasMarkers,
                ...tlahuacMarkers,
              ].map((pos, index) => (
                <Marker
                  key={`marker-${index}`}
                  position={{ lat: pos.lat, lng: pos.lng }}
                  onClick={() => handleMarkerClick(pos, window.google.maps)}
                />
              ))}

              {selectedMarker && (
                <InfoWindow
                  position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                  onCloseClick={() => {
                    setSelectedMarker(null);
                    setAddress("");
                  }}
                >
                  <div style={{ color: "#621132", fontWeight: "600", maxWidth: 300 }}>
                    <p>
                      <strong>Incidencia #:</strong> {selectedMarker.id}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {selectedMarker.delito}
                    </p>
                    <p>
                      <strong>Ubicación:</strong>
                      <br />
                      {address || "Cargando..."}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScriptNext>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
