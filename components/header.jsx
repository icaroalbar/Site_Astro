import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {

    return (

        <>
            <div className={`bg-gradient-to-r from-azulastro-700 to-azulastro-500 ${styles.header}`}>
                <div className="container mx-auto px-12 py-6 md:py-0">
                    <div className="h-[90vh] grid grid-cols-12 content-center">
                        <div className="col-span-12 xl:col-span-6">
                            <h4 className="text-amareloastro-500 font-semibold text-xl my-5 transform duration-1000">Market Data Cloud</h4>
                            <h1 className="text-cinzaastro-300 leading-none font-light text-5xl mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                            <p className="mb-12 text-justify text-amareloastro-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam assumenda quod culpa velit, nihil enim ipsum quam possimus, a veritatis tempora odit! Commodi, quos. Quisquam animi adipisci architecto repudiandae numquam.</p>
                            <Link href="#" passHref ><button type="button" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Próximas turmas</button></Link>
                        </div>

                        <div className="invisible mx-auto text-cinzaastro-300 xl:visible xl:col-span-6">
                            <Image src="/images/moeda.png" width="500" height="327" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
