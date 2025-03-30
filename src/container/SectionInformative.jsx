import { ProcessList } from "./ProcessList"

export const SectionInformative = () => {
  return (
    <section className="w-full px-6 py-10 md:px-12 lg:px-36 flex flex-col space-y-14 md:h-screen justify-center">

        <div className="text-center">
            <h2 className="font-extrabold text-2xl">Gestion de Calidad y Procesos</h2>
            <p className="mt-4">Ofrecemos servicios de Gestión de Proyectos, Análisis de Negocios y Gestión de Pruebas con nuestros equipos de expertos que han adquirido experiencia en diferentes sectores para que nuestros clientes puedan mantener altos niveles de calidad</p>
        </div>

        <ProcessList />

    </section>
  )
}

