import React, { useState, useEffect } from "react";
import { FaUser, FaClipboardList, FaFileAlt, FaSearch, FaClipboardCheck, FaSearchPlus, FaTachometerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Principal = () => {
  const navigate = useNavigate();

  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const [isBuscarPressed, setIsBuscarPressed] = useState(false);
  const [isRegistrarDenunciaPressed, setIsRegistrarDenunciaPressed] = useState(false);
  const [isConsultaFolioPressed, setIsConsultaFolioPressed] = useState(false);
  const [isConsultaIncidentePressed, setIsConsultaIncidentePressed] = useState(false);
  const [isDashboardPressed, setIsDashboardPressed] = useState(false);
  const [isProfilePressed, setIsProfilePressed] = useState(false);

  const usuario = {
    nombre: "",
    cargo: "",
    foto: "",
  };

  const handleProfileClick = () => {
    console.log("Acción para mostrar el perfil del usuario.");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menu-lateral");
      if (menuAbierto && menu && !menu.contains(event.target) && !event.target.closest("button")) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuAbierto]);

  return (
    <div>
      {/* Barra superior */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 20px", backgroundColor: "#621132", color: "white" }}>
        <button
          onClick={toggleMenu}
          style={{ background: "none", border: "none", color: "white", fontSize: "28px", cursor: "pointer", marginRight: "10px" }}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <h2 style={{ margin: 0, fontSize: "18px", textAlign: "center", flex: 1 }}>
          Centro de Atención a Denuncias para Instituciones de Seguridad Pública
        </h2>
      </div>

      {/* Fondo oscuro */}
      {menuAbierto && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 999 }} />
      )}

      {/* Menú lateral */}
      <div
        id="menu-lateral"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          backgroundColor: "#4E232E",
          boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
          padding: "20px",
          zIndex: 1000,
          transform: menuAbierto ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ backgroundColor: "#e6d3b2", color: "white", padding: "15px 20px", textAlign: "center", borderRadius: "8px" }}>
            <h3 style={{ margin: 0 }}>CAD</h3>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>Centro de Atención a Denuncias</p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <div onClick={() => navigate('/buscar')} onMouseDown={() => setIsBuscarPressed(true)} onMouseUp={() => setIsBuscarPressed(false)} onMouseLeave={() => setIsBuscarPressed(false)}
              style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white", boxShadow: isBuscarPressed ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "none", transition: "box-shadow 0.1s ease-in-out", cursor: "pointer" }}>
              <FaSearch style={{ fontSize: "24px", marginRight: "15px" }} />
              <p style={{ fontSize: "16px", margin: 0 }}>Buscar</p>
            </div>

            <div onClick={() => navigate('/consulta_folio')} onMouseDown={() => setIsConsultaFolioPressed(true)} onMouseUp={() => setIsConsultaFolioPressed(false)} onMouseLeave={() => setIsConsultaFolioPressed(false)}
              style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white", boxShadow: isConsultaFolioPressed ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "none", transition: "box-shadow 0.1s ease-in-out", cursor: "pointer" }}>
              <FaClipboardCheck style={{ fontSize: "24px", marginRight: "15px" }} />
              <p style={{ fontSize: "16px", margin: 0 }}>Consulta folio</p>
            </div>

            <div onClick={() => navigate('/consulta_incidente')} onMouseDown={() => setIsConsultaIncidentePressed(true)} onMouseUp={() => setIsConsultaIncidentePressed(false)} onMouseLeave={() => setIsConsultaIncidentePressed(false)}
              style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white", boxShadow: isConsultaIncidentePressed ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "none", transition: "box-shadow 0.1s ease-in-out", cursor: "pointer" }}>
              <FaSearchPlus style={{ fontSize: "24px", marginRight: "15px" }} />
              <p style={{ fontSize: "16px", margin: 0 }}>Consulta incidente</p>
            </div>

            <div onClick={() => navigate('/dashboard')} onMouseDown={() => setIsDashboardPressed(true)} onMouseUp={() => setIsDashboardPressed(false)} onMouseLeave={() => setIsDashboardPressed(false)}
              style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white", boxShadow: isDashboardPressed ? "0px 5px 10px rgba(0, 0, 0, 0.3)" : "none", transition: "box-shadow 0.1s ease-in-out", cursor: "pointer" }}>
              <FaTachometerAlt style={{ fontSize: "24px", marginRight: "15px" }} />
              <p style={{ fontSize: "16px", margin: 0 }}>Dashboard</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", padding: "10px 20px", textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={handleProfileClick}
            onMouseDown={() => setIsProfilePressed(true)}
            onMouseUp={() => setIsProfilePressed(false)}
            onMouseLeave={() => setIsProfilePressed(false)}
            style={{
              backgroundColor: "#621132",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#eee",
                backgroundImage: usuario.foto ? `url(${usuario.foto})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "10px",
              }}
            />
            <div style={{ flex: 1, textAlign: "left" }}>
              <p style={{ margin: 0, fontSize: "14px" }}>{usuario.nombre || "Nombre del Usuario"}</p>
              <p style={{ margin: 0, fontSize: "12px" }}>{usuario.cargo || "Cargo"}</p>
            </div>
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div
        style={{
          marginLeft: menuAbierto ? "250px" : "0",
          padding: "40px",
          transition: "margin-left 0.3s ease-in-out",
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img src="/assets/logoCdmx.png" alt="Logo CDMX" />
      </div>
    </div>
  );
};

export default Principal;
