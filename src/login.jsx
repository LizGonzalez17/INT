import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "./usuarios.json";
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
      {/* Fondo */}
      <img
        src="/assets/patrulla2.jpg"
        alt="Fondo patrulla"
        style={styles.background}
      />

      {/* Logo CDMX (más grande: 220px) */}
      <img
        src="/assets/logoCdmx.png"
        alt="Logo CDMX"
        style={styles.logo}
      />

      {/* Formulario */}
      <div style={styles.card}>
        <img
          src="/assets/policiafederal.png"
          alt="Usuario"
          style={styles.userIcon}
        />

        <h2 style={styles.title}>Inicio de Sesión</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={styles.input}
        />

        <div style={styles.passwordContainer}>
          <input
            type={mostrarPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input, paddingRight: "40px" }}
          />
          <span
            onClick={() => setMostrarPassword(!mostrarPassword)}
            style={styles.eyeIcon}
          >
            {mostrarPassword ? (
              <MdOutlineVisibilityOff size={22} />
            ) : (
              <MdOutlineVisibility size={22} />
            )}
          </span>
        </div>

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Entrar
        </button>

        {mensaje && <p style={styles.error}>{mensaje}</p>}
      </div>
    </div>
  );
};

const styles = {
  body: {
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative",
    backgroundColor: "#000",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    opacity: 0.6,
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "220px", // ← AUMENTADO a 220px
    zIndex: 3,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  card: {
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
    padding: "40px",
    borderRadius: "15px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
  },
  userIcon: {
    width: "100px",
    marginBottom: "15px",
    borderRadius: "50%",
    backgroundColor: "white",
    padding: "5px",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#000",
    outline: "none",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    top: "50%",
    right: "12px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#333",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#621132",
    border: "none",
    color: "#fff",
    fontSize: "1.1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.1s ease",
  },
  error: {
    marginTop: "15px",
    color: "#ffd2d2",
    fontWeight: "bold",
  },
};

export default Login;
