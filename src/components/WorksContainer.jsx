import React from "react";
import Proyects from "./Proyects";

import LebronPage from "../assets/lebronPage.jpg";
import RickAndMorty from "../assets/RickAndMorty.jpg";
import Pomodoro from "../assets/pomodoro.jpg";
import TicTacToe from "../assets/TicTacToe.jpg";
import ReactTasks from "../assets/reactTasks.jpg";
import FoodApp from "../assets/FoodApp.jpg";
import NavBar from "../assets/NavBar.jpg";

function Works() {
    return (
        <div
            name="proyects"
            className="'w-full h-full py-[90px] text-white bg-gray-800"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Proyectos
                    </p>
                    <p className="py-6">Échale un vistazo a mis proyectos:</p>
                </div>

                {/* container */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* grid */}
                    <Proyects
                        title="LeBron James page"
                        imgUrl={LebronPage}
                        page="https://alexis-orphant.github.io/pf-lebron/"
                        repo="https://github.com/alexis-orphant/pf-lebron"
                        description="Página realizada en el curso de desarrollo web de 'CoderHouse'. Utilazando: HTML 5, CSS 3, SASS, Bootstrap"
                    />
                    <Proyects
                        title="Rick & Morty E-commerce"
                        imgUrl={RickAndMorty}
                        page="https://alexis-orphant.github.io/Carrito-pf/"
                        repo="https://github.com/alexis-orphant/Carrito-pf"
                        description="Proyecto realizado en el curso de JavaScript de 'CoderHouse'"
                    />
                    <Proyects
                        title="Pomodoro"
                        imgUrl={Pomodoro}
                        page="https://alexis-orphant.github.io/pomodoro/"
                        repo="https://github.com/alexis-orphant/pomodoro"
                        description="Proyecto con: JavaScript Vanilla y CSS 3"
                    />
                    <Proyects
                        title="Tic-Tac-Toe"
                        imgUrl={TicTacToe}
                        page="https://alexis-orphant.github.io/Tic-tac-toe/"
                        repo="https://github.com/alexis-orphant/Tic-tac-toe"
                        description="Proyecto con: JavaScript Vanilla"
                    />
                    <Proyects
                        title="React JS Tasks"
                        imgUrl={ReactTasks}
                        page="https://alexis-orphant.github.io/react-tasks/"
                        repo="https://github.com/alexis-orphant/react-tasks"
                        description="Primer proyecto con: React JS y Tailwind css"
                    />
                    <Proyects
                        title="Food App"
                        imgUrl={FoodApp}
                        page="https://alexis-orphant.github.io/Food-app/"
                        repo="https://github.com/alexis-orphant/Food-app"
                        description="Proyecto con: React Js y Tailwind CSS"
                    />
                    <Proyects
                        title="Dark / Light mode NarBar"
                        imgUrl={NavBar}
                        page="https://alexis-orphant.github.io/NavBar/"
                        repo="https://github.com/alexis-orphant/NavBar"
                        description="Proyecto con: HTML 5, CSS 3, JavaScript y Tailwind"
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;
