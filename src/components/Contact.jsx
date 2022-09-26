import React from "react";

function Contact() {
    return (
        <div
            name="contact"
            className="w-full py-[90px] h-full bg-gray-800 flex justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/6e98881b-7459-4ceb-b0b7-4dbd06ba310b"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
                        Contacto
                    </p>
                    <p className="text-white pt-4">
                        // Envia el formulario de abajo o contactame por{" "}
                        <span className="font-bold hover:text-blue-500 cursor-pointer">
                            <a
                                href="https://www.linkedin.com/in/alexis-orphant-247877234/"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </span>{" "}
                        o por{" "}
                        <span className="font-bold hover:text-blue-500 cursor-pointer">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alecne99@gmail.com"
                                target="_blank"
                            >
                                Email
                            </a>
                        </span>
                    </p>
                </div>
                <input
                    className="my-2 p-2 bg-slate-300"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                />
                <input
                    className="my-2 p-2 bg-slate-300"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-slate-300 my-2 p-2"
                    placeholder="Mensaje"
                    name="message"
                    rows="10"
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-700 px-4 py-3 my-4 mx-auto flex items-center">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contact;
