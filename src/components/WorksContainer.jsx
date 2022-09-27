import React from "react";
import Proyects from "./Proyects";

import LebronPage from "../assets/lebronPage.jpg";
import RickAndMorty from "../assets/RickAndMorty.jpg";
import Pomodoro from "../assets/pomodoro.jpg";
import TicTacToe from "../assets/TicTacToe.jpg";
import ReactTasks from "../assets/reactTasks.jpg";
import FoodApp from "../assets/FoodApp.jpg";

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
                    <p className="py-6">Échale un vistazo a mis proyectos</p>
                </div>

                {/* container */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* grid */}
                    <Proyects
                        imgUrl={LebronPage}
                        page="https://alexis-orphant.github.io/pf-lebron/"
                        repo="https://github.com/alexis-orphant/pf-lebron"
                        description="Primer página con: HTML, CSS (SASS) y Bootstrap "
                    />
                    <Proyects
                        imgUrl={RickAndMorty}
                        page="https://alexis-orphant.github.io/Carrito-pf/"
                        repo="https://github.com/alexis-orphant/Carrito-pf"
                        description="Primer proyecto con: JavaScript Vanilla"
                    />
                    <Proyects
                        imgUrl={Pomodoro}
                        page="https://alexis-orphant.github.io/pomodoro/"
                        repo="https://github.com/alexis-orphant/pomodoro"
                        description="Pomodoro con: JavaScript Vanilla"
                    />
                    <Proyects
                        imgUrl={TicTacToe}
                        page="https://alexis-orphant.github.io/Tic-tac-toe/"
                        repo="https://github.com/alexis-orphant/Tic-tac-toe"
                        description="Tic-Tac-Toe con: JavaScript Vanilla"
                    />
                    <Proyects
                        imgUrl={ReactTasks}
                        page="https://alexis-orphant.github.io/react-tasks/"
                        repo="https://github.com/alexis-orphant/react-tasks"
                        description="Primer proyecto con: React Js"
                    />
                    <Proyects
                        imgUrl={FoodApp}
                        page="https://alexis-orphant.github.io/Food-app/"
                        repo="https://github.com/alexis-orphant/Food-app"
                        description="Proyecto con: React Js y Tailwind CSS"
                    />
                    <Proyects
                        imgUrl={FoodApp}
                        page="https://alexis-orphant.github.io/Food-app/"
                        repo="https://github.com/alexis-orphant/Food-app"
                        description="Proyecto con: React Js y Tailwind CSS"
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;
