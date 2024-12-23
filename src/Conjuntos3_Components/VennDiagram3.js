import React, { useState } from "react";
import "../Conjuntos3_Css/vennDiagram3.css";
import cursor from "../Svg/click.svg";

const VennDiagram3 = ({
  Universo,
  ConjuntoA,
  ConjuntoB,
  ConjuntoC,
  MostrarResultado,
}) => {
  const [selected, setSelected] = useState("");

  //   INTERSECCIONES CONJUNTOS A,B,C
  const interseccionABC = ConjuntoA.filter(
    (e) => ConjuntoB.includes(e) && ConjuntoC.includes(e)
  );

  //Se calcula las intersecciones AB. AC, BC
  const interseccionAB = ConjuntoA.filter((e) => ConjuntoB.includes(e) && !interseccionABC.includes(e));
  const interseccionAC = ConjuntoA.filter((e) => ConjuntoC.includes(e) && !interseccionABC.includes(e));
  const interseccionBC = ConjuntoB.filter((e) => ConjuntoC.includes(e) && !interseccionABC.includes(e));

  const union = Array.from(new Set([...ConjuntoA, ...ConjuntoB, ...ConjuntoC]))
  const elementosNoPertenecen = Universo.filter((e) => !union.includes(e))  
  
  // VALORES UNICOS PARA LOS CONJUNTOS
  const conjuntoA = ConjuntoA.filter(
    (e) => !interseccionAB.includes(e) && !interseccionAC.includes(e) && !interseccionABC.includes(e)
  );
  const conjuntoB = ConjuntoB.filter(
    (e) => !interseccionAB.includes(e) && !interseccionBC.includes(e) && !interseccionABC.includes(e)
  );
  const conjuntoC = ConjuntoC.filter(
    (e) => !interseccionAC.includes(e) && !interseccionBC.includes(e) && !interseccionABC.includes(e)
  );

  //Se intercambia el contenido del conjunto a cambia 
  //Si el conjunto seleccionado es el mismo se oculta el contenido
  const handleClick = (conjunto) => {
    setSelected((prev) => (prev === conjunto ? "" : conjunto));
  };

  // Obtener contenido basado en la selección
  // En caso de no haber contenido en los conjuntos se presenta un cojunto vacio ∅
  const obtenerContenido = () => {
    switch (selected) {
      case "E":
        return `Elementos que no pertenecen: { ${
          elementosNoPertenecen.length > 0 ? elementosNoPertenecen.join(", ") : "∅"
        } }`;
      case "A":
        return `Contenido de Conjunto A: { ${
          conjuntoA.length > 0 ? conjuntoA.join(", ") : "∅"
        } }`;
      case "B":
        return `Contenido de Conjunto B: { ${
          conjuntoB.length > 0 ? conjuntoB.join(", ") : "∅"
        } }`;
      case "C":
        return `Contenido de Conjunto C: { ${
          conjuntoB.length > 0 ? conjuntoC.join(", ") : "∅"
        } }`;
      case "InterseccionABC":
        return `Contenido de Intersección (A ∩ B ∩ C): { ${
          interseccionABC.length > 0 ? interseccionABC.join(", ") : "∅"
        } }`;
      case "InterseccionAB":
        return `Contenido de Intersección (A ∩ B): { ${
          interseccionAB.length > 0 ? interseccionAB.join(", ") : "∅"
        } }`;
      case "InterseccionAC":
        return `Contenido de Intersección (A ∩ C): { ${
          interseccionAC.length > 0 ? interseccionAC.join(", ") : "∅"
        } }`;
      case "InterseccionBC":
        return `Contenido de Intersección (B ∩ C): { ${
          interseccionBC.length > 0 ? interseccionBC.join(", ") : "∅"
        } }`;
      default:
        return "";
    }
  };
  return (
    MostrarResultado && (
      <div className="contenedor-diagrama">
        <h2 style={{ color: "white" }}>Diagrama de Edwards-Venn</h2>
        {/* Venn diagrama para computadora */}
        <svg width="80%" height="85%" className="svg-diagrama">
          {/* No pertenecen*/}
          <circle
            cx="50"
            cy="50"
            r="7%"
            fill="rgba(0, 0, 0, 0)"
            onClick={() => handleClick("E")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="50"
            y="50"
            className="texto-conjunto"
            onClick={() => handleClick("E")}
          >
            ∉
          </text>
          {/* Círculo A */}
          <circle
            cx="500"
            cy="160"
            r="18%"
            fill="rgba(223, 16, 16, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("A")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="500"
            y="140"
            className="texto-conjunto"
            onClick={() => handleClick("A")}
          >
            A
          </text>
          {/* Círculo B */}
          <circle
            cx="400"
            cy="330"
            r="18%"
            fill="rgba(0, 0, 255, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("B")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="380"
            y="350"
            className="texto-conjunto"
            onClick={() => handleClick("B")}
          >
            B
          </text>

          {/* Círculo C */}
          <circle
            cx="600"
            cy="330"
            r="18%"
            fill="rgba(23, 177, 105, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("C")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="640"
            y="350"
            className="texto-conjunto"
            onClick={() => handleClick("C")}
          >
            C
          </text>

          {/* Intersección A B C*/}
          <circle
            cx="500"
            cy="270"
            r="4%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionABC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="500"
            y="275"
            className="texto-conjunto-interseccionABC"
            onClick={() => handleClick("InterseccionABC")}
          >
            A ∩ B ∩ C
          </text>

          {/* Intersección A B*/}
          <circle
            cx="430"
            cy="230"
            r="5%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionAB")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="430"
            y="240"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionAB")}
          >
            A ∩ B
          </text>

          {/* Intersección A C*/}
          <circle
            cx="570"
            cy="230"
            r="5%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionAC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="570"
            y="240"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionAC")}
          >
            A ∩ C
          </text>

          {/* Intersección C B*/}
          <circle
            cx="500"
            cy="350"
            r="5%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionBC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="500"
            y="350"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionBC")}
          >
            B ∩ C
          </text>

          {/* Mostrar mensaje de selección con contenido */}
          {selected && (
            <foreignObject x="360" y="420" width="330" height="300">
              <div className="texto-hover">{obtenerContenido()}</div>
            </foreignObject>
          )}
        </svg>

        {/* Ven diagrama para celular */}
        <svg width="95%" height="85%" className="svg-diagrama2">
          {/* No pertenecen*/}
          <circle
            cx="50"
            cy="50"
            r="7%"
            fill="rgba(0, 0, 0, 0)"
            onClick={() => handleClick("E")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="50"
            y="50"
            className="texto-conjunto"
            onClick={() => handleClick("E")}
          >
            ∉
          </text>
          {/* Círculo A */}
          <circle
            cx="210"
            cy="190"
            r="22%"
            fill="rgba(223, 16, 16, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("A")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="210"
            y="160"
            className="texto-conjunto"
            onClick={() => handleClick("A")}
          >
            A
          </text>
          {/* Círculo B */}
          <circle
            cx="150"
            cy="300"
            r="22%"
            fill="rgba(0, 0, 255, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("B")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="120"
            y="320"
            className="texto-conjunto"
            onClick={() => handleClick("B")}
          >
            B
          </text>

          {/* Círculo C */}
          <circle
            cx="270"
            cy="300"
            r="22%"
            fill="rgba(23, 177, 105, 0.5)"
            stroke="white"
            strokeWidth="1"
            onClick={() => handleClick("C")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="310"
            y="320"
            className="texto-conjunto"
            onClick={() => handleClick("C")}
          >
            C
          </text>

          {/* Intersección A B C*/}
          <circle
            cx="210"
            cy="260"
            r="6%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionABC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="210"
            y="265"
            className="texto-conjunto-interseccionABC"
            onClick={() => handleClick("InterseccionABC")}
          >
            A ∩ B ∩ C
          </text>

          {/* Intersección A B*/}
          <circle
            cx="155"
            cy="230"
            r="6%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionAB")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="155"
            y="240"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionAB")}
          >
            A ∩ B
          </text>

          {/* Intersección A C*/}
          <circle
            cx="265"
            cy="230"
            r="6%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionAC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="265"
            y="240"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionAC")}
          >
            A ∩ C
          </text>

          {/* Intersección C B*/}
          <circle
            cx="210"
            cy="330"
            r="7%"
            fill="rgba(0, 0, 0, 0)" // Transparente para clic.
            onClick={() => handleClick("InterseccionBC")}
            style={{ cursor: "pointer" }}
          />
          <text
            x="210"
            y="330"
            className="texto-conjunto-interseccion"
            onClick={() => handleClick("InterseccionBC")}
          >
            B ∩ C
          </text>

          {/* Mostrar mensaje de selección con contenido */}
          {selected && (
            <foreignObject x="40" y="420" width="330" height="300">
              <div className="texto-hover">{obtenerContenido()}</div>
            </foreignObject>
          )}
        </svg>


        <strong style={{ color: "white" }}>
          Haga clic en un conjunto para visualizar el contenido
          <img src={cursor} alt="svg-click" className="svg-click"></img>
        </strong>
      </div>
    )
  );
};

export default VennDiagram3;
