import React from "react";

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
                            Hola!! Soy Alexis,es un placer que me conozcas,
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
                                Educacion / Cursos
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Bachiller en Ciencias Sociales</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                Escuela Secundaria "Nuestra Señora de la
                                Merced". Finalizado en 2016
                            </p>
                        </div>
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Ingenieria Mecanica</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                Universidad Tecnologica Nacional (UTN - FRLP).
                                Feb. 2017 - Ago. 2017
                            </p>
                        </div>
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Diseño Industrial</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                Universidad Nacional de la Plata, Facultad de
                                Bellas Artes. Feb. 2018 - Mar. 2020
                            </p>
                        </div>
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Curso de Desarrollo web</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                CoderHouse. Mar. 2022 - May. 2022.
                            </p>
                            <p className="text-lg font-semibold">
                                (HTML 5, CSS 3, SASS, Git, GitHub, Bootstrap)
                            </p>
                        </div>
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Curso de JavaScript</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                CoderHouse. May. 2022 - Jul. 2022
                            </p>
                        </div>
                        <div className="sm:text-right text-2xl font-bold ">
                            <p>Curso de JavaScript</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">
                                OpentBootcamp. Ago. 2022 - Sept. 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
