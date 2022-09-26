import React from "react";
import Proyects from "./Proyects";

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
                    <Proyects />
                </div>
            </div>
        </div>
    );
}

export default Works;
