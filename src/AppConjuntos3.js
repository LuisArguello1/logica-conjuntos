import React, { useState } from "react";
import "./appConjuntos3.css";
import Header from "./Components/Header";
import Set3Conjuntos  from "./Conjuntos3_Components/Set3Conjuntos";
import VennDiagram3 from "./Conjuntos3_Components/VennDiagram3";
import Footer from "./Components/Footer";

const AppConjuntos3 = () => {
  const [ConjuntoA, setConjuntoA] = useState([]);
  const [ConjuntoB, setConjuntoB] = useState([]);
  const [ConjuntoC, setConjuntoC] = useState([]);
  const [MostrarResultado, setMostrarResultados] = useState(false);
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
      <VennDiagram3 ConjuntoA={ConjuntoA} ConjuntoB={ConjuntoB} ConjuntoC={ConjuntoC} MostrarResultado={MostrarResultado}></VennDiagram3>
      <Footer></Footer>
    </div>
  );
};

export default AppConjuntos3;
