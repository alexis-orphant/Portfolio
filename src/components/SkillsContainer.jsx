import React from "react";
import Lenguajes from "./Lenguajes";

import HTMLimg from "../assets/html.png";
import CSSimg from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";

function Skills() {
    return (
        <div
            name="skills"
            className=" bg-gray-800 w-full h-full text-white py-[90px]"
        >
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                        Skills técnicas
                    </p>
                    <p className="py-4">
                        Estas son las tecnologías con las que trabajo:
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <Lenguajes img={HTMLimg} alt="Html" />
                    <Lenguajes img={CSSimg} alt="CSS" />
                    <Lenguajes img={JavaScript} alt="JavaScript" />
                    <Lenguajes img={ReactImg} alt="React" />
                    <Lenguajes img={GitHub} alt="Git / GitHub" />
                    <Lenguajes img={Tailwind} alt="Tailwind CSS" />
                    <Lenguajes img={Bootstrap} alt="Bootstrap" />
                </div>
            </div>
        </div>
    );
}

export default Skills;
