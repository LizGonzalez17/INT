import React, { useState, useEffect } from "react";
import { FaUser, FaClipboardList, FaFileAlt } from "react-icons/fa";

const Usuario = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menu-lateral");
      if (
        menuAbierto &&
        menu &&
        !menu.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuAbierto]);

  return (
    <div>
      {/* Barra superior */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 20px",
          backgroundColor: "#621132",
          color: "white",
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          ☰
        </button>
        <h2 style={{ margin: 0, fontSize: "18px", textAlign: "center", flex: 1 }}>
          Centro de Atención a Denuncias para Instituciones de Seguridad Pública
        </h2>
      </div>

      {/* Fondo oscuro cuando el menú está abierto */}
      {menuAbierto && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 999,
          }}
        ></div>
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
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            fontSize: "28px",
            position: "absolute",
            top: 10,
            right: 20,
            cursor: "pointer",
            color: "white",
          }}
        ></button>

        {/* Encabezado del menú */}
        <div
          style={{
            backgroundColor: "#e6d3b2",
            color: "white",
            padding: "15px 20px",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ margin: 0 }}>CAD</h3>
          <p style={{ fontSize: "14px", marginTop: "5px" }}>
            Centro de Atención a Denuncias
          </p>
        </div>

        {/* Opciones del menú */}
        <div style={{ marginTop: "30px" }}>
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white" }}>
            <FaUser style={{ fontSize: "24px", marginRight: "15px" }} />
            <p style={{ fontSize: "16px", margin: 0 }}>Usuario</p>
          </div>

          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white" }}>
            <FaClipboardList style={{ fontSize: "24px", marginRight: "15px" }} />
            <p style={{ fontSize: "16px", margin: 0 }}>Registrar denuncia</p>
          </div>

          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", color: "white" }}>
            <FaFileAlt style={{ fontSize: "24px", marginRight: "15px" }} />
            <p style={{ fontSize: "16px", margin: 0 }}>Reportes</p>
          </div>
        </div>
      </div>

      {/* Contenido principal con imagen */}
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
        {/* <img src="/assets/gente.jpg" alt="Logo gente CDMX" /> */}

      </div>
    </div>
  );
};

export default Usuario;
