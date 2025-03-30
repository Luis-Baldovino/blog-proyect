import { useState, useEffect } from "react";
import { SectionHero } from "./SectionHero"
import { NavBar } from "./NavBar";
import imgMobileHero from "../assets/image/imgMobileHero.png"
import imgMediumHero from "../assets/image/imgMediumHero.png"
import imgBigHero from "../assets/image/imgBigHero.png"

{/*useEstate para almacenar la imagen del fondo actual */}
{/*useEffect para cambiar la imagen cuando la venta cambie de tamaño */}
export const Header = () => {

  //backgroundImage guarda la imagen actual, setBackgroundImage la actualiza cuando la ventana cambia de tamaño
  const [backgroundImage, setBackgroundImage] = useState(imgMobileHero);//imagen inicial 

  useEffect (()=>{ //para cambiar la imagen actual
    const updateBackground = () => {
      if (window.innerWidth >= 1024){
        setBackgroundImage(imgBigHero)
      }
      else if(window.innerWidth >= 570){
        setBackgroundImage(imgMediumHero)
      }
      else{
        setBackgroundImage(imgMobileHero)
      }
    }
    updateBackground(); //se pone la imagen correcta cuando se cargue la pagina
    window.addEventListener("resize",updateBackground);
    return ()=> window.removeEventListener("resize", updateBackground);
  },[]);

  return (
    <header className="bg-cover bg-center h-[600px] lg:h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>

      <NavBar />
      <SectionHero />

    </header>
  )
}

