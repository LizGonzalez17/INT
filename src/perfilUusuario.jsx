import React from 'react';

const perfilUsuario = () => {
  const usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    foto: '',
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: 30,
      border: '1px solid #ddd',
      borderRadius: 12,
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      backgroundColor: '#621132',
      boxSizing: 'border-box',
      color: 'white'  // <-- letras blancas
    }}>
      <div style={{
        width: 150,
        height: 150,
        borderRadius: '50%',
        backgroundColor: '#eee',
        backgroundImage: usuario.foto ? `url(${usuario.foto})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
      }} />

      <div style={{ marginLeft: 30, width: '100%' }}>
        <h2 style={{ marginBottom: 10 }}>{usuario.nombre || 'Nombre del Usuario'}</h2>
        
        <div style={{ marginBottom: 10 }}>
          <p><strong>Correo:</strong> {usuario.correo || 'correo@ejemplo.com'}</p>
          <p><strong>Teléfono:</strong> {usuario.telefono || '---'}</p>
          
        </div>
      </div>
    </div>
  );
};

export default perfilUsuario;
