import React from 'react'
import "./comentarios.css"
import Header from './Components/Header'
import VisualizerComents from './Comentarios_Users_Components/VisualizerComents'
import Footer from './Components/Footer'

const Comentarios = () => {
  return (
    <div className='page-comentarios-app'>
        <div className='tipo-ruta-name'>Comentarios</div>
        <Header></Header>
        <VisualizerComents></VisualizerComents>
        <Footer></Footer>
    </div>
  )
}

export default Comentarios