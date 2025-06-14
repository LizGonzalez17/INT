import React, { Component } from 'react';

class TablaAsalto extends Component {
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
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Reporte enviado correctamente');
    console.log(this.state);
  };

  render() {
    const {
      hora, fecha, direccionIncidente,
      descripcion, descripcionAgresores, descripcionVehiculo,
      arma, objetosPerdidos, testigos,
      nomDenunciante, edadDenunciante, telDenunciante,
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
            margin-bottom: 20px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1rem;
          }
          input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 6px rgba(52,152,219,0.5);
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
          }
          button:hover {
            background-color: #2980b9;
          }
          @media (max-width: 768px) {
            .inputGroup {
              flex: 1 1 100%;
            }
          }
        `}</style>

        <form onSubmit={this.handleSubmit}>
          <h2>Formulario de Asalto</h2>

          <div className="row">
            <div className="inputGroup">
              <label htmlFor="hora">Hora</label>
              <input type="time" id="hora" name="hora" value={hora} onChange={this.handleChange} required />
            </div>
            <div className="inputGroup">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" id="fecha" name="fecha" value={fecha} onChange={this.handleChange} required />
            </div>
          </div>


          <label htmlFor="descripcion">Descripción de los Hechos</label>
          <textarea id="descripcion" name="descripcion" placeholder="Detalles del incidente" value={descripcion} onChange={this.handleChange} required />

          <label htmlFor="descripcionAgresores">Descripción de los Agresores</label>
          <textarea id="descripcionAgresores" name="descripcionAgresores" placeholder="Ropa, estatura, edad, etc." value={descripcionAgresores} onChange={this.handleChange} required />

          <label htmlFor="descripcionVehiculo">Descripción del Asalto</label>
          <textarea id="descripcionVehiculo" name="descripcionVehiculo" placeholder="Marca, modelo, placas, etc." value={descripcionVehiculo} onChange={this.handleChange} required />

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


          <div className="row">
            <div className="inputGroup">
              <label htmlFor="nomDenunciante">Nombre del Denunciante</label>
              <input type="text" id="nomDenunciante" name="nomDenunciante" placeholder="Nombre completo" value={nomDenunciante} onChange={this.handleChange} required />
            </div>
            <div className="inputGroup">
              <label htmlFor="edadDenunciante">Edad</label>
              <input type="number" min="0" id="edadDenunciante" name="edadDenunciante" placeholder="Edad" value={edadDenunciante} onChange={this.handleChange} required />
            </div>
            <div className="inputGroup">
              <label htmlFor="telDenunciante">Teléfono</label>
              <input type="tel" id="telDenunciante" name="telDenunciante" placeholder="Número de contacto" value={telDenunciante} onChange={this.handleChange} required />
            </div>
          </div>

          {/* <button type="submit">Enviar Reporte</button> */}
        </form>
      </>
    );
  }
}

export default TablaAsalto;
