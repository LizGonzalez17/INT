import React from "react";

export default function TablaRoboIdentidad() {
  return (
    <div>
      <h2 style={{ color: "#621132", marginBottom: "10px", textAlign: "center" }}>
        Formulario: Robo de Identidad
      </h2>

      {/* Fecha */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fecha" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Fecha:
        </label>
        <input type="date" id="fecha" style={inputStyle} />
      </div>

      {/* Hora */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="hora" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Hora:
        </label>
        <input type="time" id="hora" style={inputStyle} />
      </div>

      {/* Descripción de los hechos */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="descripcionHechos"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          Descripción de los hechos:
        </label>
        <textarea
          id="descripcionHechos"
          placeholder="Describa lo ocurrido"
          rows="3"
          style={inputStyle}
        />
      </div>

      {/* ¿Cómo se dio cuenta de que fue víctima de robo de identidad? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="comoSeDioCuenta"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Cómo se dio cuenta de que fue víctima de robo de identidad?
        </label>
        <textarea
          id="comoSeDioCuenta"
          placeholder="Explique cómo lo notó"
          rows="2"
          style={inputStyle}
        />
      </div>

      {/* ¿Cuándo comenzó a notar que su identidad fue robada? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="cuandoComenzo"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Cuándo comenzó a notar que su identidad fue robada?
        </label>
        <input type="date" id="cuandoComenzo" style={inputStyle} />
      </div>

      {/* ¿Ha notado algún cargo no autorizado en sus cuentas bancarias o tarjetas? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="cargosNoAutorizados"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Ha notado algún cargo no autorizado en sus cuentas bancarias o tarjetas?
        </label>
        <select id="cargosNoAutorizados" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Se ha realizado alguna compra o transacción con su nombre sin su autorización? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="comprasNoAutorizadas"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Se ha realizado alguna compra o transacción con su nombre sin su autorización?
        </label>
        <select id="comprasNoAutorizadas" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Ha recibido alguna notificación de instituciones financieras o servicios en su nombre que usted no reconozca? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="notificacionesNoReconocidas"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Ha recibido alguna notificación de instituciones financieras o servicios en su nombre que usted no reconozca?
        </label>
        <select id="notificacionesNoReconocidas" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Ha intentado resolver el robo con alguna entidad financiera o de servicios? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="intentoResolver"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Ha intentado resolver el robo con alguna entidad financiera o de servicios?
        </label>
        <select id="intentoResolver" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* ¿Su información ha sido utilizada para abrir nuevas cuentas de crédito o realizar préstamos? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="usoInformacion"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Su información ha sido utilizada para abrir nuevas cuentas de crédito o realizar préstamos?
        </label>
        <select id="usoInformacion" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Ha sido utilizado su nombre para cometer fraudes o actividades ilícitas? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="fraudes"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Ha sido utilizado su nombre para cometer fraudes o actividades ilícitas?
        </label>
        <select id="fraudes" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Ha recibido llamadas o mensajes solicitando pagos por deudas que no ha contraído? */}
      <div style={{ marginBottom: "10px" }}>
        <label
          htmlFor="llamadasMensajes"
          style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}
        >
          ¿Ha recibido llamadas o mensajes solicitando pagos por deudas que no ha contraído?
        </label>
        <select id="llamadasMensajes" defaultValue="" style={inputStyle}>
          <option value="" disabled>
            Seleccione
          </option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="noSabe">No sabe</option>
        </select>
      </div>

      {/* ¿Hay testigos de los hechos? */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="testigos" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          ¿Hay testigos de los hechos?
        </label>
        <select id="testigos" defaultValue="no" style={inputStyle}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Teléfono del denunciante */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="telefonoDenunciante" style={{ display: "block", fontWeight: "600", marginBottom: "4px" }}>
          Teléfono del denunciante:
        </label>
        <input
          type="tel"
          id="telefonoDenunciante"
          placeholder="Ej. 5551234567"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
