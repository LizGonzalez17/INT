import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaClipboardList,
  FaFileAlt,
  FaClipboardCheck,
  FaTachometerAlt,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const categorias = [
  {
    nombre: "Robos",
    subitems: ["asaltos", "robo de vehículo"],
  },
  {
    nombre: "Portación de armas",
    subitems: ["portación_de_armas", "denotación_de_armas", "tráfico_de_armas"],
  },
  {
    nombre: "Secuestros",
    subitems: [
      "secuestro",
      "intento_de_secuestro",
      "secuestro_virtual",
      "tráfico_de_organos",
      "trata_de_personas",
      "personas_desaparecidas",
    ],
  },
  {
    nombre: "Extorsiones",
    subitems: ["victimas de extorsión"],
  },
  {
    nombre: "Drogas",
    subitems: ["tráfico_de_drogas", "venta_de_droga", "siembra_de_droga"],
  },
  {
    nombre: "Fraude",
    subitems: ["fraude_electrónico", "lavado_de_dinero"],
  },
  {
    nombre: "Ataques",
    subitems: [
      "ataques_explosivos",
      "incendios",
      "explosiones",
      "fuga_gas",
      "sustancias_tóxicas",
    ],
  },
  {
    nombre: "Homicidios",
    subitems: ["homocidio", "intento_de_homicidio", "suicidio"],
  },
  {
    nombre: "Fuga de presos",
    subitems: ["fuga_de_presos"],
  },
  {
    nombre: "Violencia",
    subitems: [
      "amenazas",
      "maltrato_infantil",
      "volencia_familiar",
      "violencia_contra_mujeres",
      "violencia_de_generó",
      "acoso_sexual",
      "acoso_callejero",
      "explotación_laboral",
      "prostitución",
    ],
  },
  {
    nombre: "Emergencias",
    subitems: ["atención_médica", "atención_psicológica", "atención_vial_heridos"],
  },
  {
    nombre: "Desastres naturales",
    subitems: [
      "terremotos_huracanes",
      "deslaves",
      "inundaciones",
      "tormentas_eléctricas",
      "accidentes_industriales",
      "quema_de_basura_ilegal",
    ],
  },
  {
    nombre: "Maltrato animal",
    subitems: ["Maltrato_animal", "venta_especies_en_extinción"],
  },
  {
    nombre: "Servicios públicos",
    subitems: ["semaforos_sin_funcionar", "fallas_de_alumbrado"],
  },
  {
    nombre: "Delitos cibernéticos",
    subitems: ["robo_identidad", "ciberacoso", "hackeo"],
  },
];

