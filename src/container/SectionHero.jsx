export const SectionHero = () => {
  return (
    <section className="text-center md:text-start px-6 md:px-12 lg:px-16 flex mt-8">
        <div className="flex flex-col gap-8 md:w-[600px] lg:w-[600px] lg:mt-12">
            <h1 className="font-extrabold text-[42px]">Calidad en cada uno de tus trabajos</h1>
            <p className="text-[14px]">Ofrecemos servicios de Gestión de Proyectos, Análisis de Negocios y Gestión de Pruebas con nuestros equipos de expertos que han adquirido experiencia en diversos sectores para que nuestros clientes puedan mantener altos niveles de calidad.</p>

            <div className="bg-white rounded w-full md:w-[422px] lg:w-[502px] px-2 py-3 text-[14px] ">
                <form action="" className="flex items-center justify-between">
                    <input type="search" name="" id="" placeholder="Suscríbete a nuestro boletín" 
                    className="flex-1 px-2 outline-none"/>
                    <button type="button" className="bg-[#F84646] text-white p-3 rounded">Regístrate</button>
                </form>
            </div>
        </div>
    </section>
  )
}


