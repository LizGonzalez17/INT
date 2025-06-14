import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate, useLocation } from 'react-router-dom';

const center = {
  lat: 19.432608,
  lng: -99.133209,
};

const Buscar = () => {
  const [ubicacion, setUbicacion] = useState(center);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [botonPresionado, setBotonPresionado] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const folio = location.state?.folio ?? 'ABC123'; // folio dinámico desde pantalla anterior

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCUqkanrBAfXYVORLMLgaV8hz_wV83Ar6M',
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (textoBusqueda.trim() !== '') {
        buscarDireccion(textoBusqueda);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [textoBusqueda]);

  const obtenerDireccion = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setTextoBusqueda(results[0].formatted_address);
        } else {
          setTextoBusqueda('Dirección no encontrada');
        }
      } else {
        console.error('Geocoder falló por: ' + status);
      }
    });
  };

  const buscarDireccion = (direccion) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: direccion }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const nuevaUbicacion = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        };
        setUbicacion(nuevaUbicacion);
      } else {
        console.error('No se encontró la dirección:', status);
      }
    });
  };

  const manejarClickBuscar = () => {
    if (!ubicacion || !textoBusqueda || textoBusqueda === 'Dirección no encontrada') {
      alert('Selecciona una ubicación válida y asegúrate de que la dirección sea válida.');
      return;
    }

    console.log('Ubicación seleccionada:', ubicacion);

    navigate('/registrar_denuncia', {
      state: {
        folio,
        latitud: ubicacion.lat,
        longitud: ubicacion.lng,
        direccion: textoBusqueda,
      },
    });
  };

  return (
    <div style={estilos.contenedorPantalla}>
      {!isLoaded ? (
        <div style={estilos.cargando}>Cargando mapa...</div>
      ) : (
        <GoogleMap
          mapContainerStyle={estilos.mapaPantalla}
          center={ubicacion}
          zoom={13}
          onClick={(e) => {
            const nuevaUbicacion = {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            };
            setUbicacion(nuevaUbicacion);
            obtenerDireccion(nuevaUbicacion.lat, nuevaUbicacion.lng);
          }}
        >
          {ubicacion && (
            <Marker
              position={ubicacion}
              draggable={true}
              onDragEnd={(e) => {
                const nuevaUbicacion = {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                };
                setUbicacion(nuevaUbicacion);
                obtenerDireccion(nuevaUbicacion.lat, nuevaUbicacion.lng);
              }}
            />
          )}
        </GoogleMap>
      )}

      <div style={estilos.uiFlotante}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Buscar ubicación..."
            value={textoBusqueda}
            onChange={(e) => setTextoBusqueda(e.target.value)}
            style={estilos.input}
          />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
            Dirección actual: {textoBusqueda}
          </p>
        </div>

        <button
          aria-pressed={botonPresionado}
          style={{
            ...estilos.boton,
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
  contenedorPantalla: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  mapaPantalla: {
    width: '100%',
    height: '100%',
  },
  cargando: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: '#444',
  },
  uiFlotante: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '16px 24px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    display: 'flex',
    gap: '12px',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    width: '300px',
  },
  boton: {
    padding: '12px 24px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Buscar;
