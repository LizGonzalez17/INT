import React, { Component } from 'react';

class TablaViolenciaMujeres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      nombreAgresor: '',
      nombreVictima: '',
      edadVictima: '',
      descripcionFisicaVictima: '',
      relacionVictimaAgresor: '',
      descripcionFisicaAgresor: '',
      tipoViolencia: '',
      lesionesVisibles: 'no',
      amenazasPrevias: 'no',
      direccionEscape: '',
      hayTestigos: 'no',
      telefonoDenunciante: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      fecha, hora, descripcionHechos, nombreAgresor, nombreVictima, edadVictima,
      descripcionFisicaVictima, relacionVictimaAgresor, descripcionFisicaAgresor,
      tipoViolencia, lesionesVisibles, amenazasPrevias, direccionEscape,
      hayTestigos, telefonoDenunciante,
    } = this.state;

    return (
      <>
        <style>{`
          form {
            max-width: 1000px;
            margin: 30px auto;
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
          }
          h2 {
            text-align: center;
            margin-bottom: 25px;
            color: #333;
          }
          label {
            font-weight: bold;
            display: block;
            margin-top: 15px;
            margin-bottom: 5px;
          }
          input, textarea, select {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 1rem;
            box-sizing: border-box;
          }
          textarea {
            resize: vertical;
            min-height: 60px;
          }
          .row {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .col {
            flex: 1 1 45%;
          }
          @media (max-width: 768px) {
            .col {
              flex: 1 1 100%;
            }
          }
        `}</style>

        <form>
          <h2>Formulario: Violencia contra Mujeres</h2>

          <div className="row">
            <div className="col">
              <label htmlFor="fecha">Fecha</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={fecha}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="hora">Hora</label>
              <input
                type="time"
                id="hora"
                name="hora"
                value={hora}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <label htmlFor="descripcionHechos">Descripción de los hechos</label>
          <textarea
            id="descripcionHechos"
            name="descripcionHechos"
            value={descripcionHechos}
            onChange={this.handleChange}
          />

          <div className="row">
            <div className="col">
              <label htmlFor="nombreAgresor">Nombre(s) de la persona que ejerce la violencia</label>
              <input
                type="text"
                id="nombreAgresor"
                name="nombreAgresor"
                value={nombreAgresor}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="nombreVictima">Nombre de la víctima</label>
              <input
                type="text"
                id="nombreVictima"
                name="nombreVictima"
                value={nombreVictima}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="edadVictima">Edad de la víctima</label>
              <input
                type="number"
                id="edadVictima"
                name="edadVictima"
                value={edadVictima}
                onChange={this.handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="relacionVictimaAgresor">Relación de la víctima con el agresor</label>
              <input
                type="text"
                id="relacionVictimaAgresor"
                name="relacionVictimaAgresor"
                value={relacionVictimaAgresor}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <label htmlFor="descripcionFisicaVictima">Descripción física de la víctima</label>
          <textarea
            id="descripcionFisicaVictima"
            name="descripcionFisicaVictima"
            value={descripcionFisicaVictima}
            onChange={this.handleChange}
          />

          <label htmlFor="descripcionFisicaAgresor">Descripción física de la persona que ejerce la violencia</label>
          <textarea
            id="descripcionFisicaAgresor"
            name="descripcionFisicaAgresor"
            value={descripcionFisicaAgresor}
            onChange={this.handleChange}
          />

          <label htmlFor="tipoViolencia">Tipo de violencia (física, psicológica, emocional, económica, sexual, etc.)</label>
          <input
            type="text"
            id="tipoViolencia"
            name="tipoViolencia"
            value={tipoViolencia}
            onChange={this.handleChange}
          />

          <label htmlFor="lesionesVisibles">¿La víctima presenta lesiones visibles?</label>
          <select
            id="lesionesVisibles"
            name="lesionesVisibles"
            value={lesionesVisibles}
            onChange={this.handleChange}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>

          <label htmlFor="amenazasPrevias">¿Existen amenazas previas por parte del agresor?</label>
          <select
            id="amenazasPrevias"
            name="amenazasPrevias"
            value={amenazasPrevias}
            onChange={this.handleChange}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>

          <label htmlFor="direccionEscape">Dirección o ruta de escape</label>
          <input
            type="text"
            id="direccionEscape"
            name="direccionEscape"
            value={direccionEscape}
            onChange={this.handleChange}
          />

          <label htmlFor="hayTestigos">¿Hay testigos de los hechos?</label>
          <select
            id="hayTestigos"
            name="hayTestigos"
            value={hayTestigos}
            onChange={this.handleChange}
          >
            <option value="no">No</option>
            <option value="si">Sí</option>
          </select>

          <label htmlFor="telefonoDenunciante">Teléfono del denunciante</label>
          <input
            type="tel"
            id="telefonoDenunciante"
            name="telefonoDenunciante"
            value={telefonoDenunciante}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}

export default TablaViolenciaMujeres;
