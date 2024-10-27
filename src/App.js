import "./App.css";
import Header from "./Components/Header";
import Information from "./Components/Information";
import SetOperation from "./Components/SetOperation";
import Operation from "./Components/Operation";
import Visualizer from "./Components/Visualizer";
import VennDiagram from "./Components/VennDiagram";
import Footer from "./Components/Footer";
import AppConjuntos3 from "./AppConjuntos3";
import Comentarios from "./Comentarios";
import { useState } from "react";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";


function App() {
  const [ConjuntoA, setConjuntoA] = useState([]);
  const [ConjuntoB, setConjuntoB] = useState([]);
  const [Union, setUnion] = useState([]);
  const [Interseccion, setInterseccion] = useState([]);
  const [Diferencia, setDiferencia] = useState([]);
  const [DiferenciaBA, setDiferenciaBA] = useState([]);
  const [ComplementoA, setComplementoA] = useState([]);
  const [ComplementoB, setComplementoB] = useState([]);
  const [DiferenciaAsimetrica, setDiferenciaAsimetrica] = useState([]);
  const [MostrarResultado, setMostrarResultados] = useState(false);
  const [MostrarOpciones, setMostrarOpciones] = useState(false);
  const [MostrarAyuda, setMostrarAyuda] = useState(false);
  const [Select, setSelected] = useState("")


  const handleClickOperation = (operacion) => {
    setSelected(operacion)
  }

  const handleHelp = (operacion) => {
    setMostrarAyuda(true)

    switch (operacion) {
      case "union":
        handleClickOperation("union")
        break;
      case "interseccion":
        handleClickOperation("interseccion")
        break
      case "diferenciaAB":
        handleClickOperation("diferenciaAB")
        break
      case "diferenciaBA":
        handleClickOperation("diferenciaBA")
        break
      case "complementoA":
        handleClickOperation("complementoA")
        break
      case "complementoB":
        handleClickOperation("complementoB")
        break
      case "diferenciaAsimetrica":
        handleClickOperation("diferenciaAsimetrica")
        break
      default:
        break;
    }
  }


  const obtenerContenido = () => {
    switch (Select) {
      // Explicacion de union
      case "union":
        return (<div className="pre-text">
        <p><strong>Union Explicación:</strong></p>  <br></br>  

        <p>Tenemos los conjuntos A y B: </p>
        <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
        <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
        <p>Esta operacion dice que que combina todos los elementos presentes 
        en dos conjuntos distintos en un solo conjunto.</p>
        <p>Entonces el conjunto A y el conjunto B, serian un solo conjunto:</p>

        <p><strong>C:</strong>{` { ${Union.length > 0 ? Union : "∅"} }`}</p> <br></br>
      
        <p>Espero te alla servido esta explicacion 🧐.</p>
        </div>)
      // Explicacion de interseccion
      case "interseccion":
        return (
          <div className="pre-text">
            <p><strong>Intersección explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>La <strong>intersección</strong> de dos conjuntos contiene solo los elementos 
              que están presentes en <strong>ambos conjuntos</strong> al mismo tiempo.</p>
            <p>En este caso, los elementos que se encuentran tanto en A como en B son:</p>
        
            <p><strong>C:</strong>{` { ${Interseccion.length > 0 ? Interseccion : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación haya sido útil 🧐.</p>
          </div>
        );
      // Explicacion de diferencia de A - B
      case "diferenciaAB":
        return (
          <div className="pre-text">
            <p><strong>Diferencia A - B explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>La <strong>diferencia A - B</strong> contiene los elementos que 
              están en A pero <strong>no están en B</strong>.</p>
            <p>En este caso, los elementos exclusivos de A son:</p>
        
            <p><strong>C:</strong>{` { ${Diferencia.length > 0 ? Diferencia : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación haya sido útil 🧐.</p>
          </div>
        );
      // Explicacion de diferencia de B - A
      case "diferenciaBA":
        return (
          <div className="pre-text">
            <p><strong>Diferencia B - A explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>La <strong>diferencia B - A</strong> contiene los elementos que 
              están en B pero <strong>no están en A</strong>.</p>
            <p>En este caso, los elementos exclusivos de B son:</p>
        
            <p><strong>C:</strong>{` { ${DiferenciaBA.length > 0 ? DiferenciaBA : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación haya sido útil 🧐.</p>
          </div>
        );
      // Explicacion complemento A
      case "complementoA":
        return (
          <div className="pre-text">
            <p><strong>Complemento de A explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>El <strong>complemento de A</strong> contiene los elementos de B que 
              <strong> no están en A</strong>.</p>
            <p>En este caso, los elementos que están en B pero no en A son:</p>
        
            <p><strong>C:</strong>{` { ${ComplementoA.length > 0 ? ComplementoA : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación haya sido clara 🧐.</p>
          </div>
        );
      // Explicacion complemento B
      case "complementoB":
        return (
          <div className="pre-text">
            <p><strong>Complemento de B explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>El <strong>complemento de B</strong> contiene los elementos de A que 
              <strong> no están en B</strong>.</p>
            <p>En este caso, los elementos que están en A pero no en B son:</p>
        
            <p><strong>C:</strong>{` { ${ComplementoB.length > 0 ? ComplementoB : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación te haya servido 🧐.</p>
          </div>
        );
      //Explicacion de diferencia Asimetrica
      case "diferenciaAsimetrica":
        return (
          <div className="pre-text">
            <p><strong>Diferencia Asimétrica explicación:</strong></p> <br></br>
        
            <p>Tenemos los conjuntos A y B:</p>
            <p><strong>A:</strong>{` { ${ConjuntoA} }`}</p>
            <p><strong>B:</strong>{` { ${ConjuntoB} }`}</p> <br></br>
        
            <p>La <strong>diferencia asimétrica</strong> contiene los elementos que 
              están en <strong>uno u otro conjunto</strong>, pero no en ambos.</p>
            <p>En este caso, los elementos exclusivos de A o B son:</p>
        
            <p><strong>C:</strong>{` { ${DiferenciaAsimetrica.length > 0 ? DiferenciaAsimetrica : "∅"} }`}</p> <br></br>
        
            <p>Espero que esta explicación haya sido clara y útil 🧐.</p>
          </div>
        );
      default:
        break;
    }
  }

  const handleOperacion = (operacion) => {
    setMostrarOpciones(true);

    let newResult1 = [];
    let newResult2 = [];
    let newResult3 = [];
    let newResult4 = [];
    let newResult5 = [];
    let newResult6 = [];
    let newResult7 = [];

    switch (operacion) {
      case "union":
        newResult1 = Array.from(new Set([...ConjuntoA, ...ConjuntoB]));
        setUnion(newResult1);

        break;

      case "interseccion":
        newResult2 = ConjuntoA.filter((valor) => ConjuntoB.includes(valor));
        setInterseccion(newResult2);

        break;

      case "diferenciaAB":
        newResult3 = ConjuntoA.filter((valor) => !ConjuntoB.includes(valor));
        setDiferencia(newResult3);

        break;

      case "diferenciaBA":
        newResult4 = ConjuntoB.filter((valor) => !ConjuntoA.includes(valor));
        setDiferenciaBA(newResult4);

        break;

      case "complementoA":
        newResult5 = ConjuntoB.filter((valor) => !ConjuntoA.includes(valor));
        setComplementoA(newResult5);

        break;

      case "complementoB":
        newResult6 = ConjuntoA.filter((valor) => !ConjuntoB.includes(valor));
        setComplementoB(newResult6);

        break;

      case "diferenciaAsimetrica":
        const diferenciaAB = ConjuntoA.filter(
          (valor) => !ConjuntoB.includes(valor)
        );
        const diferenciaBA = ConjuntoB.filter(
          (valor) => !ConjuntoA.includes(valor)
        );
        newResult7 = [...diferenciaAB, ...diferenciaBA];
        setDiferenciaAsimetrica(newResult7);

        break;

      default:
        break;
    }
  };
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='tipo-ruta-name'>2 Conjuntos</div>
                <Header></Header>
                <Information></Information>
                <SetOperation
                  setConjuntoA={setConjuntoA}
                  setConjuntoB={setConjuntoB}
                  ConjuntoA={ConjuntoA}
                  ConjuntoB={ConjuntoB}
                  MostrarResultado={MostrarResultado}
                  setMostrarResultados={setMostrarResultados}
                ></SetOperation>
                <VennDiagram
                  ConjuntoA={ConjuntoA}
                  ConjuntoB={ConjuntoB}
                  MostrarResultado={MostrarResultado}
                ></VennDiagram>
                <Operation
                  onOperation={handleOperacion}
                  MostrarResultado={MostrarResultado}
                  MostrarAyuda={MostrarAyuda}
                  setMostrarAyuda={setMostrarAyuda}
                  handleHelp={handleHelp}
                  Select={Select}
                  obtenerContenido={obtenerContenido}
                ></Operation>
                <Visualizer
                  Union={Union}
                  Interseccion={Interseccion}
                  Diferencia={Diferencia}
                  DiferenciaBA={DiferenciaBA}
                  ComplementoA={ComplementoA}
                  ComplementoB={ComplementoB}
                  DiferenciaAsimetrica={DiferenciaAsimetrica}
                  MostrarOpciones={MostrarOpciones}
                ></Visualizer>
                <Footer></Footer>
              </>
            }
          ></Route>

          {/* Rutas paginas */}
          <Route path="/AppConjuntos3" element={<AppConjuntos3></AppConjuntos3>}></Route>
          <Route path="/ComentariosUsers" element={<Comentarios></Comentarios>}></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
