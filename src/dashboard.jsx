import React from "react";
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
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";

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
  lat: 19.4326,
  lng: -99.1332,
};

const Dashboard = () => {
  const pieData = {
    labels: ["Robo", "Violencia", "Fraude", "Otros"],
    datasets: [
      {
        label: "Delitos",
        data: [30, 25, 20, 25],
        backgroundColor: [
          "rgba(198, 52, 73, 0.85)", // vino
          "rgba(54, 162, 235, 0.75)", // azul
          "rgba(255, 206, 86, 0.75)", // amarillo
          "rgba(75, 192, 192, 0.75)", // turquesa
        ],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Alcaldía 1", "Alcaldía 2", "Alcaldía 3", "Alcaldía 4"],
    datasets: [
      {
        label: "Incidencia",
        data: [12, 19, 7, 15],
        backgroundColor: "rgba(98, 17, 50, 0.8)", // vino oscuro
        borderRadius: 10,
        barPercentage: 0.7,
      },
    ],
  };

  const incidencias = [
    { nombre: "Alcaldía 1", valor: 19 },
    { nombre: "Alcaldía 4", valor: 15 },
    { nombre: "Alcaldía 2", valor: 12 },
    { nombre: "Alcaldía 3", valor: 7 },
  ];

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
        {/* Panel lateral */}
        <aside
          style={{
            flexBasis: "30%",  // menos ancho para el panel lateral
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
            <div style={{ maxWidth: 300, margin: "0 auto" }}>
              <Pie data={pieData} />
            </div>
          </section>

          <section
            style={{
              marginBottom: 32,
              maxHeight: 180,    // limitar altura de la gráfica de barras
              overflow: "hidden", // evitar que se expanda más
            }}
          >
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
            <div style={{ maxWidth: 320, margin: "0 auto" }}>
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
                gap: 14,
              }}
            >
              {incidencias.map((inc, idx) => (
                <li
                  key={inc.nombre}
                  style={{
                    backgroundColor: idx === 0 ? "#e6d3b2" : "#fafafa",
                    padding: "14px 20px",
                    borderRadius: 10,
                    fontWeight: idx === 0 ? "700" : "500",
                    fontSize: idx === 0 ? "1.3rem" : "1.1rem",
                    color: idx === 0 ? "#4E232E" : "#555",
                    boxShadow:
                      idx === 0 ? "0 4px 12px rgba(98,17,50,0.15)" : "none",
                    cursor: "default",
                    userSelect: "none",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (idx !== 0) e.currentTarget.style.backgroundColor = "#f0e8d8";
                  }}
                  onMouseLeave={(e) => {
                    if (idx !== 0) e.currentTarget.style.backgroundColor = "#fafafa";
                  }}
                >
                  {inc.nombre}: {inc.valor}
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Mapa */}
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
              zoom={11}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
              }}
              onLoad={() => console.log("✅ Mapa cargado")}
            />
          </LoadScriptNext>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
