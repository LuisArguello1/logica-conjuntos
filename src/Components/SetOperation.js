import React from "react";
import { useState } from "react";
import "../Css/set.css";
import Swal from "sweetalert2";

const SetOperation = ({
  mostrarAlerta,
  setUniverso,
  setConjuntoA,
  setConjuntoB,
  Universo,
  ConjuntoA,
  ConjuntoB,
  MostrarResultado,
  setMostrarResultados,
}) => {
  const [Univers, setUnivers] = useState("");
  const [Elementos1, setElementos1] = useState("");
  const [Elementos2, setElementos2] = useState("");

  //Se valida las entradas que el patron sea 1,2,3 y etc
  const validarElemento = (conjunto) => {
    const regex = /^\d+(,\d+)*$/;
    return regex.test(conjunto);
  };

  const validarUniverso = (conjunto1, conjunto2) => {
    const nuevoUniverso = Univers.split(",").map((e) => e.trim());

    const validarConjuntoA = conjunto1.every((e) => nuevoUniverso.includes(e));
    const validarConjuntoB = conjunto2.every((e) => nuevoUniverso.includes(e));

    return validarConjuntoA && validarConjuntoB;
  };


  const handleConjuntoA_ConjuntoB = () => {
    //se confirma la validacion de los conjuntos
    if (
      validarElemento(Elementos1) &&
      validarElemento(Elementos2) &&
      validarElemento(Univers)
    ) {
      //se le quita la (,) y se los convierte en un array
      //En caso de que halla espacios tambien se eliminan con .trim()
      const nuevosElementosA = Elementos1.split(",").map((e) => e.trim());
      const nuevosElementosB = Elementos2.split(",").map((e) => e.trim());

      if (validarUniverso(nuevosElementosA, nuevosElementosB)) {

        const nuevoUniverso = Univers.split(",").map((e) => e.trim()) 

        //Utilizamos Set para que no aya elementos repetidos y si se agrega un nuevo elemento
        //se lo agrega a la ultima posicion del array
        setUniverso((prev) => Array.from(new Set([...prev, ...nuevoUniverso])))
      
        setConjuntoA((prev) =>
          Array.from(new Set([...prev, ...nuevosElementosA]))
        );
        setConjuntoB((prev) =>
          Array.from(new Set([...prev, ...nuevosElementosB]))
        );

        //se muestran los resultados cambiando el estado a true
        setMostrarResultados(true);

        //se reinician los inputs
        setUnivers("")
        setElementos1("");
        setElementos2("");
      }else{
        mostrarAlerta("error", "Error, los datos de los conjuntos no coinciden con el universo")
      }
    } else {
      mostrarAlerta(
        "error",
        "Error en los Conjuntos A o B, verifique el contenido"
      );
    }
  };

  const limpiarEntradas = () => {
    //se reinicia la pagina para eliminar todo el contenido y reiniciar los estados
    window.location.reload();
  };

  const renderConjutos = (array) => {
    // se retorna los elementos de los conjuntos y react los renderiza
    return array.map((item, index) => <div key={index}>{item}</div>);
  };

  return (
    <div className="contenedor-entradas-conjuntos">
      <h2 className="titulo-setoperation">
        Ingrese los datos de los conjuntos
      </h2>
      <div className="contenedor-entradas-buttons">
        <div className="contenedor-entradas-conjunto">
          <div className="entradas-conjunto">
            <div className="inputBox">
              {/* input Universo */}
              <input
                placeholder="Ej: 1,2,3,4,5,3,4,5,6,7,8,9"
                type="text"
                required=""
                value={Univers}
                onChange={(e) => setUnivers(e.target.value)}
              ></input>
              <span>Universo:</span>
            </div>
            <div className="inputBox">
              {/* input Conjunto A */}
              <input
                placeholder="Ej: 1,2,3,4,5"
                type="text"
                required=""
                value={Elementos1}
                onChange={(e) => setElementos1(e.target.value)}
              ></input>
              <span>Conjunto A:</span>
            </div>
            <div className="inputBox">
              {/* input conjunto B */}
              <input
                placeholder="Ej: 3,4,5,6,7"
                type="text"
                required=""
                value={Elementos2}
                onChange={(e) => setElementos2(e.target.value)}
              ></input>
              <span>Conjunto B:</span>
            </div>
          </div>
        </div>
        <div className="contenedor-btn-logica">
          {/* Renderizado conjunto B */}

          <button
            className="button"
            onClick={() => handleConjuntoA_ConjuntoB()}
          >
            Ingresar Datos
          </button>
          <button className="button" onClick={() => limpiarEntradas()}>
            Limpiar
          </button>
        </div>
      </div>
      {MostrarResultado && (
        <div className="contenedor-Json">
          {/* Renderizado Universo */}
          <div className="conjunto">
            <strong className="titulo-datos">Universo: </strong>
            <div className="resultado">{renderConjutos(Universo)}</div>
          </div>
          {/* Renderizado conjunto A */}
          <div className="conjunto">
            <strong className="titulo-datos">Conjunto A: </strong>
            <div className="resultado">{renderConjutos(ConjuntoA)}</div>
          </div>
          {/* Renderizado conjunto B */}
          <div className="conjunto">
            <strong className="titulo-datos">Conjunto B: </strong>
            <div className="resultado">{renderConjutos(ConjuntoB)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetOperation;
