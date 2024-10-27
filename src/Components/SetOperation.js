import React from "react";
import { useState } from "react";
import "../Css/set.css";
import Swal from "sweetalert2"

const SetOperation = ({
  setConjuntoA,
  setConjuntoB,
  ConjuntoA,
  ConjuntoB,
  MostrarResultado,
  setMostrarResultados,
}) => {
  const [Elementos1, setElementos1] = useState("");
  const [Elementos2, setElementos2] = useState("");

  //Se valida las entradas que el patron sea 1,2,3 y etc
  const validarElemento = (conjunto) => {
    const regex = /^\d+(,\d+)*$/;
    return regex.test(conjunto);
  };

  const handleConjuntoA_ConjuntoB = () => {

    //se confirma la validacion de los conjuntos
    if (validarElemento(Elementos1) && validarElemento(Elementos2)){

      //se le quita la (,) y se los convierte en un array
      //En caso de que halla espacios tambien se eliminan con .trim()
      const nuevosElementosA = Elementos1.split(",").map((e) => e.trim());
      const nuevosElementosB = Elementos2.split(",").map((e) => e.trim());

      //Utilizamos Set para que no aya elementos repetidos y si se agrega un nuevo elemento
      //se lo agrega a la ultima posicion del array
      setConjuntoA((prev) => Array.from(new Set([...prev, ...nuevosElementosA])));
      setConjuntoB((prev) => Array.from(new Set([...prev, ...nuevosElementosB])));

      //se muestran los resultados cambiando el estado a true
      setMostrarResultados(true);

      //se reinician los inputs 
      setElementos1("");
      setElementos2("");
    }else{

      //En caso de no haber contenido en los inputs se da este mensaje
      //O en caso que no se cumpla el patron
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error, ingresa solo datos separados por comas (ej. 1,2,3)",
        showConfirmButton: false,
        timer: 4000,
      });
    }

      
    
  };

  const limpiarEntradas = () => {
    //se reinicia la pagina para eliminar todo el contenido y reiniciar los estados
    window.location.reload();
  };

  const renderConjutos = (array) => {
    // se retorna los elementos de los conjuntos y react los renderiza
    return array.map((item, index) => <div key={index}>{item}</div>)
  }

  return (
    <div className="contenedor-entradas-conjuntos">
      <h2 className="titulo-setoperation">
        Ingrese los datos de los conjuntos
      </h2>
      <div className="contenedor-entradas-buttons">
        <div className="contenedor-entradas-conjunto">
          <div className="entradas-conjunto">
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
          
          <button className="button" onClick={() => handleConjuntoA_ConjuntoB()}>
            Ingresar Datos
          </button>
          <button className="button" onClick={() => limpiarEntradas()}>
            Limpiar
          </button>
        </div>
      </div>
      {MostrarResultado && (
        <div className="contenedor-Json">
          {/* Renderizado conjunto A */}
          <div className="conjunto">
            <strong className="titulo-datos">Contenido conjunto A: </strong>
            <div className="resultado">{renderConjutos(ConjuntoA)}</div>
          </div>
          {/* Renderizado conjunto B */}
          <div className="conjunto">
            <strong className="titulo-datos">Contenido conjunto B: </strong>
            <div className="resultado">{renderConjutos(ConjuntoB)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetOperation;
