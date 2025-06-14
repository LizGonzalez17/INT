import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "./usuarios.json"; // Asegúrate de que el JSON esté en src/
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleLogin = () => {
    const existe = usuarios.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (existe) {
      setMensaje('');
      navigate('/principal', {
        state: {
          nombre: existe.nombre,
          cargo: existe.permisos || '',
          foto: existe.foto || ''
        }
      });
    } else {
      setMensaje('Acceso incorrecto');
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Columna izquierda */}
        <div style={styles.left}>
          <div className="logo">
            <img
              src="/assets/logoCdmx.png"
              alt="Logo CDMX"
              style={styles.logoImg}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
            />
          </div>
          <div className="background-photo">
            <img
              src="/assets/patrulla2.jpg"
              alt="Foto de fondo"
              style={styles.backgroundImg}
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div style={styles.right}>
          <div style={styles.form}>
            <div className="user-icon">
              <img
                src="/assets/policiafederal.png"
                alt="Login Icon"
                style={styles.userIcon}
              />
            </div>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={styles.input}
            />
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={mostrarPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...styles.input, paddingRight: "40px" }}
              />
              <span
                onClick={() => setMostrarPassword(!mostrarPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#666",
                  userSelect: "none",
                }}
              >
                {mostrarPassword ? (
                  <MdOutlineVisibilityOff size={24} />
                ) : (
                  <MdOutlineVisibility size={24} />
                )}
              </span>
            </div>
            <button
              style={styles.button}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={handleLogin}
            >
              Entrar
            </button>
            {mensaje && <p style={{ color: "red", marginTop: "15px" }}>{mensaje}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f0f0",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  left: {
    flex: 4,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    //background: "#F4F7F7FF",
    overflow: "hidden",
  },
  logoImg: {
    position: "absolute",
    top: "15px",
    left: "15px",
    width: "160px",
    zIndex: 10,
    padding: "6px",
    border: "2px solid #bbb",
    borderRadius: "10px",
    backgroundColor: "rgba(240, 240, 240, 0.6)",
    backdropFilter: "blur(2px)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  backgroundImg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    
  },
  right: {
    flex: 1.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  userIcon: {
    width: "120px",
    height: "120px",
    marginTop: "30px",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "14px",
    margin: "14px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1.1rem",
  },
  button: {
    width: "70%",
    padding: "13px",
    backgroundColor: "#621132",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  },
};

export default Login;
