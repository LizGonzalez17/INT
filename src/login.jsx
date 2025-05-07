import React from "react";

const styles = {
  body: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  container: {
    display: "flex",
    height: "80vh",
    width: "60vw",
    margin: "auto",
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#1e3d58",
    color: "white",
    padding: "40px",
    position: "relative",
  },
  logoImg: {
    position: "absolute",
    top: "15px",
    left: "15px",
    width: "180px",
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
    opacity: 0.5,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "80vh",
    width: "60vw",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    maxWidth: "500px",
    textAlign: "center",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 1.1)",
    borderRadius: "10px",
  },
  userIcon: {
    width: "80px",
    height: "80px",
    marginTop: "40px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1.1rem",
  },
  button: {
    width: "70%",
    padding: "11px",
    backgroundColor: "#621132",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  },
};

const Login = () => {
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
              src="/assets/policia.png"
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
                src="/assets/login.png"
                alt="Login Icon"
                style={styles.userIcon}
              />
            </div>
            <input type="text" placeholder="Usuario" style={styles.input} />
            <input type="password" placeholder="Contraseña" style={styles.input} />
            <button
              style={styles.button}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
