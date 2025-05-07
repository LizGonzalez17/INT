import React, { useState } from "react";

const Denuncia = () => {
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  const estiloCuadro = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '220px',
  };

  const imagenEstilo = {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  };

  const botonEstilo = (isPressed) => ({
    backgroundColor: '#621132',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.1s ease, box-shadow 0.1s ease',
    transform: isPressed ? 'scale(0.95)' : 'scale(1)',  // Efecto de presión
    boxShadow: isPressed ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
  });

  // Manejadores de evento para presionar y soltar los botones
  const handleMouseDown1 = () => setIsPressed1(true);
  const handleMouseUp1 = () => setIsPressed1(false);
  const handleMouseLeave1 = () => setIsPressed1(false);

  const handleMouseDown2 = () => setIsPressed2(true);
  const handleMouseUp2 = () => setIsPressed2(false);
  const handleMouseLeave2 = () => setIsPressed2(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '60px',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      {/* Primer cuadro */}
      <div className="denuncia" style={estiloCuadro}>
        <h3 style={{ color: '#9D2449', marginBottom: '10px' }}>Denuncia digital</h3>
        <img
          src="/assets/anonimo.jpg"
          alt="Denuncia anónima"
          style={imagenEstilo}
        />
        <p style={{ fontWeight: 'bold', color: '#D4C19C', marginBottom: '10px' }}>
          Denuncia Anónima
        </p>
        <button
          style={botonEstilo(isPressed1)}
          onMouseDown={handleMouseDown1}
          onMouseUp={handleMouseUp1}
          onMouseLeave={handleMouseLeave1}
        >
          Iniciar trámite
        </button>
      </div>

      {/* Segundo cuadro */}
      <div className="denuncia" style={estiloCuadro}>
        <h3 style={{ color: '#9D2449', marginBottom: '10px' }}>Denuncia digital</h3>
        <img
          src="/assets/denuncia.jpg"
          alt="Denuncia ciudadana"
          style={imagenEstilo}
        />
        <p style={{ fontWeight: 'bold', color: '#D4C19C', marginBottom: '10px' }}>
          Denuncia Ciudadana
      { /*Denuncia Identificada */}
        </p>
        <button
          style={botonEstilo(isPressed2)}
          onMouseDown={handleMouseDown2}
          onMouseUp={handleMouseUp2}
          onMouseLeave={handleMouseLeave2}
        >
          Iniciar trámite
        </button>
      </div>
    </div>
  );
};

export default Denuncia;
