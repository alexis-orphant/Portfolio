import React from "react";

function Proyects({imgUrl, page, repo, description, title}) {
    return (
        <div className="rounded-xl shadow-xl shadow-black/90 bg-gray-700 text-white">
            <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                    <img src={imgUrl} alt="" />
                </div>
                <h5 className="text-xl  md:text-2xl font-bold mt-3 pb-1 ">
                    {title}
                </h5>
                <p className="text-lg text-center py-2 ">
                    {description}
                </p>
                <div className="flex justify-center items-center pt-2">
                    <a href={page} className="mx-auto" target="_blanck">
                        <button className="bg-white text-black font-semibold hover:bg-pink-600 duration-200 hover:text-white p-2 rounded-lg">
                        Página
                    </button>
                    </a>
                    <a href={repo} className="mx-auto" target="_blanck">
                    <button className="bg-white text-black font-semibold hover:bg-pink-600 duration-200 hover:text-white p-2 rounded-lg">
                        Repositorio
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Proyects;
