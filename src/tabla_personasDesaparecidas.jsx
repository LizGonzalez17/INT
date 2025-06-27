import React, { Component } from 'react';

class TablaPersonasDesaparecidas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      hora: '',
      descripcionHechos: '',
      nombreDesaparecido: '',
      edadDesaparecido: '',
      genero: '',
      descripcionFisica: '',
      ropa: '',
      fechaUltimaVez: '',
      horaUltimaVez: '',
      lugarUltimaVez: '',
      vistoConOtrasPersonas: '',
      evidenciaAccidenteODelito: '',
      informacionPosterior: '',
      contactoRescate: '',
      hayTestigos: 'no',
      telefonoDenunciante: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const s = this.state;

    return (
      <div>
        <h2 style={{ color: "#621132", marginBottom: "15px", textAlign: "center" }}>
          Formulario: Personas Desaparecidas
        </h2>

        <label style={labelStyle}>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={s.fecha}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Hora</label>
        <input
          type="time"
          name="hora"
          value={s.hora}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Descripción de los hechos</label>
        <textarea
          name="descripcionHechos"
          value={s.descripcionHechos}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>Nombre completo de la persona desaparecida</label>
        <input
          type="text"
          name="nombreDesaparecido"
          value={s.nombreDesaparecido}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Edad aproximada</label>
        <input
          type="text"
          name="edadDesaparecido"
          value={s.edadDesaparecido}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Género</label>
        <select
          name="genero"
          value={s.genero}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="">Selecciona</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
          <option value="otro">Otro</option>
        </select>

        <label style={labelStyle}>Descripción física</label>
        <textarea
          name="descripcionFisica"
          value={s.descripcionFisica}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>Ropa que llevaba puesta</label>
        <textarea
          name="ropa"
          value={s.ropa}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>Fecha en que fue vista por última vez</label>
        <input
          type="date"
          name="fechaUltimaVez"
          value={s.fechaUltimaVez}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Hora en que fue vista por última vez</label>
        <input
          type="time"
          name="horaUltimaVez"
          value={s.horaUltimaVez}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Lugar donde fue vista por última vez</label>
        <textarea
          name="lugarUltimaVez"
          value={s.lugarUltimaVez}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>¿La persona desaparecida fue vista con otras personas? ¿Quiénes?</label>
        <textarea
          name="vistoConOtrasPersonas"
          value={s.vistoConOtrasPersonas}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>¿Evidencia de que pudo haber estado involucrada en un accidente o delito?</label>
        <textarea
          name="evidenciaAccidenteODelito"
          value={s.evidenciaAccidenteODelito}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>¿Alguien ha visto o sabe algo de la persona después de la desaparición?</label>
        <textarea
          name="informacionPosterior"
          value={s.informacionPosterior}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>¿Alguien ha contactado a la familia o amigos pidiendo rescate o negociación?</label>
        <textarea
          name="contactoRescate"
          value={s.contactoRescate}
          onChange={this.handleChange}
          rows={3}
          style={inputStyle}
        />

        <label style={labelStyle}>¿Hay testigos de los hechos?</label>
        <select
          name="hayTestigos"
          value={s.hayTestigos}
          onChange={this.handleChange}
          style={inputStyle}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label style={labelStyle}>Teléfono del denunciante</label>
        <input
          type="tel"
          name="telefonoDenunciante"
          value={s.telefonoDenunciante}
          onChange={this.handleChange}
          style={inputStyle}
          placeholder="Ej. 5551234567"
        />
      </div>
    );
  }
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  boxSizing: "border-box",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  fontWeight: "600",
  marginBottom: "6px",
  color: "#333",
};

export default TablaPersonasDesaparecidas;
