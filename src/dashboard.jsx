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
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api"; // ← CAMBIADO

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
  borderRadius: "8px",
};

const center = {
  lat: 19.4326, // CDMX
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
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Alcaldía 1", "Alcaldía 2", "Alcaldía 3", "Alcaldía 4"],
    datasets: [
      {
        label: "Incidencia",
        data: [12, 19, 7, 15],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
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
    <div className="container-fluid p-3" style={{ height: "100vh" }}>
      <div className="row h-100 gx-3">
        {/* Gráficas */}
        <div className="col-md-4 d-flex flex-column gap-4 border rounded p-3 bg-white">
          <div>
            <h3>Gráfica tipo delito</h3>
            <div style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}>
              <Pie data={pieData} />
            </div>
          </div>
          <div>
            <h3>Gráficas alcaldía</h3>
            <div style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}>
              <Bar data={barData} />
            </div>
          </div>
          <div>
            <h3>Mayor incidencia</h3>
            {incidencias.map((inc, idx) => {
              const style =
                idx === 0
                  ? { fontWeight: "bold", fontSize: "1.3rem", color: "#000" }
                  : {
                      fontWeight: "normal",
                      fontSize: "1rem",
                      color: `rgba(0,0,0,${1 - idx * 0.3})`,
                    };
              return (
                <div key={inc.nombre} style={style}>
                  {inc.nombre}: {inc.valor}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mapa */}
        <div className="col-md-8 border rounded bg-light p-0" style={{ height: "100%" }}>
          <LoadScriptNext googleMapsApiKey="AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={11}
              onLoad={() => console.log("✅ Mapa cargado")}
            />
          </LoadScriptNext>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
