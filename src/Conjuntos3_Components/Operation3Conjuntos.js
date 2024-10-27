import React from "react";
import info from "../Svg/informacion.svg";
import salir from "../Svg/salir.svg";
import "../Conjuntos3_Css/operation3Conjuntos.css"

const Operation3Conjuntos = ({
  MostrarAyuda,
  setMostrarAyuda,
  onOperation,
  MostrarResultado,
  handleHelp,
  Select,
  obtenerContenido,
}) => {
  const obtenerBTN = () => {
    const operaciones = [
      "union",
      "interseccionAB",
      "interseccionAC",
      "interseccionBC",
      "interseccionABC",
      "complementoA",
      "complementoB",
      "complementoC",
      "diferenciaAB",
      "diferenciaAC",
      "diferenciaBC",
      "diferenciaABC",
      "diferenciaACB",
      "diferenciaBAC",
      "diferenciaBCA",
      "diferenciaCAB",
      "diferenciaCBA",
      "diferenciaSimentrica",
    ];

    // Se renderiza todos los botones con el arreglo anterior y se retorna toda una etiqueta
    return operaciones.map((operacion) => (
      <button className="btn-operation" onClick={() => onOperation(operacion)} key={operacion}>
        <img
          src={info}
          alt="info"
          className="svg-info"
          onClick={() => handleHelp(operacion)}
        ></img>
        {operacion}
      </button>
    ));
  };

  return (
    <>
      {/* Renderizado condicional si el estado es verdadero se mostrara el contenido del componente */}
      {MostrarResultado && (
        <>
          <strong className="titulo-operacion">
            Seleccione una operacion a realizar
          </strong>
          <div className="contendor-btn-ayuda">
            {obtenerBTN()}

            {/* Pantalla emergente de ayuda */}
            {MostrarAyuda && (
              <div className="contenedor-ayuda">
                <div className="contenedor-titulo-salir">
                  <h2>Ayuda:</h2>
                  <img
                    src={salir}
                    alt="svg-salir"
                    className="salir-ayuda"
                    onClick={() => setMostrarAyuda(false)}
                  ></img>
                </div>
                <div className="detalle">{obtenerContenido()}</div>
              </div>
            )}
          </div>
        </>
      )}
      ;
    </>
  );
};

export default Operation3Conjuntos;