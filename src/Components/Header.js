import React from "react";
import "../Css/header.css";
import conjuntoImg from "../Img/conjuntoImg.png";
import svgUnion from "../Svg/union.svg"
import svgInterseccion from "../Svg/interseccion.svg"
import svgDiferencia from "../Svg/diferencia.svg"
import svgComplemento from "../Svg/complemento.svg"

const Header = () => {
  return (
    <header className="header-logica-conjuntos">
      <img
        className="img-conjunto"
        src={conjuntoImg}
        alt="Img - conjunto"
      ></img>
      <div className="contenedor-presentacion">
        <p className="materia-header">Matematicas Discretas</p>
        <h1>Logica de conjuntos</h1>
        <p className="parrafo-header">
          Nuestra herramienta está diseñada para simplificar tus tareas y
          ayudarte a navegar por el complejo mundo de los conjuntos con
          facilidad.
        </p>
      </div>
      <div className="options-logica-conjuntos">
        <div className="nav-logica-conjuntos">Nav Opcion 1</div>
        <div className="nav-logica-conjuntos">Nav Opcion 2</div>
        <div className="nav-logica-conjuntos">Nav Opcion 3</div>
        <div className="nav-logica-conjuntos">Nav Opcion 4</div>
      </div>
      <div className="contenedor-info-conjuntos">
        {/* Detalle 1 */}
        <div className="info-detalle-conjunto">
          <div className="contenedor-titulo-svg">
            <div className="contenedor-svg">
              <img src={svgUnion} alt="svg"></img>
            </div>
            <p className="titulo-conjunto">Union</p>
          </div>
          <p className="detalle-conjunto">Operación fundamental que combina todos los elementos presentes en dos conjuntos distintos en un solo conjunto.</p>
        </div>
        {/* Detalle 2 */}
        <div className="info-detalle-conjunto">
          <div className="contenedor-titulo-svg">
            <div className="contenedor-svg">
              <img src={svgInterseccion} alt="svg"></img>
            </div>
            <p className="titulo-conjunto">Intersección</p>
          </div>
          <p className="detalle-conjunto">Operación que consiste en encontrar los elementos que son comunes a dos o más conjuntos.</p>
        </div>
        {/* Detalle 3 */}
        <div className="info-detalle-conjunto">
          <div className="contenedor-titulo-svg">
            <div className="contenedor-svg">
              <img src={svgDiferencia} alt="svg"></img>
            </div>
            <p className="titulo-conjunto">Diferencia</p>
          </div>
          <p className="detalle-conjunto">Conjunto formado por los elementos que pertenecen al primer conjunto y no al segundo.</p>
        </div>
        {/* Detalle 4 */}
        <div className="info-detalle-conjunto">
          <div className="contenedor-titulo-svg">
            <div className="contenedor-svg">
              <img src={svgComplemento} alt="svg"></img>
            </div>
            <p className="titulo-conjunto">Complemento</p>
          </div>
          <p className="detalle-conjunto">El complemento de un conjunto incluye todo lo que no está en ese conjunto, pero sí en el espacio universal.</p>
        </div>
        {/* Detalle 5 */}
        <div className="info-detalle-conjunto">
          <div className="contenedor-titulo-svg">
            <div className="contenedor-svg">
              <img src={svgDiferencia} alt="svg"></img>
            </div>
            <p className="titulo-conjunto">Diferencia Simetrica</p>
          </div>
          <p className="detalle-conjunto">Operación que representa los elementos que pertenecen a uno de los conjuntos, pero no al otro.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
