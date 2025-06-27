import React, { Component } from 'react';

class TablaIntentoHomicidio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      descripcionVictima: '',
      conoceResponsables: 'no',
      seUtilizoArma: 'no',
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
      fecha,
      hora,
      descripcionHechos,
      descripcionVictima,
      conoceResponsables,
      seUtilizoArma,
      hayTestigos,
      telefonoDenunciante,
    } = this.state;

    return (
      <div>
        <h2 style={titleStyle}>Formulario: Intento de Homicidio</h2>

        <label style={labelStyle} htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fecha}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="hora">Hora</label>
        <input
          type="time"
          id="hora"
          name="hora"
          value={hora}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="descripcionHechos">Descripción de los hechos</label>
        <textarea
          id="descripcionHechos"
          name="descripcionHechos"
          value={descripcionHechos}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="descripcionVictima">Descripción de la víctima</label>
        <textarea
          id="descripcionVictima"
          name="descripcionVictima"
          value={descripcionVictima}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="conoceResponsables">
          ¿Se sabe quién es el o los presuntos responsables?
        </label>
        <select
          id="conoceResponsables"
          name="conoceResponsables"
          value={conoceResponsables}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label style={labelStyle} htmlFor="seUtilizoArma">
          ¿Se utilizó algún arma para cometer el delito?
        </label>
        <select
          id="seUtilizoArma"
          name="seUtilizoArma"
          value={seUtilizoArma}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label style={labelStyle} htmlFor="hayTestigos">¿Hay testigos de los hechos?</label>
        <select
          id="hayTestigos"
          name="hayTestigos"
          value={hayTestigos}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label style={labelStyle} htmlFor="telefonoDenunciante">Teléfono del denunciante</label>
        <input
          type="tel"
          id="telefonoDenunciante"
          name="telefonoDenunciante"
          value={telefonoDenunciante}
          onChange={this.handleChange}
          style={inputStyle}
          placeholder="Ej. 5551234567"
        />
      </div>
    );
  }
}

const titleStyle = {
  color: "#621132",
  marginBottom: "15px",
  textAlign: "center",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "6px",
  marginTop: "12px",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

export default TablaIntentoHomicidio;
