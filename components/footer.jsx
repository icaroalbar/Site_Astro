import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    const Ano = new Date().getFullYear();

    return (
        <>
            <footer className={`${styles.footer} list-none p-12 border-t border-amareloastro-500 bg-azulastro-500 text-cinzaastro-300`}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="mx-auto pb-14 col-span-12 md:col-span-4 flex items-center">
                            <a href={"/"}><Image
                                src="/images/astro.png"
                                width="150px"
                                height="100px"
                                alt="Logo do Grupo HP"
                            /></a>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                            <h4 className="text-lg">menu</h4>
                            <div className={`text-brancohp pt-10 text-xs text-cinzastro ${styles.contato}`}>
                                <li className="mt-2"><a href="./#sobre" passHref>Sobre</a></li>
                                <li className="mt-2"><a href="./#depoimentos" passHref>Depoimentos</a></li>
                                <li className="mt-2"><a href="./contact" passHref>Contato</a></li>
                            </div>
                            <a href="./contact" passHref type="button" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out mt-4 ml-4">Matricule-se</a>
                        </div>
                        <div className="col-span-6 md:col-span-4">
                            <h4>atendimento</h4>
                            <div className={`text-brancohp pt-10 text-xs text-cinzastro ${styles.contato}`}>
                                <span>Contato</span>
                                <p>
                                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                                    &ensp;(21)4040-4148
                                </p>
                                <p>
                                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                    &ensp;contato@astrocrpto.com.br
                                </p>

                                <span>Horário de Atendimento</span>
                                <p>
                                    <FontAwesomeIcon icon="fa-solid fa-clock" />
                                    &ensp;09h às 18h
                                </p>

                                <span>Ouvidoria</span>
                                <p>
                                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                                    &ensp;ouvidoria@astrocrpto.com.br
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-6 pt-6 border-t border-amareloastro-500">
                        <div className="col-span-12 justify-self-center md:col-span-6 md:order-2 md:justify-self-end">

                            <a href="https://web.facebook.com/hpcapitaloficial?_rdc=3&_rdr"
                                target="blank"
                                className="mr-5 duration-300 hover:text-amareloastro-500"
                            ><FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" />
                            </a>
                            <Link href="https://www.instagram.com/hpcapitaloficial/"><a
                                target="blank"
                                className="mr-5 duration-300 hover:text-amareloastro-500"
                            ><FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
                            </a></Link>
                            <Link href="https://api.whatsapp.com/send?phone=552140404148&text=Ol%C3%A1%2C%20Gostaria%20de%20conversar%20com%20voc%C3%AA%20sobre%20o%20Grupo%20HP!"><a
                                target="blank"
                                className="mr-5 duration-300 hover:text-amareloastro-500"
                            ><FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
                            </a></Link>
                            <Link href="https://www.linkedin.com/company/hpcapitaloficial"><a
                                target="blank"
                                className="mr-5 duration-300 hover:text-amareloastro-500"
                            ><FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="xl" />
                            </a></Link>
                        </div>

                        <div
                            className={` ${"mt-5 col-span-12 md:col-span-6 md:order-1 md:mt-0 md:text-left text-center"} ${styles.informacoes
                                }`}
                        >
                            <p>
                                &copy;&ensp;
                                {Ano} AstroCrypto - CNPJ: 34.179.467/0001-62
                            </p>
                            <p>
                                Rua Miguel de Frias, 77 Sala 1501 - Icaraí. CEP: 24220-008 -
                                Niterói,RJ
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}