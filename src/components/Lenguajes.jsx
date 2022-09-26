import React from "react";
import HTMLimg from "../assets/html.png";
import CSSimg from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";


function Lenguajes() {
    const lenguajes = [
        {
            id: 1,
            img: HTMLimg,
            alt: "Html",
        },
        {
            id: 2,
            img: CSSimg,
            alt: "CSS",
        },
        {
            id: 3,
            img: JavaScript,
            alt: "JavaScript",
        },
        {
            id: 4,
            img: ReactImg,
            alt: "React",
        },
        {
            id: 5,
            img: GitHub,
            alt: "Git / GitHub",
        },
        {
            id: 6,
            img: Tailwind,
            alt: "Tailwind",
        },
        {
            id: 7,
            img: Bootstrap,
            alt: "Bootstrap",
        },
    ];
    return lenguajes.map(({id, img, alt }) => (
        <div key={id} className="shadow-md shadow-black">
            <img className="w-20 mx-auto py-4" src={img} alt={alt} />
            <p className="my-4">{alt}</p>
        </div>
    ));
}

export default Lenguajes;
