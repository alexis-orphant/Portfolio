import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-white">
            <div>
                <p className="font-signature font-extrabold text-5xl ">A.O</p>
            </div>

            {/* menu */}
            <nav className="hidden md:flex">
                <ul className="hidden md:flex ">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            Sobre Mí
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="proyects" smooth={true} duration={500}>
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* menu hamburguesa */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* movile menu */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        Sobre Mí
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="proyects"
                        smooth={true}
                        duration={500}
                    >
                        Proyectos
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default NavBar;
