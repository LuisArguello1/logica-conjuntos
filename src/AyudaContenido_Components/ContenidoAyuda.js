import React from "react";
import "../AyudaContenido_Css/ayudaContenido.css";
import imgConjunto from "../Img/EjemploConjunto.jpg";
import imgUnion from "../Img/UnionConjuntos-ejemplo.jpg";
import imgInterseccion from "../Img/EjemploInterseccion.jpg";
import imgDiferencia from "../Img/EjemploDiferenciaConjuntos.jpg";
import imgComplemento from "../Img/ejemploComplemento.jpg";
import imgDiferenciaSimetrica from"../Img/EjemploDiferenciasimetrica.png"
import logo from "../Img/conjuntoImg.png"


const ContenidoAyuda = () => {
  return (
    <div className="contenedor-contenido-ayuda">
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">¿Qué es un conjunto?</p> <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`Un conjunto es una colección bien definida de elementos distintos que comparten alguna propiedad común. Los elementos de un conjunto pueden ser números, objetos, letras y otros elementos abstractos. A los conjuntos se les suele asignar nombres con letras mayúsculas, como A, B o C, y se escriben usando llaves{}. Dentro de las llaves, los elementos se listan separados por comas.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Un conjunto puede contener cualquier número de elementos, incluso ninguno (en este caso se llama conjunto vacío y se representa como ∅ o {} ).`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo A = { a ,b ,c ,d }, un conjunto que contiene cuatro letras. En este caso, cada elemento en el conjunto A es único y distinto.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgConjunto}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>

      {/* EXPLICACION OPERACION Conjunto */}
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">Unión de Conjuntos</p> <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`La unión de dos conjuntos A y B, denotada como A ∪ B, es el conjunto de todos los elementos que están en A, en B, o en ambos. La operación de unión combina todos los elementos de los conjuntos.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Propiedades: La unión de conjuntos es conmutativa (A ∪ B = B ∪ A) y asociativa (A ∪ (B ∪ C) = (A ∪ B) ∪ C). Además, la unión de un conjunto con el conjunto vacío es el conjunto original: A ∪ ∅ = A.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo: Si A = {1, 2, 3} y B = {3, 4, 5}, entonces la unión A ∪ B = {1, 2, 3, 4, 5}.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgUnion}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>

      {/* EXPLICACION OPEREACION INTERSECCION */}
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">Intersección de Conjuntos</p> <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`La intersección de dos conjuntos A y B, denotada como A ∩ B, es el conjunto que contiene todos los elementos que están en ambos conjuntos. Solo los elementos comunes formarán parte de A ∩ B.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Propiedades: La intersección es conmutativa (A ∩ B = B ∩ A) y su resultado con el conjunto vacío es vacío: A ∩ ∅ = ∅.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo: Si A = {1, 2, 3} y B = {2, 3, 4}, entonces A ∩ B = {2, 3}.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgInterseccion}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>

      {/* EXPLICACION OPEREACION DIFERENCIA DE CONJUNTOS */}
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">Diferencia de Conjuntos</p> <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`La diferencia entre dos conjuntos A y B, denotada como A - B, es el conjunto de elementos que están en A pero no en B. En cambio, B - A contiene los elementos de B que no están en A.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Propiedades: La diferencia no es conmutativa, es decir, A - B ≠ B - A en general. La diferencia entre un conjunto y el vacío es el conjunto mismo: A - ∅ = A.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo: Si A = {1, 2, 3} y B = {2, 3, 4}, entonces A - B = {1} y B - A = {4}.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgDiferencia}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>

      {/* EXPLICACION OPEREACION COMPLEMENTO */}
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">Complemento de un Conjunto</p>{" "}
        <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`El complemento de un conjunto A, denotado como A', incluye todos los elementos del universo U que no están en A. El complemento depende del universo de referencia.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Propiedades: El complemento de un complemento regresa al conjunto original: (A')' = A. La unión de un conjunto con su complemento da el universo: A ∪ A' = U.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo: Si U = {1, 2, 3, 4, 5} y A = {1, 2, 3}, entonces A' = {4, 5}.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgComplemento}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>

      {/* EXPLICACION OPEREACION DIFERENCIA SIMETRICA */}
      <div className="contenedor-explicacion-Conjunto">
        <p className="title-explicacion">Diferencia Simétrica</p> <br></br>
        <div className="contenedor-explicacion-img">
          <div className="contenedor-explicacion">
            <p className="parrafo_explicacion">{`La diferencia simétrica entre dos conjuntos A y B, denotada como A △ B, es el conjunto de elementos que están en A o en B, pero no en ambos. Incluye los elementos de A y B que no están en su intersección.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Propiedades: La diferencia simétrica es conmutativa (A △ B = B △ A). Si dos conjuntos son idénticos, su diferencia simétrica es el conjunto vacío: A △ A = ∅.`}</p>{" "}
            <br></br>
            <p className="parrafo_explicacion">{`Ejemplo: Si A = {1, 2, 3} y B = {2, 3, 4}, entonces A △ B = {1, 4}.`}</p>{" "}
            <br></br>
            <div className="contenedor-contenido-ayuda-footer">
                <img src={logo} alt="img-logo" className="img-logo"></img>
                <p className="title-footer">Logica Conjuntos,</p>
                <p className="subtitle-footer">Matematicas Discretas</p>
            </div>
          </div>
          <div className="contenedor-img-explicacion">
            <img
              src={imgDiferenciaSimetrica}
              alt="img-explicacion"
              className="img-explicacion"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoAyuda;
