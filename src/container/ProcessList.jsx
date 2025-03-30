import StarImage from "../assets/image/Star.png"
import FileImage from "../assets/image/File.png"
import FigmaImage from "../assets/image/FigmaLogo.png"
import ChartBarImage from "../assets/image/ChartBar.png"
import ChartPieSliceImage from "../assets/image/ChartPieSlice.png"
import CrownImage from "../assets/image/Crown.png"
import { SvgComponent } from "./SvgComponent"

const ProcessSection = [
  {img: FileImage, title: "Análisis de Documentos", description: "Revisión de archivos y registros. Garantiza precisión, consistencia y cumplimiento", colorSvg: "#FF5391"},
  {img: StarImage, title: "Aprobación y Evaluación", description: "Validación de procesos críticos. Evalúa calidad, efectividad y cumplimiento.", colorSvg: "#7553FF"},
  {img: ChartPieSliceImage, title: "Análisis de Reglas de Negocio", description: "Define normas y procesos. Optimiza decisiones, automatización y eficiencia.", colorSvg: "#FF5353"},
  {img: ChartBarImage, title: "Diagramas de Flujo", description: "Representación visual de procesos. Facilita comprensión, optimización y documentación." , colorSvg: "#53ACFF"},
  {img: CrownImage, title: "Análisis de Interesados", description: "Identifica actores clave. Evalúa necesidades, expectativas e impacto.", colorSvg: "#FFBA53"},
  {img: FigmaImage, title: "Prototipado", description: "Creación de modelos iniciales. Prueba funcionalidades, diseño y experiencia.", colorSvg: "#53C1FF"}
]

export const ProcessList = () => {

  return (
    
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {ProcessSection.length > 0 ? (
        ProcessSection.map((list, index)=>(

          <div key={index} className="flex flex-col items-center text-center space-y-1">
            <div className="relative">
                {index %2 === 0 ? (
                  <>
                  <SvgComponent className="w-12 h-12 absolute top-0 right-0 opacity-90" fill={list.colorSvg}/>
                  </>
                ):(
                  <>
                  <SvgComponent className="w-12 h-12 absolute top-0 left-0 opacity-90" fill={list.colorSvg}/>
                  </>
                )}
              <img src={list.img} className="w-[74px]" aria-label={list.title}/>
            </div>
            <h3 className="text-[18px] font-extrabold">{list.title}</h3>
            <p>{list.description}</p>
            
          </div>
        ))
      ): (
        <p>No hay información para mostrar</p>
      )}
    </div>

  )
}

