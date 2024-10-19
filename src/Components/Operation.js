import React from "react";
import info from "../Svg/informacion.svg";
import "../Css/operacion.css";
import salir from "../Svg/salir.svg"

const Operation = ({
  onOperation,
  MostrarResultado,
  MostrarAyuda,
  setMostrarAyuda,
  handleHelp,
  obtenerContenido,
}) => {

  return (
    <>
      {MostrarResultado && (
        <>
          <strong className="titulo-operacion">
            Seleccione una operacion a realizar
          </strong>
          <div className="contendor-btn-ayuda">
            <button
              className="btn-operation"
              onClick={() => onOperation("union")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("union")}
              ></img>
              Union
            </button>

            <button
              className="btn-operation"
              onClick={() => onOperation("interseccion")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("interseccion")}
              ></img>
              Interseccion
            </button>
            <button
              className="btn-operation"
              onClick={() => onOperation("diferenciaAB")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("diferenciaAB")}
              ></img>
              Diferencia A - B
            </button>
            <button
              className="btn-operation"
              onClick={() => onOperation("diferenciaBA")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("diferenciaBA")}
              ></img>
              Diferencia B - A
            </button>
            <button
              className="btn-operation"
              onClick={() => onOperation("complementoA")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("complementoA")}
              ></img>
              Complemento A
            </button>
            <button
              className="btn-operation"
              onClick={() => onOperation("complementoB")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("complementoB")}
              ></img>
              Complemento B
            </button>
            <button
              className="btn-operation"
              onClick={() => onOperation("diferenciaAsimetrica")}
            >
              <img
                src={info}
                alt="info"
                className="svg-info"
                onClick={() => handleHelp("diferenciaAsimetrica")}
              ></img>
              Diferencia Simetrica
            </button>

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
    </>
  );
};

export default Operation;
