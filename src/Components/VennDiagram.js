import React, { useState } from 'react'
import cursor from "../Svg/click.svg"
import '../Css/diagramaVen.css'

const VennDiagram = ({ ConjuntoA = [], ConjuntoB = [] , MostrarResultado}) => {
  const [selected, setSelected] = useState('')

  const interseccion = ConjuntoA.filter((el) => ConjuntoB.includes(el))

  const handleClick = (conjunto) => {
    setSelected((prev) => (prev === conjunto ? '' : conjunto))
  };

  const conjuntoA = ConjuntoA.filter((el) => !interseccion.includes(el))
  const conjuntoB = ConjuntoB.filter((el) => !interseccion.includes(el))

  // Obtener contenido basado en la selección
  const obtenerContenido = () => {
    switch (selected) {
      case 'A':
        return `Contenido de Conjunto A: { ${conjuntoA.length > 0 ? conjuntoA.join(', '): "∅"} }`
      case 'B':
        return `Contenido de Conjunto B: { ${conjuntoB.length > 0 ? conjuntoB.join(', '): "∅"} }`
      case 'Interseccion':
        return `Contenido de Intersección (A ∩ B): { ${interseccion.join(', ')} }`
      default:
        return '';
    }
  };

  return (
    (MostrarResultado && (

      <div className="contenedor-diagrama">
        <h2 style={{color: "white"}}>Diagrama de Edwards-Venn</h2>
        <svg width="50%" height="60%" className='svg-diagrama'>
          {/* Círculo A */}
          <circle
            cx="220"
            cy="180"
            r="30%"
            fill="rgba(0, 0, 255, 0.5)"
            onClick={() => handleClick('A')}
            style={{ cursor: 'pointer' }}
          />
          <text x="200" y="180" className="texto-conjunto" onClick={() => handleClick('A')}>
            A
          </text>

          {/* Círculo B */}
          <circle
            cx="420"
            cy="180"
            r="30%"
            fill="rgba(23, 177, 105, 0.5)"
            onClick={() => handleClick('B')}
            style={{ cursor: 'pointer' }}
          />
          <text x="440" y="180" className="texto-conjunto" onClick={() => handleClick('B')}>
            B
          </text>

          {/* Intersección */}
          <circle
            cx="320"
            cy="180"
            r="10%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick('Interseccion')}
            style={{ cursor: 'pointer' }}
          />
          <text x="320" y="180" className="texto-conjunto" onClick={() => handleClick('Interseccion')}>
            A ∩ B
          </text>

          {/* Mostrar mensaje de selección con contenido */}
          {selected && (
            <foreignObject x="180" y="270" width="300" height="300">
              <div className="texto-hover">
                {obtenerContenido()}
              </div>
            </foreignObject>
          )}
        </svg>
        <strong style={{color: 'white'}}>Haga clic en un conjunto para visualizar el contenido<img src={cursor} alt='svg-click' className='svg-click'></img></strong>
      </div>
    ))
  );
};

export default VennDiagram;
