import React, { useState, useEffect } from "react";

export default function RegistrarDenuncia() {
  const [tipoFormulario, setTipoFormulario] = useState("");
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});

  useEffect(() => {
    if (!tipoFormulario) {
      setPreguntas([]);
      setRespuestas({});
      return;
    }

    if (tipoFormulario === "tipo1") {
      setPreguntas([
        { id: "preg1", label: "Describe el incidente", type: "text" },
        { id: "preg2", label: "Fecha del incidente", type: "date" },
      ]);
      setRespuestas({});
    } else if (tipoFormulario === "tipo2") {
      setPreguntas([
        { id: "preg3", label: "Nombre del testigo", type: "text" },
        { id: "preg4", label: "Número de contacto", type: "tel" },
      ]);
      setRespuestas({});
    } else {
      setPreguntas([]);
      setRespuestas({});
    }
  }, [tipoFormulario]);

  const handleChange = (id, value) => {
    setRespuestas((prev) => ({ ...prev, [id]: value }));
  };

  const handleGuardar = () => {
    if (!tipoFormulario) {
      alert("Selecciona un tipo de formulario.");
      return;
    }
    localStorage.setItem("denunciaRespuestas", JSON.stringify({ tipoFormulario, respuestas }));
    alert("Formulario guardado correctamente.");
  };

  const customStyles = {
    primary: "#4E232E",
    secondary: "#e6d3b2",
    accent: "#621132",
    background: "#f2f2f2",
  };

  return (
    <div className="container py-5" style={{ backgroundColor: customStyles.background, minHeight: "100vh" }}>
      <h1 className="mb-4" style={{ color: customStyles.primary, fontWeight: "700" }}>
        Registrar Denuncia
      </h1>

      {/* Tipo de formulario (solo placeholder por ahora) */}
      <div className="mb-4 row align-items-center">
        <label htmlFor="tipoFormulario" className="col-sm-3 col-form-label" style={{ color: customStyles.primary, fontWeight: "600" }}>
          Tipo de formulario:
        </label>
        <div className="col-sm-9">
          <select
            id="tipoFormulario"
            className="form-select"
            value={tipoFormulario}
            onChange={(e) => setTipoFormulario(e.target.value)}
            style={{ borderColor: customStyles.accent, backgroundColor: customStyles.secondary, color: customStyles.primary }}
          >
            <option value="">Seleccione el tipo de formulario</option>
            {/* Las demás opciones se cargarán desde la base de datos en el futuro */}
          </select>
        </div>
      </div>

      {/* Campos: Latitud, Longitud, Dirección */}
      <div className="row g-3 mb-5">
        {["Latitud", "Longitud", "Dirección"].map((label) => (
          <div className="col-md-4" key={label}>
            <label htmlFor={label.toLowerCase()} className="form-label" style={{ color: customStyles.primary, fontWeight: "600" }}>
              {label}
            </label>
            <input
              type="text"
              id={label.toLowerCase()}
              name={label.toLowerCase()}
              className="form-control"
              placeholder={label}
              style={{ borderColor: customStyles.accent }}
            />
          </div>
        ))}
      </div>

      {/* Formulario dinámico */}
      <div
        className="p-4 rounded shadow-sm"
        style={{ backgroundColor: "white", minHeight: "220px", borderColor: customStyles.accent, borderStyle: "solid", borderWidth: "1px" }}
      >
        {preguntas.length === 0 ? (
          <p className="text-center fst-italic" style={{ color: "#666" }}>
            Selecciona un tipo de formulario para cargar las preguntas aquí.
          </p>
        ) : (
          preguntas.map(({ id, label, type }) => (
            <div className="mb-3" key={id}>
              <label htmlFor={id} className="form-label" style={{ color: customStyles.accent, fontWeight: "700" }}>
                {label}
              </label>
              <input
                id={id}
                type={type}
                className="form-control"
                value={respuestas[id] || ""}
                onChange={(e) => handleChange(id, e.target.value)}
                style={{ borderColor: customStyles.accent, color: customStyles.primary }}
              />
            </div>
          ))
        )}
      </div>

      {/* Botón guardar registro */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={handleGuardar}
          disabled={preguntas.length === 0}
          style={{
            backgroundColor: customStyles.accent,
            borderColor: customStyles.accent,
            fontWeight: "700",
            minWidth: "180px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = customStyles.primary)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = customStyles.accent)}
        >
          Guardar Registro
        </button>
      </div>
    </div>
  );
}
