import React from 'react'
import "./videosConjuntos.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContenidoAyuda from './AyudaContenido_Components/ContenidoAyuda';

const VideosConjuntos = () => {
  return (
    <div className='videos-ayuda-contenedor'>
        <div className='tipo-ruta-name'>Contenido de Ayuda</div>
        <Header></Header>
        <ContenidoAyuda></ContenidoAyuda>
        <Footer></Footer>
    </div>
  )
}

export default VideosConjuntos;