const Principal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const [isConsultaFolioPressed, setIsConsultaFolioPressed] = useState(false);
  const [isDashboardPressed, setIsDashboardPressed] = useState(false);

  const [submenuAbiertos, setSubmenuAbiertos] = useState(
    Array(categorias.length).fill(false)
  );

  const usuario = {
    nombre: location.state?.nombre || "",
    cargo: location.state?.cargo || "",
    foto: location.state?.foto || "",
  };

  const handleProfileClick = () => {
    console.log("Acción para mostrar el perfil del usuario.");
  };

  const toggleSubmenu = (index) => {
    setSubmenuAbiertos((prev) =>
      prev.map((abierto, i) => (i === index ? !abierto : abierto))
    );
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
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuAbierto]);

  return (
    <>
      <style>{`
        #menu-lateral {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        #menu-lateral::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div>
        {/* Encabezado */}
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
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <h2 style={{ margin: 0, fontSize: "18px", textAlign: "center", flex: 1 }}>
            Centro de Atención a Denuncias para Instituciones de Seguridad Pública
          </h2>
        </div>

        {/* Imagen central */}
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/logoCdmx.png"
            alt="Logo"
            style={{
              width: "900px",
              maxWidth: "95%",
              height: "auto",
            }}
          />
        </div>

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
          />
        )}

        <div
          id="menu-lateral"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "250px",
            height: "100vh",
            backgroundColor: "#4E232E",
            padding: "20px",
            zIndex: 1000,
            transform: menuAbierto ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
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

            <div style={{ marginTop: "30px" }}>
              <div
                onClick={() => navigate("/consulta_folio")}
                onMouseDown={() => setIsConsultaFolioPressed(true)}
                onMouseUp={() => setIsConsultaFolioPressed(false)}
                onMouseLeave={() => setIsConsultaFolioPressed(false)}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  boxShadow: isConsultaFolioPressed
                    ? "0px 5px 10px rgba(0, 0, 0, 0.3)"
                    : "none",
                  transition: "box-shadow 0.1s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <FaClipboardList style={{ fontSize: "24px", marginRight: "15px" }} />
                <p style={{ fontSize: "16px", margin: 0 }}>Consulta folio</p>
              </div>

              <div
                onClick={() => navigate("/consulta_incidente")}
                onMouseDown={() => setIsConsultaFolioPressed(true)}
                onMouseUp={() => setIsConsultaFolioPressed(false)}
                onMouseLeave={() => setIsConsultaFolioPressed(false)}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  boxShadow: isConsultaFolioPressed
                    ? "0px 5px 10px rgba(0, 0, 0, 0.3)"
                    : "none",
                  transition: "box-shadow 0.1s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <FaClipboardCheck style={{ fontSize: "24px", marginRight: "15px" }} />
                <p style={{ fontSize: "16px", margin: 0 }}>Consultas</p>
              </div>

              <div
                onClick={() => navigate("/dashboard")}
                onMouseDown={() => setIsDashboardPressed(true)}
                onMouseUp={() => setIsDashboardPressed(false)}
                onMouseLeave={() => setIsDashboardPressed(false)}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  boxShadow: isDashboardPressed
                    ? "0px 5px 10px rgba(0, 0, 0, 0.3)"
                    : "none",
                  transition: "box-shadow 0.1s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <FaTachometerAlt style={{ fontSize: "24px", marginRight: "15px" }} />
                <p style={{ fontSize: "16px", margin: 0 }}>Dashboard</p>
              </div>
            </div>

            {/* Subcategorías */}
            <div
              style={{
                marginTop: "auto",
                marginBottom: "20px",
                overflowY: "scroll",
                maxHeight: "calc(100vh - 300px)",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="hide-scrollbar"
            >
              {categorias.map((cat, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    style={{
                      backgroundColor: "#440F1AFF",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      width: "100%",
                      cursor: "pointer",
                      textAlign: "left",
                      fontWeight: "bold",
                      borderRadius: "5px",
                    }}
                    aria-expanded={submenuAbiertos[index]}
                    aria-controls={`submenu-${index}`}
                  >
                    {cat.nombre}
                  </button>
                  {submenuAbiertos[index] && (
                    <div
                      id={`submenu-${index}`}
                      style={{ paddingLeft: "15px", marginTop: "8px" }}
                    >
                      {cat.subitems.map((sub, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() =>
                            navigate("/buscar", { state: { categoria: sub } })
                          }
                          style={{
                            marginBottom: "10px",
                            backgroundColor: "#CDBDA1FF",
                            color: "white",
                            border: "none",
                            padding: "8px 10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          {sub
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {/* Perfil */}
            <div
              onClick={handleProfileClick}
              style={{
                marginTop: "auto",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                paddingTop: "20px",
                borderTop: "1px solid #777",
              }}
            >
              {usuario.foto ? (
                <img
                  src={usuario.foto}
                  alt="Perfil"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <FaUser
                  style={{ fontSize: "45px", marginRight: "10px", color: "white" }}
                />
              )}
              <div style={{ color: "white" }}>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "4px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "150px",
                  }}
                >
                  {usuario.nombre}
                </p>
                <p style={{ fontSize: "12px", margin: 0 }}>{usuario.cargo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
