import React, { Component } from 'react';

class TablaRoboVehiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '',
      fecha: '',
      direccionIncidente: '',
      descripcion: '',
      descripcionAgresores: '',
      descripcionVehiculo: '',
      arma: 'no',
      objetosPerdidos: '',
      testigos: 'no',
      nomDenunciante: '',
      edadDenunciante: '',
      telDenunciante: '',

      errors: {},
      formValid: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      { [name]: value },
      () => this.validateField(name, value)
    );
  };

  validateField = (fieldName, value) => {
    let errors = { ...this.state.errors };

    switch (fieldName) {
      case 'hora':
        errors.hora = value ? '' : 'La hora es requerida.';
        break;
      case 'fecha':
        errors.fecha = value ? '' : 'La fecha es requerida.';
        break;
      case 'direccionIncidente':
        errors.direccionIncidente = value ? '' : 'La dirección del incidente es requerida.';
        break;
      case 'descripcion':
        errors.descripcion = value ? '' : 'La descripción de los hechos es requerida.';
        break;
      case 'descripcionAgresores':
        errors.descripcionAgresores = value ? '' : 'La descripción de los agresores es requerida.';
        break;
      case 'descripcionVehiculo':
        errors.descripcionVehiculo = value ? '' : 'La descripción del vehículo es requerida.';
        break;
      case 'nomDenunciante':
        errors.nomDenunciante = value.trim() ? '' : 'El nombre del denunciante es requerido.';
        break;
      case 'edadDenunciante':
        errors.edadDenunciante = value && Number(value) > 0 ? '' : 'La edad debe ser mayor a 0.';
        break;
      case 'telDenunciante':
        // Validar teléfono simple: longitud mínima 7 caracteres numéricos
        errors.telDenunciante = /^\d{7,}$/.test(value) ? '' : 'El teléfono debe contener al menos 7 dígitos.';
        break;
      default:
        break;
    }

    this.setState({ errors }, this.validateForm);
  };

  validateForm = () => {
    const {
      hora, fecha, direccionIncidente,
      descripcion, descripcionAgresores, descripcionVehiculo,
      nomDenunciante, edadDenunciante, telDenunciante,
      errors
    } = this.state;

    // Validar que no haya errores y todos los campos requeridos estén llenos
    const formValid = 
      hora && !errors.hora &&
      fecha && !errors.fecha &&
      direccionIncidente && !errors.direccionIncidente &&
      descripcion && !errors.descripcion &&
      descripcionAgresores && !errors.descripcionAgresores &&
      descripcionVehiculo && !errors.descripcionVehiculo &&
      nomDenunciante && !errors.nomDenunciante &&
      edadDenunciante && !errors.edadDenunciante &&
      telDenunciante && !errors.telDenunciante;

    this.setState({ formValid });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formValid) {
      alert('Reporte enviado correctamente');
      console.log(this.state);
      // Aquí puedes agregar la lógica para enviar los datos a un backend o API
    } else {
      alert('Por favor, completa correctamente todos los campos requeridos.');
    }
  };

  render() {
    const {
      hora, fecha, direccionIncidente,
      descripcion, descripcionAgresores, descripcionVehiculo,
      arma, objetosPerdidos, testigos,
      nomDenunciante, edadDenunciante, telDenunciante,
      errors, formValid,
    } = this.state;

    return (
      <>
        <style>{`
          * {
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
          }
          form {
            width: 98%;
            max-width: 1400px;
            margin: 40px auto;
            background-color: #fff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }
          h2 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2rem;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
          }
          label {
            font-weight: bold;
            margin-bottom: 6px;
            color: #333;
          }
          input, select, textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 6px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1rem;
          }
          input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 6px rgba(52,152,219,0.5);
          }
          .errorMsg {
            color: red;
            font-size: 0.9rem;
            margin-bottom: 10px;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .inputGroup {
            flex: 1 1 30%;
            display: flex;
            flex-direction: column;
          }
          textarea {
            resize: vertical;
            min-height: 80px;
          }
          button {
            width: 100%;
            padding: 16px;
            font-size: 1.2rem;
            font-weight: bold;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 10px;
          }
          button:disabled {
            background-color: #95a5a6;
            cursor: not-allowed;
          }
          button:hover:enabled {
            background-color: #2980b9;
          }
          @media (max-width: 768px) {
            .inputGroup {
              flex: 1 1 100%;
            }
          }
        `}</style>

        <form onSubmit={this.handleSubmit}>
          <h2>Formulario de Robo Vehículos</h2>

          <div className="row">
            <div className="inputGroup">
              <label htmlFor="hora">Hora</label>
              <input type="time" id="hora" name="hora" value={hora} onChange={this.handleChange} required />
              {errors.hora && <div className="errorMsg">{errors.hora}</div>}
            </div>
            <div className="inputGroup">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" id="fecha" name="fecha" value={fecha} onChange={this.handleChange} required />
              {errors.fecha && <div className="errorMsg">{errors.fecha}</div>}
            </div>
          </div>

          <label htmlFor="direccionIncidente">Dirección del Incidente</label>
          <textarea
            id="direccionIncidente"
            name="direccionIncidente"
            placeholder="Dirección exacta del incidente"
            value={direccionIncidente}
            onChange={this.handleChange}
            required
          />
          {errors.direccionIncidente && <div className="errorMsg">{errors.direccionIncidente}</div>}

          <label htmlFor="descripcion">Descripción de los Hechos</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Detalles del incidente"
            value={descripcion}
            onChange={this.handleChange}
            required
          />
          {errors.descripcion && <div className="errorMsg">{errors.descripcion}</div>}

          <label htmlFor="descripcionAgresores">Descripción de los Agresores</label>
          <textarea
            id="descripcionAgresores"
            name="descripcionAgresores"
            placeholder="Ropa, estatura, edad, etc."
            value={descripcionAgresores}
            onChange={this.handleChange}
            required
          />
          {errors.descripcionAgresores && <div className="errorMsg">{errors.descripcionAgresores}</div>}

          <label htmlFor="descripcionVehiculo">Descripción del Vehículo</label>
          <textarea
            id="descripcionVehiculo"
            name="descripcionVehiculo"
            placeholder="Marca, modelo, placas, etc."
            value={descripcionVehiculo}
            onChange={this.handleChange}
            required
          />
          {errors.descripcionVehiculo && <div className="errorMsg">{errors.descripcionVehiculo}</div>}

          <div className="row">
            <div className="inputGroup">
              <label htmlFor="arma">¿Se utilizó arma?</label>
              <select id="arma" name="arma" value={arma} onChange={this.handleChange}>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            <div className="inputGroup">
              <label htmlFor="testigos">¿Hay testigos?</label>
              <select id="testigos" name="testigos" value={testigos} onChange={this.handleChange}>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
          </div>

          <label htmlFor="objetosPerdidos">Objetos Perdidos</label>
          <textarea
            id="objetosPerdidos"
            name="objetosPerdidos"
            placeholder="Enumera los objetos perdidos"
            value={objetosPerdidos}
            onChange={this.handleChange}
          />

          <div className="row">
            <div className="inputGroup">
              <label htmlFor="nomDenunciante">Nombre del Denunciante</label>
              <input
                type="text"
                id="nomDenunciante"
                name="nomDenunciante"
                placeholder="Nombre completo"
                value={nomDenunciante}
                onChange={this.handleChange}
                required
              />
              {errors.nomDenunciante && <div className="errorMsg">{errors.nomDenunciante}</div>}
            </div>
            <div className="inputGroup">
              <label htmlFor="edadDenunciante">Edad</label>
              <input
                type="number"
                min="0"
                id="edadDenunciante"
                name="edadDenunciante"
                placeholder="Edad"
                value={edadDenunciante}
                onChange={this.handleChange}
                required
              />
              {errors.edadDenunciante && <div className="errorMsg">{errors.edadDenunciante}</div>}
            </div>
            <div className="inputGroup">
              <label htmlFor="telDenunciante">Teléfono</label>
              <input
                type="tel"
                id="telDenunciante"
                name="telDenunciante"
                placeholder="Número de contacto"
                value={telDenunciante}
                onChange={this.handleChange}
                required
              />
              {errors.telDenunciante && <div className="errorMsg">{errors.telDenunciante}</div>}
            </div>
          </div>

          <button type="submit" disabled={!formValid}>Enviar Reporte</button>
        </form>
      </>
    );
  }
}

export default TablaRoboVehiculo;
