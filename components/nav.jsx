import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import style from '../styles/nav.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="fixed shadow-sm w-full bg-azulastro-500 border-b border-amareloastro-500 z-50">
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
                            <div className="hidden lg:block">
                                <div className="ml-10 flex items-baseline space-x-10">
                                    <Link
                                        to="sobre"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:text-amareloastro-500 cursor-pointer text-white'
                                    >
                                        Sobre
                                    </Link>
                                    <Link
                                        to="vantagens"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:text-amareloastro-500 cursor-pointer text-white'
                                    >
                                        Vantagens
                                    </Link>
                                    <Link
                                        to="depoimentos"
                                        smooth={true}
                                        offset={50}
                                        duration={1000}
                                        className='hover:text-amareloastro-500 cursor-pointer text-white'
                                    >
                                        Depoimentos
                                    </Link>

                                    <a href="./contact" className='hover:text-amareloastro-500 cursor-pointer text-white'>Contato</a>


                                    <a href="./contact"
                                        className="cursor-pointer inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Matricule-se
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex lg:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:ring-offset-2"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-azulastro-500 px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <Link
                                    to="sobre"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-amareloastro-500 text-white block px-3 py-2 text-base font-medium"
                                >
                                    Sobre
                                </Link>
                                <Link
                                    to="vantagens"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-amareloastro-500 text-white block px-3 py-2 text-base font-medium"
                                >
                                    Vantagens
                                </Link>
                                <Link
                                    to="depoimentos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className=" cursor-pointer hover:bg-amareloastro-500 text-white block px-3 py-2 text-base font-medium"
                                >
                                    Depoimentos
                                </Link>
                                <a href="./contact" className=" cursor-pointer hover:bg-amareloastro-500 text-white block px-3 py-2 text-base font-medium">Contato</a>
                                <a href="./contact"
                                    className="cursor-pointer inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Matricule-se
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    );
}