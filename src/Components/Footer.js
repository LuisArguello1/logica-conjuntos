import { useState } from "react";
import React from "react";
import "../Css/footer.css";
import svgCreador from "../Svg/creador.svg";
import svgTelefono from "../Svg/telefono.svg";
import svgCorreo from "../Svg/correo.svg";
import svgInstitucion from "../Svg/institucion.svg";
import imgUniversidad from "../Img/Universidad-logo.png";
import imgLogo from "../Img/conjuntoImg.png";
import svgInstagram from "../Svg/instagram.svg";
import svgTwiter from "../Svg/twiter.svg";
import svgWhatsapp from "../Svg/whatsapp.svg";
import svgGoogle from "../Svg/google.svg";
import svgYoutube from "../Svg/youtube.svg";
import Swal from "sweetalert2";

const Footer = () => {
  const [MostrarCreadores, setMostrarCreadores] = useState(false);
  const [ContenidoText, setContenidoText] = useState("");
  const [MostrarTooltip, setMostrarTooltip] = useState(false);

  const handleEnviarAviso = () => {
    if (ContenidoText.trim() === "") {
      setMostrarTooltip(true);
      setTimeout(() => setMostrarTooltip(false), 3000);
    } else {
      vaciarTextArea();
    }
  };

  const vaciarTextArea = () => {
    setContenidoText("");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por tu comentario",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const verCreadores = () => {
    setMostrarCreadores(!MostrarCreadores);
  };

  const obtenerCreadores = () => {
    const creadores = [
      {
        telf: "0945324574",
        email: "larguellol@unemi.edu.ec",
      },
      {
        telf: "0945311236",
        email: "langulop2@unemi.edu.ec",
      },
      {
        telf: "0955674987",
        email: "marocaz2@unemi.edu.ec",
      },
      {
        telf: "0935467567",
        email: "fcalleb@unemi.edu.ec",
      },
      {
        telf: "0978090321",
        email: "epazminoj3@unemi.edu.ec",
      },
    ];

    return creadores.map((creador) => (
      <div className="card" key={creador.telf}>
        <span></span>
        <div className="content">
          <img className="img-creador" alt="img-creador" src={svgCreador}></img>
          <div className="detalle-creador">
            <div className="contenedor-contacto">
              <img
                alt="svg-contacto"
                className="svg-contacto"
                src={svgTelefono}
              ></img>
              <p>
                <strong>{creador.telf}</strong>
              </p>
            </div>
            <div className="contenedor-contacto">
              <img
                alt="svg-contacto"
                className="svg-contacto"
                src={svgCorreo}
              ></img>
              <p>
                <strong>{creador.email}</strong>
              </p>
            </div>
            <div className="contenedor-contacto">
              <img
                alt="svg-contacto"
                className="svg-contacto"
                src={svgInstitucion}
              ></img>
              <p>
                <strong>Ing. en Software</strong>
              </p>
            </div>
            <div className="contenedor-imgUniversiti">
              <img
                alt="svg-univer"
                className="img-universidad"
                src={imgUniversidad}
              ></img>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="footer-conjuntos">
      {MostrarCreadores && (
        <div className="contenedor-cards-creadores">
          {obtenerCreadores()}
        </div>
      )}
      <div className="contenedor-Enlaces">
        <div className="enlaces-decoracion">
          <div className="contenedor-img">
            <img
              src={imgLogo}
              alt="logo-footer"
              className="img-logo-footer"
            ></img>
            <p className="materia-header2">Matematicas Discretas</p>
          </div>
          <h3 style={{ color: "white" }}>Logica de conjuntos</h3>
        </div>
        <div className="enlaces-decoracion">
          <div className="contenedor-enlaces-aling-left">
            <p className="enlaces-hover" onClick={verCreadores}>
              {MostrarCreadores ? "hide creators" : "See creators"}
            </p>
            <p className="enlaces-hover">About us</p>
            <p className="enlaces-hover">Contact us</p>
            <p className="enlaces-hover">Afiliates</p>
            <p className="enlaces-hover">Resources</p>
          </div>
        </div>
        <div className="enlaces-decoracion">
          <div className="contenedor-comentario">
            <textarea
              placeholder="Dejamos tu comentario..."
              className="text-area"
              value={ContenidoText}
              onChange={(e) => setContenidoText(e.target.value)}
            ></textarea>
            {MostrarTooltip && (
              <div className="tooltip">El comentario no puede estar vacío</div>
            )}
            <button
              className="btn-comentario"
              type="summit"
              onClick={() => handleEnviarAviso()}
            >
              Enviar comentario
            </button>
          </div>
        </div>
      </div>
      <div className="contenedor-svg-contact">
        <div className="svg-contact">
          <div className="svg-circle">
            <img src={svgInstagram} alt="svg"></img>
          </div>
          <div className="svg-circle">
            <img src={svgTwiter} alt="svg"></img>
          </div>
          <div className="svg-circle">
            <img src={svgWhatsapp} alt="svg"></img>
          </div>
          <div className="svg-circle">
            <img src={svgGoogle} alt="svg"></img>
          </div>
          <div className="svg-circle">
            <img src={svgYoutube} alt="svg"></img>
          </div>
        </div>
        <div className="derechos-reservados">
          All rights reserved by state university of Milagro - Unemi
        </div>
      </div>
    </div>
  );
};

export default Footer;
