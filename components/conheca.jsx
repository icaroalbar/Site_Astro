import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/section02.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section02() {

    return (
        <>
            <div className={`grid grid-cols-12 bg-gradient-to-r from-indigo-500 ${styles.header}`}>
                <div className={`invisible md:visible md:col-span-6 flex items-center mx-auto`}>
                    <Image src="/images/8432.png" width="500" height="327" alt="" />
                </div>
                <div className="col-span-12 md:col-span-6 p-10 md:p-20">
                    <h2 className="py-2 text-2xl font-semibold border-b-2 border-azulastro-500">Conheça o mudo das criptomoedas</h2>
                    <p className="py-5 text-justify">Com a Astrocrypto você aprende a:</p>
                    <ul className="md:pl-6 text-xl">
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Realizar operações na prática</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Identificar quais moedas mais valorizam</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Operar nas Exchanges e DEX.</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Descobrir possíveis golpes</li>
                    </ul>
                <div id="sobre"></div>
                </div>
            </div>
        </>
    )
}