import React, { useState } from "react";
import "./appConjuntos3.css";
import Header from "./Components/Header";
import Information from "./Components/Information";
import Set3Conjuntos from "./Conjuntos3_Components/Set3Conjuntos";
import VennDiagram3 from "./Conjuntos3_Components/VennDiagram3";
import Operation3 from "./Conjuntos3_Components/Operation3Conjuntos";
import Visualizer3Conjuntos from "./Conjuntos3_Components/Visualizer3Conjuntos";
import Footer from "./Components/Footer";

const AppConjuntos3 = ({mostrarAlerta}) => {
  const [Universo, setUniverso] = useState([]);
  const [ConjuntoA, setConjuntoA] = useState([]);
  const [ConjuntoB, setConjuntoB] = useState([]);
  const [ConjuntoC, setConjuntoC] = useState([]);
  const [MostrarResultado, setMostrarResultados] = useState(false);
  const [MostrarAyuda, setMostrarAyuda] = useState(false);
  const [Union, setUnion] = useState([]);
  const [InterseccionAB, setInterseccionAB] = useState([]);
  const [InterseccionAC, setInterseccionAC] = useState([]);
  const [InterseccionBC, setInterseccionBC] = useState([]);
  const [InterseccionABC, setInterseccionABC] = useState([]);
  const [ComplementoA, setComplementoA] = useState([]);
  const [ComplementoB, setComplementoB] = useState([]);
  const [ComplementoC, setComplementoC] = useState([]);
  const [DiferenciaAB, setDiferenciaAB] = useState([]);
  const [DiferenciaAC, setDiferenciaAC] = useState([]);
  const [DiferenciaBC, setDiferenciaBC] = useState([]);
  const [DiferenciaABC, setDiferenciaABC] = useState([]);
  const [DiferenciaACB, setDiferenciaACB] = useState([]);
  const [DiferenciaBAC, setDiferenciaBAC] = useState([]);
  const [DiferenciaBCA, setDiferenciaBCA] = useState([]);
  const [DiferenciaCAB, setDiferenciaCAB] = useState([]);
  const [DiferenciaCBA, setDiferenciaCBA] = useState([]);
  const [DiferenciaSimetrica, setDiferenciaSimetrica] = useState([]);
  const [Select, setSelected] = useState("");
  const [MostrarOpciones, setMostrarOpciones] = useState(false);

  // SE SELECCIONA LA OPERACION QUE DESEA VISUALIZAR EL USUARIO
  const handleClickOperation = (operation) => {
    setSelected(operation);
  };

  //SE MUESTRA EL CONTENIDO DE AYUDA SEGUN SEA LA OPERACION
  const obtenerContenido = () => {
    switch (Select) {
      case "union":
        return (
          <div className="pre-text">
              <p><strong>Unión Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A, B y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La <strong>unión</strong> de estos conjuntos combina todos los elementos presentes en A, B y C en un solo conjunto.</p>
              <p>Entonces, el conjunto A, conjunto B y conjunto C se combinarían en:</p>
              <p><strong>C:</strong>{` { ${Union} }`}</p> <br></br>
              <p>Espero que esta explicación te haya servido 🧐.</p>
          </div>
      );
      case "interseccionAB":
        return (
          <div className="pre-text">
              <p><strong>Intersección A ∩ B Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A y B:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
              <p>La <strong>intersección</strong> contiene solo los elementos que están presentes en <strong>ambos conjuntos</strong>.</p>
              <p>Por lo tanto, los elementos comunes son:</p>
              <p><strong>C:</strong>{` { ${InterseccionAB.length > 0 ? InterseccionAB : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te sea útil 🧐.</p>
          </div>
        );
      case "interseccionAC":
        return (
          <div className="pre-text">
              <p><strong>Intersección A ∩ C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La intersección contiene solo los elementos que están presentes en ambos conjuntos.</p>
              <p>Así que los elementos comunes son:</p>
              <p><strong>C:</strong>{` { ${InterseccionAC.length > 0 ? InterseccionAC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te sea útil 🧐.</p>
          </div>
        );
      case "interseccionBC":
        return (
          <div className="pre-text">
              <p><strong>Intersección B ∩ C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos B y C:</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La intersección contiene solo los elementos que están presentes en ambos conjuntos.</p>
              <p>Por lo tanto, los elementos comunes son:</p>
              <p><strong>C:</strong>{` { ${InterseccionBC.length > 0 ? InterseccionBC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te sea útil 🧐.</p>
          </div>
        );
      case "interseccionABC":
        return (
          <div className="pre-text">
              <p><strong>Intersección A ∩ B ∩ C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A, B y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La intersección contiene solo los elementos que están presentes en los tres conjuntos.</p>
              <p>Así que los elementos comunes son:</p>
              <p><strong>C:</strong>{` { ${InterseccionABC.length > 0 ? InterseccionABC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te sea útil 🧐.</p>
          </div>
        );
      case "diferenciaAB":
        return (
          <div className="pre-text">
              <p><strong>Diferencia A - B Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A y B:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
              <p>La <strong>diferencia A - B</strong> contiene los elementos que están en A pero <strong>no están en B</strong>.</p>
              <p>Así que los elementos exclusivos de A son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaAB.length > 0 ? DiferenciaAB : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaAC":
        return (
          <div className="pre-text">
              <p><strong>Diferencia A - C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La <strong>diferencia A - C</strong> contiene los elementos que están en A pero <strong>no están en C</strong>.</p>
              <p>Así que los elementos exclusivos de A son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaAC.length > 0 ? DiferenciaAC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaBC":
        return (
          <div className="pre-text">
              <p><strong>Diferencia B - C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos B y C:</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La <strong>diferencia B - C</strong> contiene los elementos que están en B pero <strong>no están en C</strong>.</p>
              <p>Así que los elementos exclusivos de B son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaBC.length > 0 ? DiferenciaBC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "complementoA":
        return (
          <div className="pre-text">
            <p><strong>Complemento de A respecto al universo:</strong></p> <br></br>
            
            <p>Consideramos el universo y el conjunto A:</p>

            <p><strong>Universo:</strong>{` { ${Universo} }`}</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p><br></br>
            
            <p>El <strong>complemento de A</strong> respecto al universo contiene los elementos que están en el universo pero <strong>no están en A</strong>.</p>
            <p>Esto significa que se buscan todos los elementos que pertenecen al universo y se excluyen lo elemento que pertenecen a A.</p>
            
            <p><strong>C:</strong>{` { ${ComplementoA.length > 0 ? ComplementoA : "∅"} }`}</p> <br></br>
            
            <p>Espero que esta explicación haya sido clara y útil 🧐.</p>
          </div>
        );
      case "complementoB":
        return (
          <div className="pre-text">
            <p><strong>Complemento de B respecto al universo:</strong></p> <br></br>
            
            <p>Consideramos el universo y el conjunto B:</p>

            <p><strong>Universo:</strong>{` { ${Universo} }`}</p>
            <p><strong>A:</strong>{` { ${ConjuntoB} }`}</p><br></br>
            
            <p>El <strong>complemento de B</strong> respecto al universo contiene los elementos que están en el universo pero <strong>no están en B</strong>.</p>
            <p>Esto significa que se buscan todos los elementos que pertenecen al universo y se excluyen lo elemento que pertenecen a B.</p>
            
            <p><strong>C:</strong>{` { ${ComplementoB.length > 0 ? ComplementoB : "∅"} }`}</p> <br></br>
            
            <p>Espero que esta explicación haya sido clara y útil 🧐.</p>
          </div>
        );
      case "complementoC":
        return (
          <div className="pre-text">
            <p><strong>Complemento de C respecto al universo:</strong></p> <br></br>
            
            <p>Consideramos el universo y el conjunto C:</p>

            <p><strong>Universo:</strong>{` { ${Universo} }`}</p>
            <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p><br></br>
            
            <p>El <strong>complemento de C</strong> respecto al universo contiene los elementos que están en el universo pero <strong>no están en C</strong>.</p>
            <p>Esto significa que se buscan todos los elementos que pertenecen al universo y se excluyen lo elemento que pertenecen a C.</p>
            
            <p><strong>C:</strong>{` { ${ComplementoC.length > 0 ? ComplementoC : "∅"} }`}</p> <br></br>
            
            <p>Espero que esta explicación haya sido clara y útil 🧐.</p>
          </div>
        );
      case "diferenciaABC":
        return (
          <div className="pre-text">
              <p><strong>Diferencia A - B - C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A, B y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La <strong>diferencia A - B - C</strong> contiene los elementos que están en A pero <strong>no están en B ni en C</strong>.</p>
              <p>Así que los elementos exclusivos de A son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaABC.length > 0 ? DiferenciaABC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaACB":
        return (
          <div className="pre-text">
              <p><strong>Diferencia A - C - B Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A, C y B:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
              <p>La <strong>diferencia A - C - B</strong> contiene los elementos que están en A pero <strong>no están en C ni en B</strong>.</p>
              <p>Así que los elementos exclusivos de A son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaACB.length > 0 ? DiferenciaACB : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaBAC":
        return (
          <div className="pre-text">
              <p><strong>Diferencia B - A - C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos B, C y A:</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p> <br></br>
              <p>La <strong>diferencia B - A - C</strong> contiene los elementos que están en B pero <strong>no están en A ni en C</strong>.</p>
              <p>Así que los elementos exclusivos de B son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaBAC.length > 0 ? DiferenciaBAC : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaBCA":
        return (
          <div className="pre-text">
              <p><strong>Diferencia B - C - A Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos B, C y A:</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p> <br></br>
              <p>La <strong>diferencia B - C - A</strong> contiene los elementos que están en B pero <strong>no están en C ni en A</strong>.</p>
              <p>Así que los elementos exclusivos de B son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaBCA.length > 0 ? DiferenciaBCA : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaCAB":
        return (
          <div className="pre-text">
              <p><strong>Diferencia C - A - B Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos C, A y B:</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
              <p>La <strong>diferencia C - A - B</strong> contiene los elementos que están en C pero <strong>no están en A ni en B</strong>.</p>
              <p>Así que los elementos exclusivos de C son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaCAB.length > 0 ? DiferenciaCAB : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaCBA":
        return (
          <div className="pre-text">
              <p><strong>Diferencia C - B - A Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos C, B y A:</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p> <br></br>
              <p>La <strong>diferencia C - B - A</strong> contiene los elementos que están en C pero <strong>no están en B ni en A</strong>.</p>
              <p>Así que los elementos exclusivos de C son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaCBA.length > 0 ? DiferenciaCBA : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      case "diferenciaSimentrica":
        return (
          <div className="pre-text">
              <p><strong>Diferencia Simétrica A △ B △ C Explicación:</strong></p> <br></br>
              <p>Tenemos los conjuntos A, B y C:</p>
              <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
              <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p>
              <p><strong>C:</strong>{` { ${ConjuntoC} }`}</p> <br></br>
              <p>La <strong>diferencia simétrica</strong> contiene los elementos que están en <strong>uno u otro conjunto</strong>, pero <strong>no en ambos</strong>.</p>
              <p>Por lo tanto, los elementos únicos son:</p>
              <p><strong>C:</strong>{` { ${DiferenciaSimetrica.length > 0 ? DiferenciaSimetrica : "∅"} }`}</p> <br></br>
              <p>Espero que esta explicación te haya sido útil 🧐.</p>
          </div>
        );
      default:
        break;
    }
  };

  // SE RECOLECTA EL OPERACION A REALIZAR Y SE MUESTRA LA VENTANA DE AYUDA
  const handleHelp = (operacion) => {
    setMostrarAyuda(true);

    switch (operacion) {
      case "union":
        handleClickOperation("union");
        break;
      case "interseccionAB":
        handleClickOperation("interseccionAB");
        break;
      case "interseccionAC":
        handleClickOperation("interseccionAC");
        break;
      case "interseccionBC":
        handleClickOperation("interseccionBC");
        break;
      case "interseccionABC":
        handleClickOperation("interseccionABC");
        break;
      case "diferenciaAB":
        handleClickOperation("diferenciaAB");
        break;
      case "diferenciaAC":
        handleClickOperation("diferenciaAC");
        break;
      case "diferenciaBC":
        handleClickOperation("diferenciaBC");
        break;
      case "complementoA":
        handleClickOperation("complementoA");
        break;
      case "complementoB":
        handleClickOperation("complementoB");
        break;
      case "complementoC":
        handleClickOperation("complementoC");
        break;
      case "diferenciaABC":
        handleClickOperation("diferenciaABC");
        break;
      case "diferenciaACB":
        handleClickOperation("diferenciaACB");
        break;
      case "diferenciaBAC":
        handleClickOperation("diferenciaBAC");
        break;
      case "diferenciaBCA":
        handleClickOperation("diferenciaBCA");
        break;
      case "diferenciaCAB":
        handleClickOperation("diferenciaCAB");
        break;
      case "diferenciaCBA":
        handleClickOperation("diferenciaCBA");
        break;
      case "diferenciaSimentrica":
        handleClickOperation("diferenciaSimentrica");
        break;
      default:
        break;
    }
  };

  // SE HACE EL CALCULO DE LAS OPERACIONES DE LOS CONJUNTOS
  const handleOperacion = (operacion) => {
    setMostrarOpciones(true);

    let union = [];
    let interseccionAB = [];
    let interseccionAC = [];
    let interseccionBC = [];
    let interseccionABC = [];
    let complementoA = [];
    let complementoB = [];
    let complementoC = [];
    let diferenciaAB = [];
    let diferenciaAC = [];
    let diferenciaBC = [];
    let diferenciaABC = [];
    let diferenciaACB = [];
    let diferenciaBAC = [];
    let diferenciaBCA = [];
    let diferenciaCAB = [];
    let diferenciaCBA = [];
    let diferenciaSimetrica = [];

    switch (operacion) {
      case "union":
        //Union de los conjuntos A, B, C
        union = Array.from(new Set([...ConjuntoA, ...ConjuntoB, ...ConjuntoC]));
        setUnion(union);
        break;
      case "interseccionAB":
        // Calculo interseccion A ∩ B
        interseccionAB = ConjuntoA.filter((e) => ConjuntoB.includes(e));
        setInterseccionAB(interseccionAB);
        break;
      case "interseccionAC":
        // Calculo interseccion A ∩ C
        interseccionAC = ConjuntoA.filter((e) => ConjuntoC.includes(e));
        setInterseccionAC(interseccionAC);
        break;
      case "interseccionBC":
        // Calculo interseccion B ∩ C
        interseccionBC = ConjuntoB.filter((e) => ConjuntoC.includes(e));
        setInterseccionBC(interseccionBC);
        break;
      case "interseccionABC":
        // Calculo interseccion A ∩ B ∩ C
        interseccionABC = ConjuntoA.filter(
          (e) => ConjuntoB.includes(e) && ConjuntoC.includes(e)
        );
        setInterseccionABC(interseccionABC);
        break;
      case "complementoA":
        //calculamos complemento A
        complementoA = Universo.filter((e) => !ConjuntoA.includes(e))
        setComplementoA(complementoA);
        break;
      case "complementoB":
        //calculamos complemento B
        complementoB = Universo.filter((e) => !ConjuntoB.includes(e))
        setComplementoB(complementoB);
        break;
      case "complementoC":
        //calculamos complemento C
        complementoC = Universo.filter((e) => !ConjuntoC.includes(e))
        setComplementoC(complementoC);
        break;
      case "diferenciaAB":
        //calculamos A - B
        diferenciaAB = ConjuntoA.filter((e) => !ConjuntoB.includes(e));
        setDiferenciaAB(diferenciaAB);
        break;
      case "diferenciaAC":
        //calculamos A - C
        diferenciaAC = ConjuntoA.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaAC(diferenciaAC);
        break;
      case "diferenciaBC":
        //calculamos B - C
        diferenciaBC = ConjuntoB.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaBC(diferenciaBC);
        break;
      case "diferenciaABC":
        //primero calculamos A - B
        const diferenciaAB_2 = ConjuntoA.filter((e) => !ConjuntoB.includes(e));

        //luego (A - B ) - C
        diferenciaABC = diferenciaAB_2.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaABC(diferenciaABC);
        break;
      case "diferenciaACB":
        //primero calculamos A - C
        const diferenciaAC_2 = ConjuntoA.filter((e) => !ConjuntoC.includes(e));

        //luego (A - C) - B
        diferenciaACB = diferenciaAC_2.filter((e) => !ConjuntoB.includes(e));
        setDiferenciaACB(diferenciaACB);
        break;
      case "diferenciaBAC":
        //primero calculamos B - A
        const diferenciaBA_2 = ConjuntoB.filter((e) => !ConjuntoA.includes(e));

        //luego (B - A) - C
        diferenciaBAC = diferenciaBA_2.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaBAC(diferenciaBAC);
        break;
      case "diferenciaBCA":
        //primero calculamos B - C
        const diferenciaBC_2 = ConjuntoB.filter((e) => !ConjuntoC.includes(e));

        //luego (B - C) - A
        diferenciaBCA = diferenciaBC_2.filter((e) => !ConjuntoA.includes(e));
        setDiferenciaBCA(diferenciaBCA);
        break;
      case "diferenciaCAB":
        //primero calculamos C - A
        const diferenciaCA_2 = ConjuntoC.filter((e) => !ConjuntoA.includes(e));

        //luego (C - A) - B
        diferenciaCAB = diferenciaCA_2.filter((e) => !ConjuntoB.includes(e));
        setDiferenciaCAB(diferenciaCAB);
        break;
      case "diferenciaCBA":
        //primero calculamos C - B
        const diferenciaCB_2 = ConjuntoC.filter((e) => !ConjuntoB.includes(e));

        //luego (C - B) - A
        diferenciaCBA = diferenciaCB_2.filter((e) => !ConjuntoA.includes(e));
        setDiferenciaCBA(diferenciaCBA);
        break;
      case "diferenciaSimentrica":
        // Unión de todos los conjuntos
        const union_2 = Array.from(
          new Set([...ConjuntoA, ...ConjuntoB, ...ConjuntoC])
        );

        //Verificamos si el elemento existe en un solo de los conjuntos
        //Si el conjunto A contiene a (e) eso es verdadero y eso equivale a 1 y no lo contiene eso dara falsa y eso equivale a 0
        //y asi mismo con los demas conjutos
        //Si la suma es mas de 2 quiere decir que ese elemento pertenece a mas de un conjunto lo cual no se incluira en el array
        //Si la suma es 1 se significa que el elemento pertenece a un solo conjunto y se agregara ese elemento al array
        diferenciaSimetrica = union_2.filter(
          (e) =>
            ConjuntoA.includes(e) +
              ConjuntoB.includes(e) +
              ConjuntoC.includes(e) ===
            1
        );
        setDiferenciaSimetrica(diferenciaSimetrica);
        break;

      default:
        break;
    }
  };

  return (
    <div className="contenedor-conjuntos3">
      <div className="tipo-ruta-name">3 Conjuntos</div>
      <Header></Header>
      <Information></Information>
      <Set3Conjuntos
        mostrarAlerta={mostrarAlerta}
        Universo={Universo}
        setUniverso={setUniverso}
        ConjuntoA={ConjuntoA}
        setConjuntoA={setConjuntoA}
        ConjuntoB={ConjuntoB}
        setConjuntoB={setConjuntoB}
        ConjuntoC={ConjuntoC}
        setConjuntoC={setConjuntoC}
        MostrarResultado={MostrarResultado}
        setMostrarResultados={setMostrarResultados}
      ></Set3Conjuntos>
      <VennDiagram3
        Universo={Universo}
        ConjuntoA={ConjuntoA}
        ConjuntoB={ConjuntoB}
        ConjuntoC={ConjuntoC}
        MostrarResultado={MostrarResultado}
      ></VennDiagram3>
      <Operation3
        MostrarAyuda={MostrarAyuda}
        setMostrarAyuda={setMostrarAyuda}
        onOperation={handleOperacion}
        MostrarResultado={MostrarResultado}
        handleHelp={handleHelp}
        Select={Select}
        obtenerContenido={obtenerContenido}
      ></Operation3>
      <Visualizer3Conjuntos
        Union={Union}
        InterseccionAB={InterseccionAB}
        InterseccionAC={InterseccionAC}
        InterseccionBC={InterseccionBC}
        InterseccionABC={InterseccionABC}
        ComplementoA={ComplementoA}
        ComplementoB={ComplementoB}
        ComplementoC={ComplementoC}
        DiferenciaAB={DiferenciaAB}
        DiferenciaAC={DiferenciaAC}
        DiferenciaBC={DiferenciaBC}
        DiferenciaABC={DiferenciaABC}
        DiferenciaACB={DiferenciaACB}
        DiferenciaBAC={DiferenciaBAC}
        DiferenciaBCA={DiferenciaBCA}
        DiferenciaCAB={DiferenciaCAB}
        DiferenciaCBA={DiferenciaCBA}
        DiferenciaSimetrica={DiferenciaSimetrica}
        MostrarOpciones={MostrarOpciones}
      ></Visualizer3Conjuntos>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default AppConjuntos3;
