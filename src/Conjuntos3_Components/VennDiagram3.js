import React, { useState } from "react";
import "../Conjuntos3_Css/vennDiagram3.css";
import cursor from "../Svg/click.svg";

const VennDiagram3 = ({
  ConjuntoA,
  ConjuntoB,
  ConjuntoC,
  MostrarResultado,
}) => {
  const [selected, setSelected] = useState("");

  //   INTERSECCIONES CONJUNTOS A,B,C
  const interseccionAB = ConjuntoA.filter((e) => ConjuntoB.includes(e));
  const interseccionAC = ConjuntoA.filter((e) => ConjuntoC.includes(e));
  const interseccionBC = ConjuntoB.filter((e) => ConjuntoC.includes(e));
  const interseccionABC = ConjuntoA.filter(
    (e) => ConjuntoB.includes(e) && ConjuntoC.includes(e)
  );

  // VALORES UNICOS PARA LOS CONJUNTOS
  const conjuntoA = ConjuntoA.filter(
    (e) => !interseccionAB.includes(e) && !interseccionAC.includes(e)
  );
  const conjuntoB = ConjuntoB.filter(
    (e) => !interseccionAB.includes(e) && !interseccionBC.includes(e)
  );
  const conjuntoC = ConjuntoC.filter(
    (e) => !interseccionAC.includes(e) && !interseccionBC.includes(e)
  );

  //Seleccion del conjunto a presentar el contenido
  const handleClick = (conjunto) => {
    setSelected((prev) => (prev === conjunto ? "" : conjunto));
  };

  // Obtener contenido basado en la selección
  const obtenerContenido = () => {
    switch (selected) {
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
        <svg width="80%" height="85%" className="svg-diagrama">
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
        <strong style={{ color: "white" }}>
          Haga clic en un conjunto para visualizar el contenido
          <img src={cursor} alt="svg-click" className="svg-click"></img>
        </strong>
      </div>
    )
  );
};

export default VennDiagram3;
