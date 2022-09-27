import React from "react";

function Proyects({imgUrl, page, repo, description}) {
    return (
        <div
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
    );
}

export default Proyects;
