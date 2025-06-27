import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import TablaAsalto from "./tabla_asaltos";
import Tabla_RoboVehiculo from "./tabla_roboVehiculo";
import TablaSecuestros from "./tabla_secuestros";
import TablaDrogas from "./tabla_drogas";
import TablaDenotacionArmas from "./tabla_denotacionArmas";
import TablaTraficoArmas from "./tabla_traficoArmas";
import TablaPortacionArmas from "./tabla_portacionArmas";
import TablaIntentoSecuestro from "./tabla_intentoSecuestro";
import TablaSecuestroVirtual from "./tabla_secuestroVirtual";
import TablaTraficoOrganos from "./tabla_traficoOrganos";
import TablaTrataPersonas from "./tabla_trataPersonas";
import TablaPersonasDesaparecidas from "./tabla_personasDesaparecidas";
import TablaExtorciones from "./tabla_extorciones";
import TablaVentaDrogas from "./tabla_ventaDrogas";
import TablaSiembraDroga from "./tabla_siembraDogra";
import TablaFraudeElectronico from "./tabla_fraudeElectronico";
import TablaLavadoDinero from "./tabla_lavadoDinero";
import TablaAtaquesExplosivos from "./tabla_ataquesExplosivos";
import TablaIncendios from "./tabla_incencios";
import TablaExplosiones from "./tabla_explosiones";
import TablaFugaGas from "./tabla_fugaGas";
import TablaSustanciasToxicas from "./tabla_sustanciasToxicas";
import TablaHomicidios from "./data/tabla_homicidios";
import TablaIntentoHomicidio from "./tabla_intentoHomocidio";
import TablaIntentoSuicidio from "./tabla_suicidio";
import TablaFugaPresos from "./data/tabla_fugaPresos";
import TablaAmenazas from "./tabla_amenazas";
import TablaMaltratoInfantil from "./tabla_maltratoInfantil";
import TablaViolenciaFamiliar from "./tabla_violenciaFamiliar";
import TablaViolenciaMujeres from "./tabla_violenciaGenero";
import TablaAcosoSexual from "./tabla_acosoSexual";
import TablaAcosoCallejero from "./tabla_acosoCallejero";
import TablaExplotacionLaboral from "./tabla_explotacionLaboral";
import TablaProstitucion from "./tabla_prostitucion";
import TablaAtencionMedica from "./tabla_atencionMedica";
import TablaAtencionPsicologica from "./tabla_atencionpsicologica";
import TablaAtencionVialHeridos from "./tabla_atencionVialHeridos";
import TablaTerremotosHuracanes from "./tabla_terremotosHuracanes";
import TablaDerrumbesDeslaves from "./tabla_derrumbesDeslaves";
import TablaInundaciones from "./tabla_inundaciones";
import TablaTormentasElectricas from "./tabla_tormentasElectricas";
import TablaAccidentesIndustriales from "./tabla_accidentesIndustriales";
import TablaQuemaBasuraIlegal from "./tabla_quemaBasuraIlegal";
import TablaVentaEspeciesExtincion from "./tabla_ventaEspeciesExtincion";
import TablaSemaforosSinFuncionar from "./tabla_semaforosSinFuncionar";
import TablaFallasAlumbrado from "./tabla_fallasAlumbrado";
import TablaRoboIdentidad from "./tabla_roboIdentidad";
import TablaCiberacoso from "./tabla_ciberacoso";
import TablaHackeo from "./tabla_hackeo";
import TablaMaltratoAnimal from "./tabla_maltratoAnimal";

