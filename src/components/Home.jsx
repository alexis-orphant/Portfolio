import React from "react";
import { HiArrowRight } from "react-icons/hi";
import FotoCv from "../assets/2.jpg";
import { Link } from "react-scroll";

function Home() {
    return (
        <section
            name="home"
            className="bg-gray-800 static w-full h-max pt-[100px] lg:flex items-center lg:h-screen"
        >
            {/* container */}
            <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600 text-xl">Hola, mi nombre es</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                    Alexis Orphant
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-teal-400">
                    Soy Desarrollador Front-End.
                </h2>
                <p className="text-white py-4 max-w[700px]">
                    Actualmente soy Desarrollador Front-end, en camino a ser
                    Desarrollador Full-stack
                </p>
                <div>
                    <Link to="proyects" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-700">
                            Ver Proyectos
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <figure className="w-[250px] pt-5 mx-auto lg:w-[320px]">
                <img className="" src={FotoCv} alt="foto cv" />
            </figure>
        </section>
    );
}

export default Home;
