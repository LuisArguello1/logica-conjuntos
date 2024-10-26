import React, { useState } from "react";
import "./appConjuntos3.css";
import Header from "./Components/Header";
import Set3Conjuntos from "./Conjuntos3_Components/Set3Conjuntos";
import VennDiagram3 from "./Conjuntos3_Components/VennDiagram3";
import Operation3 from "./Conjuntos3_Components/Operation3Conjuntos";
import Visualizer3Conjuntos from "./Conjuntos3_Components/Visualizer3Conjuntos";
import Footer from "./Components/Footer";

const AppConjuntos3 = () => {
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
    return "no hay nada";
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
      case "diferenciaSimetrica":
        handleClickOperation("diferenciaSimetrica");
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
        // Verifica que los conjuntos no estén vacíos
        if (
          ConjuntoA.length === 0 &&
          ConjuntoB.length === 0 &&
          ConjuntoC.length === 0
        ) {
          console.error("Todos los conjuntos están vacíos");
          break;
        }

        // Verifica que los conjuntos sean arrays
        if (
          !Array.isArray(ConjuntoA) ||
          !Array.isArray(ConjuntoB) ||
          !Array.isArray(ConjuntoC)
        ) {
          console.error("Uno o más conjuntos no son arrays");
          break;
        }

        union = Array.from(new Set([...ConjuntoA, ...ConjuntoB, ...ConjuntoC]));
        setUnion(union);
        break;
      case "interseccionAB":
        interseccionAB = ConjuntoA.filter((e) => ConjuntoB.includes(e));
        setInterseccionAB(interseccionAB);
        break;
      case "interseccionAC":
        interseccionAC = ConjuntoA.filter((e) => ConjuntoC.includes(e));
        setInterseccionAC(interseccionAC);
        break;
      case "interseccionBC":
        interseccionBC = ConjuntoB.filter((e) => ConjuntoC.includes(e));
        setInterseccionBC(interseccionBC);
        break;
      case "interseccionABC":
        interseccionABC = ConjuntoA.filter(
          (e) => ConjuntoB.includes(e) && ConjuntoC.includes(e)
        );
        setInterseccionABC(interseccionABC);
        break;
      case "complementoA":
        complementoA = ConjuntoA.filter(
          (e) => !ConjuntoB.includes(e) && !ConjuntoC.includes(e)
        );
        setComplementoA(complementoA);
        break;
      case "complementoB":
        complementoB = ConjuntoB.filter(
          (e) => !ConjuntoA.includes(e) && !ConjuntoC.includes(e)
        );
        setComplementoB(complementoB);
        break;
      case "complementoC":
        complementoC = ConjuntoC.filter(
          (e) => !ConjuntoA.includes(e) && !ConjuntoB.includes(e)
        );
        setComplementoC(complementoC);
        break;
      case "diferenciaAB":
        diferenciaAB = ConjuntoA.filter((e) => !ConjuntoB.includes(e));
        setDiferenciaAB(diferenciaAB);
        break;
      case "diferenciaAC":
        diferenciaAC = ConjuntoA.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaAC(diferenciaAC);
        break;
      case "diferenciaBC":
        diferenciaBC = ConjuntoB.filter((e) => !ConjuntoC.includes(e));
        setDiferenciaBC(diferenciaBC);
        break;
      case "diferenciaABC":
        diferenciaABC = ConjuntoA.filter(
          (e) => !ConjuntoB.includes(e) && !ConjuntoC.includes(e)
        );
        setDiferenciaABC(diferenciaABC);
        break;
      case "diferenciaACB":
        diferenciaACB = ConjuntoA.filter(
          (e) => !ConjuntoC.includes(e) && !ConjuntoB.includes(e)
        );
        setDiferenciaACB(diferenciaACB);
        break;
      case "diferenciaBAC":
        diferenciaBAC = ConjuntoB.filter(
          (e) => !ConjuntoA.includes(e) && !ConjuntoC.includes(e)
        );
        setDiferenciaBAC(diferenciaBAC);
        break;
      case "diferenciaBCA":
        diferenciaBCA = ConjuntoB.filter(
          (e) => !ConjuntoC.includes(e) && !ConjuntoA.includes(e)
        );
        setDiferenciaBCA(diferenciaBCA);
        break;
      case "diferenciaCAB":
        diferenciaCAB = ConjuntoC.filter(
          (e) => !ConjuntoA.includes(e) && !ConjuntoB.includes(e)
        );
        setDiferenciaCAB(diferenciaCAB);
        break;
      case "diferenciaCBA":
        diferenciaCBA = ConjuntoC.filter(
          (e) => !ConjuntoB.includes(e) && !ConjuntoA.includes(e)
        );
        break;
        setDiferenciaCBA(diferenciaCBA);
      case "diferenciaSimentrica":
        diferenciaAB = ConjuntoA.filter((e) => !ConjuntoB.includes(e)).concat(
          ConjuntoB.filter((e) => !ConjuntoA.includes(e))
        );

        // Diferencia simétrica de (A Δ B) con C
        diferenciaSimetrica = diferenciaAB
          .filter((e) => !ConjuntoC.includes(e))
          .concat(ConjuntoC.filter((e) => !diferenciaAB.includes(e)));

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
      <Set3Conjuntos
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