export default function RegistrarDenuncia() {
  const { state } = useLocation();

  const tipoDenuncia = state?.tipo || "asalto";
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
    background: "#f6f6f6",
  };

  const renderFormulario = () => {
    switch (folioRecibido.toLowerCase()) {
      case "asalto": return <TablaAsalto ref={tablaRef} />;
      case "robo de vehículos": return <Tabla_RoboVehiculo ref={tablaRef} />;
      case "portación_de_armas": return <TablaPortacionArmas ref={tablaRef} />;
      case "secuestro": return <TablaSecuestros ref={tablaRef} />;
      case "intento_de_secuestro": return <TablaIntentoSecuestro ref={tablaRef} />;
      case "secuestro_virtual": return <TablaSecuestroVirtual ref={tablaRef} />;
      case "tráfico_de_organos": return <TablaTraficoOrganos ref={tablaRef} />;
      case "trata_de_personas": return <TablaTrataPersonas ref={tablaRef} />;
      case "personas_desaparecidas": return <TablaPersonasDesaparecidas ref={tablaRef} />;
      case "victimas de extorsión": return <TablaExtorciones ref={tablaRef} />;
      case "tráfico_de_drogas": return <TablaDrogas ref={tablaRef} />;
      case "venta_de_droga": return <TablaVentaDrogas ref={tablaRef} />;
      case "siembra_de_droga": return <TablaSiembraDroga ref={tablaRef} />;
      case "fraude_electrónico": return <TablaFraudeElectronico ref={tablaRef} />;
      case "lavado_de_dinero": return <TablaLavadoDinero ref={tablaRef} />;
      case "ataques_explosivos": return <TablaAtaquesExplosivos ref={tablaRef} />;
      case "incendios": return <TablaIncendios ref={tablaRef} />;
      case "explosiones": return <TablaExplosiones ref={tablaRef} />;
      case "fuga_gas": return <TablaFugaGas ref={tablaRef} />;
      case "sustancias_tóxicas": return <TablaSustanciasToxicas ref={tablaRef} />;
      case "homocidio": return <TablaHomicidios ref={tablaRef} />;
      case "intento_de_homicidio": return <TablaIntentoHomicidio ref={tablaRef} />;
      case "suicidio": return <TablaIntentoSuicidio ref={tablaRef} />;
      case "fuga_de_presos": return <TablaFugaPresos ref={tablaRef} />;
      case "amenazas": return <TablaAmenazas ref={tablaRef} />;
      case "maltrato_infantil": return <TablaMaltratoInfantil ref={tablaRef} />;
      case "violencia_familiar": return <TablaViolenciaFamiliar ref={tablaRef} />;
      case "violencia_contra_mujeres": return <TablaViolenciaMujeres ref={tablaRef} />;
      case "violencia_de_generó": return <TablaViolenciaMujeres ref={tablaRef} />;
      case "acoso_sexual": return <TablaAcosoSexual ref={tablaRef} />;
      case "acoso_callejero": return <TablaAcosoCallejero ref={tablaRef} />;
      case "explotación_laboral": return <TablaExplotacionLaboral ref={tablaRef} />;
      case "prostitución": return <TablaProstitucion ref={tablaRef} />;
      case "atención_médica": return <TablaAtencionMedica ref={tablaRef} />;
      case "atención_psicológica": return <TablaAtencionPsicologica ref={tablaRef} />;
      case "atención_vial_heridos": return <TablaAtencionVialHeridos ref={tablaRef} />;
      case "terremotos_huracanes": return <TablaTerremotosHuracanes ref={tablaRef} />;
      case "deslaves": return <TablaDerrumbesDeslaves ref={tablaRef} />;
      case "inundaciones": return <TablaInundaciones ref={tablaRef} />;
      case "tormentas_eléctricas": return <TablaTormentasElectricas ref={tablaRef} />;
      case "accidentes_industriales": return <TablaAccidentesIndustriales ref={tablaRef} />;
      case "quema_de_basura_ilegal": return <TablaQuemaBasuraIlegal ref={tablaRef} />;
      case "maltrato_animal": return <TablaMaltratoAnimal ref={tablaRef} />;
      case "venta_especies_en_extinción": return <TablaVentaEspeciesExtincion ref={tablaRef} />;
      case "semáforos_sin_funcionar": return <TablaSemaforosSinFuncionar ref={tablaRef} />;
      case "fallas_de_alumbrado": return <TablaFallasAlumbrado ref={tablaRef} />;
      case "robo_identidad": return <TablaRoboIdentidad ref={tablaRef} />;
      case "hackeo": return <TablaHackeo ref={tablaRef} />;
      case "drogas": return <TablaDrogas ref={tablaRef} />;
      case "asaltos": return <TablaAsalto ref={tablaRef} />;
      case "denotación_de_armas": return <TablaDenotacionArmas ref={tablaRef} />;
      case "tráfico_de_armas": return <TablaTraficoArmas ref={tablaRef} />;
      default: return <div>No hay formulario disponible para este tipo de denuncia.</div>;
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: customStyles.background,
        overflowY: "auto",
        padding: "40px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Segoe UI, Roboto, sans-serif",
      }}
    >
      <ToastContainer />

      <h1
        style={{
          color: customStyles.primary,
          fontWeight: "bold",
          fontSize: "28px",
          marginBottom: "25px",
          textAlign: "center",
          borderBottom: `3px solid ${customStyles.accent}`,
          paddingBottom: "10px",
        }}
      >
         Registrar Denuncia
      </h1>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="folio" style={labelStyle(customStyles)}>Folio recibido:</label>
        <input type="text" id="folio" value={folioRecibido} readOnly style={inputStyle(customStyles)} />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: "1" }}>
          <label htmlFor="latitud" style={labelStyle(customStyles)}>Latitud:</label>
          <input type="text" id="latitud" value={latitud} readOnly style={inputStyle(customStyles)} />
        </div>
        <div style={{ flex: "1" }}>
          <label htmlFor="longitud" style={labelStyle(customStyles)}>Longitud:</label>
          <input type="text" id="longitud" value={longitud} readOnly style={inputStyle(customStyles)} />
        </div>
        <div style={{ flex: "1" }}>
          <label htmlFor="direccion" style={labelStyle(customStyles)}>Dirección:</label>
          <input type="text" id="direccion" value={direccion} readOnly style={inputStyle(customStyles)} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "12px",
          border: `1px solid ${customStyles.accent}`,
          marginBottom: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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
            padding: "14px 35px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#50102a")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = customStyles.accent)}
        >
           Guardar Registro
        </button>
      </div>
    </div>
  );
}

const labelStyle = (customStyles) => ({
  display: "block",
  fontWeight: "500",
  marginBottom: "4px",
  color: customStyles.primary,
  fontSize: "14px",
});

const inputStyle = (customStyles) => ({
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: `1px solid ${customStyles.accent}`,
  backgroundColor: "#f1f1f1",
  color: "#333",
  fontSize: "15px",
  boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
});
