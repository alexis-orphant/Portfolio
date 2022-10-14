import React from "react";

const Cursos = ({title, description, certificado}) => {

    const mostrarCertificado = () =>{
        if(certificado){
            return(
            <a href={certificado} target="_blank">
                <button className="text-white text-sm mt-2 border-2 px-6 py-3 mx-auto hover:bg-pink-600 hover:border-pink-700">
                    Ver Certificado
                </button>
            </a>
            )
        }
    }

    return (
        <>
            <div className="sm:text-right text-2xl font-bold ">
                <p>{title}</p>
                {mostrarCertificado()}
            </div>
            <div>
                <p className="text-lg font-semibold">{description}</p>
            </div>
        </>
    );
};

export default Cursos;
