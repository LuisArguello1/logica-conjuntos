import React, { useState } from 'react'
import cursor from "../Svg/click.svg"
import '../Css/diagramaVen.css'

const VennDiagram = ({Universo = [], ConjuntoA = [], ConjuntoB = [] , MostrarResultado}) => {
  const [selected, setSelected] = useState('')

  //se calcula la interseccion de los conjuntos
  const interseccion = ConjuntoA.filter((el) => ConjuntoB.includes(el))

  //Se intercambia el contenido del conjunto a cambia 
  //Si el conjunto seleccionado es el mismo se oculta el contenido
  const handleClick = (conjunto) => {
    setSelected((prev) => (prev === conjunto ? '' : conjunto))
  };

  //se calcula el contenido del conjunto a y b sin la interseccion
  const conjuntoA = ConjuntoA.filter((el) => !interseccion.includes(el))
  const conjuntoB = ConjuntoB.filter((el) => !interseccion.includes(el))
  const union = Array.from(new Set([...ConjuntoA, ...ConjuntoB]))


  const ElementosNoPertenecen = Universo.filter((e) => !union.includes(e))

  // Obtener contenido basado en la selección
  const obtenerContenido = () => {
    switch (selected) {
      case 'E':
        return `Contenido de Elementos que no pertenecen: { ${ElementosNoPertenecen.length > 0 ? ElementosNoPertenecen.join(', '): "∅"} }`
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

      // VEN DIAGRAMA PARA COMPUTADORA
      <div className="contenedor-diagrama">
        <h2 style={{color: "white"}}>Diagrama de Edwards-Venn</h2>
        <svg width="50%" height="60%" className='svg-diagrama'>
          {/* Círculo Universo*/}
          <circle
            cx="50"
            cy="40"
            r="7%"
            fill="rgba(0, 0, 0, 0)"
            onClick={() => handleClick('E')}
            style={{ cursor: 'pointer' }}
          />
          <text x="30" y="40" className="texto-conjunto" onClick={() => handleClick('E')}>
            ∉
          </text>
          {/* Círculo A */}
          <circle
            cx="220"
            cy="180"
            r="30%"
            fill="rgba(0, 0, 255, 0.5)"
            stroke="white"          
            strokeWidth="1"
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
            stroke="white"          
            strokeWidth="1"
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


        {/* VENN DIAGRAMA PARA CELULAR */}
        <svg width="95%" height="70%" className='svg-diagrama2'>
          {/* Círculo Universo*/}
          <circle
            cx="30"
            cy="30"
            r="5%"
            fill="rgba(0, 0, 0, 0)"
            onClick={() => handleClick('E')}
            style={{ cursor: 'pointer' }}
          />
          <text x="30" y="40" className="texto-conjunto" onClick={() => handleClick('E')}>
            ∉
          </text>
          {/* Círculo A */}
          <circle
            cx="140"
            cy="200"
            r="25%"
            fill="rgba(0, 0, 255, 0.5)"
            stroke="white"          
            strokeWidth="1"
            onClick={() => handleClick('A')}
            style={{ cursor: 'pointer' }}
          />
          <text x="120" y="200" className="texto-conjunto" onClick={() => handleClick('A')}>
            A
          </text>

          {/* Círculo B */}
          <circle
            cx="260"
            cy="200"
            r="25%"
            fill="rgba(23, 177, 105, 0.5)"
            stroke="white"          
            strokeWidth="1"
            onClick={() => handleClick('B')}
            style={{ cursor: 'pointer' }}
          />
          <text x="280" y="200" className="texto-conjunto" onClick={() => handleClick('B')}>
            B
          </text>

          {/* Intersección */}
          <circle
            cx="200"
            cy="200"
            r="10%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick('Interseccion')}
            style={{ cursor: 'pointer' }}
          />
          <text x="200" y="200" className="texto-conjunto" onClick={() => handleClick('Interseccion')}>
            A ∩ B
          </text>

          {/* Mostrar mensaje de selección con contenido */}
          {selected && (
            <foreignObject x="50" y="320" width="300" height="300">
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
