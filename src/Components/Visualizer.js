import React from "react";
import "../Css/visualizer.css";

const Visualizer = ({
  Union,
  Interseccion,
  Diferencia,
  DiferenciaBA,
  ComplementoA,
  ComplementoB,
  DiferenciaAsimetrica,
  MostrarOpciones,
}) => {

  //RENDERIZA EL CONTENIDO DE LAS OPERAACIONES
  const renderArray = (array) => {
    return array.length > 0 ? array.map((item, index) => <div key={index}>{item}</div>) : "∅"
  };
  return (
    MostrarOpciones && (
      <div className="contenedor-visualizer-conjuntos">
        <h3 className="titulo-visulizer">Resultado Operaciones</h3>

        <div className="resultado-operaciones">

          <div className="resp">
            <strong className="encabezado-visualizer">Union </strong>
            <div className="cuerpo-visualizer">{renderArray(Union)}</div>
          </div>
          
          <div className="resp">
            <strong className="encabezado-visualizer">Interseccion </strong>
            <div className="cuerpo-visualizer">{renderArray(Interseccion)}</div>
          </div>

          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A - B </strong>
            <div className="cuerpo-visualizer">{renderArray(Diferencia)}</div>
          </div>

          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia B - A </strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaBA)}</div>
          </div>

          <div className="resp">
            <strong className="encabezado-visualizer">Complemento A</strong>
            <div className="cuerpo-visualizer">{renderArray(ComplementoA)}</div>
          </div>

          <div className="resp">
            <strong className="encabezado-visualizer">Complemento B</strong>
            <div className="cuerpo-visualizer">{renderArray(ComplementoB)}</div>
          </div>

          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A. </strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaAsimetrica)}</div>
          </div>
          
        </div>
      </div>
    )
  );
};

export default Visualizer;
