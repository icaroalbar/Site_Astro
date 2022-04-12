import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import style from '../styles/nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="shadow-sm w-full bg-azulastro-500 border-b border-amareloastro-500 z-50">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <a href="./" className={`${style.logo}`}><Image
                                    src="/images/astroH.png"
                                    width="150px"
                                    height="47px"
                                    alt="Logo do Grupo HP"
                                /></a>
                            </div>
                            <a href="./"
                                className="cursor-pointer inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                 Voltar
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}