import React from "react";
import Cursos from "./Cursos";
import DesarrolloWeb from "../assets/desarrollowebCertificado.png"
import CertificadoJS from "../assets/javaScriptCertificado.png"
import CertificadoOpenBootcampJS from "../assets/openbootcampJS.jpg";

function About() {
    return (
        <section
            name="about"
            className="w-full h-full bg-gray-800 text-white py-[90px]"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-6">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            Sobre Mí
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>
                            Hola!! Soy Alexis, es un placer que me conozcas,
                            échale un vistazo a mi Portfolio
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">
                            Continuo capacitándome como desarrollador, quiero
                            seguir aprendiendo y ser desarrollador Full Stack.
                            Soy una persona proactiva, organizada, responsable y
                            con buenas relaciones interpersonales. En busca de
                            mi primer experiencia laboral en el área I.T
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[1000px] pt-8 w-full px-4 grid grid-cols-2 gap-6">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-2xl font-bold inline border-b-4 border-pink-600">
                                Educación / Cursos
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <Cursos
                            title="Bachiller en Ciencias Sociales"
                            description='Escuela Secundaria "Nuestra Señora de la
                                Merced". Finalizado en 2016'
                        />
                        <Cursos
                            title="Ingeniería Mecánica"
                            description="Universidad Tecnológica Nacional (UTN - FRLP).
                                Feb. 2017 - Ago. 2017"
                        />
                        <Cursos
                            title="Diseño Industrial"
                            description="Universidad Nacional de la Plata, Facultad de
                                Bellas Artes. Feb. 2018 - Mar. 2020"
                        />
                        <Cursos
                            title="Curso de Desarrollo web"
                            description="CoderHouse. Mar. 2022 - May. 2022. (HTML 5, CSS 3, SASS, Git, GitHub, Bootstrap)"
                            certificado={DesarrolloWeb}
                        />
                        <Cursos
                            title="Curso de JavaScript"
                            description="CoderHouse. May. 2022 - Jul. 2022"
                            certificado={CertificadoJS}
                        />
                        <Cursos
                            title="Curso de JavaScript"
                            description="OpentBootcamp. Ago. 2022 - Sept. 2022"
                            certificado={CertificadoOpenBootcampJS}
                        />
                        <Cursos
                            title="Inglés"
                            description="Escuela de inglés. Oct. 2022 - Actualmente
                                estudiando"
                        />
                        <Cursos
                            title="Curso de React JS"
                            description="CoderHouse. Oct. 2022 - Actualmente cursando"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
