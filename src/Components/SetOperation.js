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

  const validarElemento = (conjunto) => {
    const regex = /^\d+(,\d+)*$/;
    return regex.test(conjunto);
  };

  const handleConjuntoA_ConjuntoB = () => {

    if (validarElemento(Elementos1) || validarElemento(Elementos2)){
      const nuevosElementosA = Elementos1.split(",").map((e) => e.trim());
      const nuevosElementosB = Elementos2.split(",").map((e) => e.trim());


      setConjuntoA((prev) => Array.from(new Set([...prev, ...nuevosElementosA])));
      setConjuntoB((prev) => Array.from(new Set([...prev, ...nuevosElementosB])));

      console.log(Array.from(new Set([...ConjuntoA, ...nuevosElementosA])));
      console.log(Array.from(new Set([...ConjuntoB, ...nuevosElementosB])));

      setMostrarResultados(true);
      setElementos1("");
      setElementos2("");
    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error, ingresa solo números separados por comas (ej. 1,2,3)",
        showConfirmButton: false,
        timer: 4000,
      });
    }

      
    
  };

  const limpiarEntradas = () => {
    window.location.reload();
  };

  const renderConjutos = (array) => {
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
              <input
                placeholder="Ej: 1,2,3,4,5"
                type="text"
                required=""
                value={Elementos1}
                onChange={(e) => setElementos1(e.target.value)}
              ></input>
              <span>Conjunto 1:</span>
            </div>
            <div className="inputBox">
              <input
                placeholder="Ej: 3,4,5,6,7"
                type="text"
                required=""
                value={Elementos2}
                onChange={(e) => setElementos2(e.target.value)}
              ></input>
              <span>Conjunto 2:</span>
            </div>
          </div>
        </div>
        <div className="contenedor-btn-logica">
          <button class="button" onClick={() => handleConjuntoA_ConjuntoB()}>
            Ingresar Datos
          </button>
          <button class="button" onClick={() => limpiarEntradas()}>
            Limpiar
          </button>
        </div>
      </div>
      {MostrarResultado && (
        <div className="contenedor-Json">
          <div className="conjunto">
            <strong className="titulo-datos">Contenido conjunto A: </strong>
            <div className="resultado">{renderConjutos(ConjuntoA)}</div>
          </div>
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
