import React from "react";

function Lenguajes({img, alt}) {
    return (
        <div className="shadow-md shadow-black">
            <img className="w-20 mx-auto py-4" src={img} alt={alt} />
            <p className="my-4">{alt}</p>
        </div>
    );
}

export default Lenguajes;
