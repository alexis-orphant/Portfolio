import React from "react";
import LebronPage from "../assets/lebronPage.jpg";
import RickAndMorty from "../assets/RickAndMorty.jpg";
import Pomodoro from "../assets/pomodoro.jpg";
import TicTacToe from "../assets/TicTacToe.jpg";
import ReactTasks from "../assets/reactTasks.jpg";
import FoodApp from "../assets/FoodApp.jpg";

function Proyects() {

    const proyectos = [
        {
            id: 1,
            imgUrl: LebronPage,
            page: "https://alexis-orphant.github.io/pf-lebron/",
            repo: "https://github.com/alexis-orphant/pf-lebron",
            description: "Primer página con: HTML, CSS (SASS) y Bootstrap ",
        },
        {
            id: 2,
            imgUrl: RickAndMorty,
            page: "https://alexis-orphant.github.io/Carrito-pf/",
            repo: "https://github.com/alexis-orphant/Carrito-pf",
            description: "Primer proyecto con: JavaScript Vanilla",
        },
        {
            id: 3,
            imgUrl: Pomodoro,
            page: "https://alexis-orphant.github.io/pomodoro/",
            repo: "https://github.com/alexis-orphant/pomodoro",
            description: "Primer proyecto con: JavaScript Vanilla",
        },
        {
            id: 4,
            imgUrl: TicTacToe,
            page: "https://alexis-orphant.github.io/Tic-tac-toe/",
            repo: "https://github.com/alexis-orphant/Tic-tac-toe",
            description: "Primer proyecto con: JavaScript Vanilla",
        },
        {
            id: 5,
            imgUrl: ReactTasks,
            page: "https://alexis-orphant.github.io/react-tasks/",
            repo: "https://github.com/alexis-orphant/react-tasks",
            description: "Primer proyecto con: JavaScript Vanilla",
        },
        {
            id: 6,
            imgUrl: FoodApp,
            page: "https://alexis-orphant.github.io/Food-app/",
            repo: "https://github.com/alexis-orphant/Food-app",
            description: "Primer proyecto con: JavaScript Vanilla",
        },
    ];

    return proyectos.map(({id, imgUrl, page, repo, description }) => (
        <div key={id}
            style={{ backgroundImage: `url(${imgUrl})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
        >
            {/* hover */}

            <div className="opacity-0 group-hover:opacity-100">
                <div>
                    <p className="text-lg font-bold text-white tracking-wider pl-2">
                        {description}
                    </p>
                    <div className="pt-8 text-center">
                        <a href={page} target="_blank">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                                Página
                            </button>
                        </a>
                        <a href={repo} target="_blank">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                                Repositorio
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));

    // <div
    //     style={{ backgroundImage: `url(${LebronPage})` }}
    //     className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
    // >
    //     {/* hover */}

    //     <div className="opacity-0 group-hover:opacity-100">
    //         <div>
    //             <span className="text-2xl font-bold text-white tracking-wider">
    //                 Página HTML
    //             </span>
    //             <div className="pt-8 text-center">
    //                 <a href="">
    //                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
    //                         Página
    //                     </button>
    //                 </a>
    //                 <a href="">
    //                     <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
    //                         Repositorio
    //                     </button>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}

export default Proyects;
