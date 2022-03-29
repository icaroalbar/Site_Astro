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
                    <h2 className="py-2 text-3xl font-semibold border-b-2 border-azulastro-500">Lorem ipsum dolor sit amet</h2>
                    <p className="py-5 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium debitis praesentium.</p>
                    <ul className="md:pl-6 text-xl">
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Lorem ipsum dolor sit amet</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Lorem ipsum dolor sit amet</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Lorem ipsum dolor sit amet</li>
                        <li className="py-3"><FontAwesomeIcon icon="fa-solid fa-circle-check" className="pr-2" />Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
        </>
    )
}