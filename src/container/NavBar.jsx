import { IoMenu } from "react-icons/io5";

export const NavBar = () => {
  return (
    <nav className="flex w-full place-content-between lg:place-content-end items-center p-6 lg:px-16">

        <ul className=" hidden lg:flex lg:space-x-10 mr-6 font-bold">
            <li><a href="#">Soluciones y Servicios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Tecnologías</a></li>
            <li><a href="#">Recursos Humanos</a></li>
            <li><a href="#">Corporativo</a></li>
        </ul>

        <IoMenu className="text-3xl cursor-pointer lg:hidden"/>

        <button type="button" className="px-4 py-2 bg-[#F84646] text-white rounded">Contacto</button>
    </nav>
  )
}

