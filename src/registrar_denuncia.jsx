import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TablaAsalto from "./tabla_asaltos";
import Tabla_RoboVehiculo from "./tabla_roboVehiculo";
import TablaSecuestros from "./tabla_secuestros";
import TablaDrogas from "./tabla_drogas";

export default function RegistrarDenuncia() {
  const { state } = useLocation();

  // Aquí esperamos que el parámetro "tipo" nos diga qué formulario mostrar
  const tipoDenuncia = state?.tipo || "asalto"; // default a "asalto"
  const folioRecibido = state?.folio || "";
  const latitud = state?.latitud || "";
  const longitud = state?.longitud || "";
  const direccion = state?.direccion || "";

  const tablaRef = useRef(null);

  const handleGuardar = () => {
    const datosFormulario = tablaRef.current?.obtenerDatos?.() || {};

    const datosCompletos = {
      folio: folioRecibido,
      latitud,
      longitud,
      direccion,
      tipoDenuncia,
      ...datosFormulario,
    };

    console.log("Datos a guardar:", datosCompletos);

    toast.success("Tu denuncia ha sido registrada exitosamente", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const customStyles = {
    primary: "#4E232E",
    secondary: "#e6d3b2",
    accent: "#621132",
    background: "#f2f2f2",
  };

  // Función para renderizar el formulario correspondiente
  const renderFormulario = () => {
    switch (folioRecibido.toLowerCase()) {
      case "asalto":
        return <TablaAsalto ref={tablaRef} />;

      case "robo de vehículo":
        return <Tabla_RoboVehiculo ref={tablaRef} />;
      case "secuestro":
        return <TablaSecuestros ref={tablaRef} />;

      case "Drogas":  
      return <TablaDrogas ref = {tablaRef} />
      default:
        return <div>No hay formulario disponible para este tipo de denuncia.</div>;
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: customStyles.background,
        overflowY: "auto",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ToastContainer />

      <h1
        style={{
          color: customStyles.primary,
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Registrar Denuncia
      </h1>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="folio" style={labelStyle(customStyles)}>
          Folio recibido:
        </label>
        <input
          type="text"
          id="folio"
          value={folioRecibido}
          readOnly
          style={inputStyle(customStyles)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1" }}>
          <label htmlFor="latitud" style={labelStyle(customStyles)}>
            Latitud:
          </label>
          <input
            type="text"
            id="latitud"
            value={latitud}
            readOnly
            style={inputStyle(customStyles)}
          />
        </div>
        <div style={{ flex: "1" }}>
          <label htmlFor="longitud" style={labelStyle(customStyles)}>
            Longitud:
          </label>
          <input
            type="text"
            id="longitud"
            value={longitud}
            readOnly
            style={inputStyle(customStyles)}
          />
        </div>
        <div style={{ flex: "1" }}>
          <label htmlFor="direccion" style={labelStyle(customStyles)}>
            Dirección:
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            readOnly
            style={inputStyle(customStyles)}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          border: `1px solid ${customStyles.accent}`,
          marginBottom: "30px",
        }}
      >
        {renderFormulario()}
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          onClick={handleGuardar}
          style={{
            backgroundColor: customStyles.accent,
            color: "#fff",
            fontWeight: "700",
            padding: "12px 30px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Guardar Registro
        </button>
      </div>
    </div>
  );
}

const labelStyle = (customStyles) => ({
  display: "block",
  fontWeight: "600",
  marginBottom: "6px",
  color: customStyles.primary,
});

const inputStyle = (customStyles) => ({
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: `1px solid ${customStyles.accent}`,
  backgroundColor: "#fff",
  color: "#333",
});
