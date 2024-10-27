import React from "react";
import { useState, useEffect } from "react";
import "../Comentarios_Users Css/visualizerComents.css";
import svgUser from "../Svg/creador.svg";
import svgComentario from "../Svg/comentario.svg";
import logo from "../Img/conjuntoImg.png";

const VisualizerComents = () => {
  const [ObtenerComentarios, setObtenerComentarios] = useState([]);

  useEffect(() => {
    // Se obtiene la lista de comentarios desde el localStorage
    const comentarios =
      JSON.parse(localStorage.getItem("comentariosUser")) || [];
    setObtenerComentarios(comentarios);

  }, []);

  return (
    <div className="components-visualizeComents">
      <div className="title-coments">Sección de comentarios</div>
      {ObtenerComentarios.length > 0
        ? ObtenerComentarios.map((coments, index) => (
            <div className="contenedor-comentario-User" key={index}>
              <div className="contenedor-subtitle-svg">
                <img src={svgUser} alt="svg-user" className="svg-User"></img>
                <strong className="subtitle-user">
                  Comentario Usuario {index + 1}
                </strong>
              </div>
              <div className="contenedor-coments-svg">
                <img
                  src={svgComentario}
                  alt="svg-coments"
                  className="svg-coments"
                ></img>
                <div className="coments-background">
                  <p className="coments">{coments}</p>
                </div>
              </div>
              <div className="contenedor-footer-comentarios">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
              </div>
            </div>
          ))
        : "No existes comentarios"}
    </div>
  );
};

export default VisualizerComents;
