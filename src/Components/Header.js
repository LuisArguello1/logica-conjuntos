import React from "react";
import "../Css/header.css";
import conjuntoImg from "../Img/conjuntoImg.png";
import { Link} from "react-router-dom";

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
      {/* Se usa Link para hacer la navegacion entre paginas */}
      <div className="options-logica-conjuntos">
        <Link to="/VideosAyuda" className="nav-logica-conjuntos">Contenido de ayuda</Link>
        <Link to="/AppConjuntos3" className="nav-logica-conjuntos">
          3 Conjuntos
        </Link>
        <Link to="/" className="nav-logica-conjuntos">
          2 Conjuntos
        </Link>
        <Link to="/ComentariosUsers" className="nav-logica-conjuntos">Comentarios</Link>
      </div>
      
    </header>
  );
};

export default Header;
