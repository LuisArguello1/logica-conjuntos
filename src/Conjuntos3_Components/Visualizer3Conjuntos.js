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

  //se renderiza las operaciones con sus elementos
  //en caso de no tener elementos se coloca ∅
  const renderArray = (array) => {
    return array.length > 0 ? array.map((item, index) => <div key={index}>{item}</div>) : "∅"
  };

  //Funcion que renderizara todos los elementos a presentar
  const obtenerLista = () => {

    //Array de objetos para luego recorrerlo y retornar su contendio
    const operaciones = [
      {
        name: "Union",
        operacion: Union,
      },
      {
        name: "Interseccion AB",
        operacion: InterseccionAB,
      },
      {
        name: "Interseccion AC",
        operacion: InterseccionAC,
      },
      {
        name: "Interseccion BC",
        operacion: InterseccionBC,
      },
      {
        name: "Interseccion ABC",
        operacion: InterseccionABC,
      },
      {
        name: "Complemento A",
        operacion: ComplementoA,
      },
      {
        name: "Complemento B",
        operacion: ComplementoB,
      },
      {
        name: "Complemento C",
        operacion: ComplementoC,
      },
      {
        name: "Diferencia A - B",
        operacion: DiferenciaAB,
      },
      {
        name: "Diferencia A - C",
        operacion: DiferenciaAC,
      },
      {
        name: "Diferencia B - C",
        operacion: DiferenciaBC,
      },
      {
        name: "Diferencia A - B - C",
        operacion: DiferenciaABC,
      },
      {
        name: "Diferencia A - C - B",
        operacion: DiferenciaACB,
      },
      {
        name: "Diferencia B - A - C",
        operacion: DiferenciaBAC,
      },
      {
        name: "Diferencia B - C - A",
        operacion: DiferenciaBCA,
      },
      {
        name: "Diferencia C - A - B",
        operacion: DiferenciaCAB,
      },
      {
        name: "Diferencia C - B - A",
        operacion: DiferenciaCBA,
      },
      {
        name: "Diferencia Simetrica",
        operacion: DiferenciaSimetrica,
      },
    ]

    //se retorna el contenido de las operaciones
    return operaciones.map((ope, index) => (
      <div className="resp" key={index}>
        <strong className="encabezado-visualizer">{ope.name}</strong>
        <div className="cuerpo-visualizer">{renderArray(ope.operacion)}</div>
      </div>
    ))
  }

  return (

    //rederizado condicional solo si es verdadero se mostrara
    MostrarOpciones && (
      <div className="contenedor-visualizer-conjuntos">
        <h3 className="titulo-visulizer">Resultado Operaciones</h3>

        <div className="resultado-operaciones">
          {/* SE LLAMA A LA FUNCION Y RENDERIZA EL CONTENIDO RETORNADO */}
          {obtenerLista()}
        </div>
      </div>
    )
  );
};

export default Visualizer3Conjuntos;
