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
      {/* Renderizado condicional si el estado es verdadero se mostrara el contenido del componente */}
      {MostrarResultado && (
        <>
          <strong className="titulo-operacion">
            Seleccione una operacion a realizar
          </strong>

          {/* BTN PARA UNION */}
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

            {/* BTN PARA INTERSECCION */}
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

            {/* BTN PARA DIFERENCIA A - B */}
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

            {/* BTN PARA DIFERENCIA B - A */}
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

            {/* BTN PARA COMPLEMENTO A */}
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

            {/* BTN PARA COMPLEMENTO B */}
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

            {/* BTN PARA DIFERENCIA SIMETRICA */}
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
