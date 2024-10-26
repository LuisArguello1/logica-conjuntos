import React from "react";

const Visualizer3Conjuntos = (
  {Union,
  InterseccionAB,
  InterseccionAC,
  InterseccionBC,
  InterseccionABC,
  ComplementoA,
  ComplementoB,
  ComplementoC,
  DiferenciaAB,
  DiferenciaAC,
  DiferenciaBC,
  DiferenciaABC,
  DiferenciaACB,
  DiferenciaBAC,
  DiferenciaBCA,
  DiferenciaCAB,
  DiferenciaCBA,
  DiferenciaSimetrica,
  MostrarOpciones}
) => {
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
            <strong className="encabezado-visualizer">Interseccion AB </strong>
            <div className="cuerpo-visualizer">{renderArray(InterseccionAB)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Interseccion AC</strong>
            <div className="cuerpo-visualizer">{renderArray(InterseccionAC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Interseccion BC</strong>
            <div className="cuerpo-visualizer">{renderArray(InterseccionBC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Interseccion ABC</strong>
            <div className="cuerpo-visualizer">{renderArray(InterseccionABC)}</div>
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
            <strong className="encabezado-visualizer">Complemento C</strong>
            <div className="cuerpo-visualizer">{renderArray(ComplementoC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A - B</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaAB)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A - C</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaAC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia B - C</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaBC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A - B - C</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaABC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia A - C - B</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaACB)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia B - A - C</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaBAC)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia B - C- A</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaBCA)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia C - A - B</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaCAB)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia C - B - A</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaCBA)}</div>
          </div>
          <div className="resp">
            <strong className="encabezado-visualizer">Diferencia Simetrica</strong>
            <div className="cuerpo-visualizer">{renderArray(DiferenciaSimetrica)}</div>
          </div>
          
        </div>
      </div>
    )
  );
};

export default Visualizer3Conjuntos;
