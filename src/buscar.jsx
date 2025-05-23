import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '700px',
  borderRadius: '10px',
  marginBottom: '20px',
};

const center = {
  lat: 19.432608,
  lng: -99.133209,
};

const Buscar = () => {
  const [ubicacion, setUbicacion] = useState(center);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [botonPresionado, setBotonPresionado] = useState(false);

  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M', // Asegúrate de que esta clave tenga habilitada la API de Maps
  });

  const manejarClickBuscar = () => {
    if (!ubicacion) {
      alert('Por favor, selecciona una ubicación en el mapa');
      return;
    }
    console.log('Ubicación seleccionada:', ubicacion);
    navigate('/registrar_denuncia');
  };

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.contenedorBusqueda}>
        <label style={estilos.etiquetaBusqueda}>Buscar</label>
        <input
          type="text"
          placeholder="Escribe aquí..."
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          style={estilos.entradaBusqueda}
        />
      </div>

      {!isLoaded ? (
        <div style={{ textAlign: 'center', fontSize: '18px' }}>Cargando mapa...</div>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ubicacion}
          zoom={13}
          onClick={(e) =>
            setUbicacion({ lat: e.latLng.lat(), lng: e.latLng.lng() })
          }
        >
          <Marker position={ubicacion} />
        </GoogleMap>
      )}

      <div style={estilos.footer}>
        <button
          aria-pressed={botonPresionado}
          style={{
            ...estilos.botonBuscar,
            backgroundColor: botonPresionado ? '#4b0e23' : '#621132',
          }}
          onMouseDown={() => setBotonPresionado(true)}
          onMouseUp={() => setBotonPresionado(false)}
          onMouseLeave={() => setBotonPresionado(false)}
          onClick={manejarClickBuscar}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f2f2f2',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contenedorBusqueda: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  etiquetaBusqueda: {
    marginRight: '10px',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  entradaBusqueda: {
    flexGrow: 1,
    padding: '14px 12px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  footer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  botonBuscar: {
    backgroundColor: '#621132',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
};

export default Buscar;
