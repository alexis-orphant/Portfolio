import React from "react";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function AsideBar() {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-t-xl hover:ml-[-10px] duration-300 bg-blue-700">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="https://www.linkedin.com/in/alexis-orphant-247877234/"
                        target="_blank"
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="https://github.com/alexis-orphant"
                        target="_blank"
                    >
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-b-xl">
                    <a
                        className="flex justify-between items-center w-full text-white"
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alecne99@gmail.com"
                        target="_blank"
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AsideBar;
