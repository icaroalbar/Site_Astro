import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/section02.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Depoimento(props) {

    return (
        <>
            <p><FontAwesomeIcon icon="fa-solid fa-quote-left" />
                &ensp;{props.texto}&ensp;
                <FontAwesomeIcon icon="fa-solid fa-quote-right" /></p>
            <p className="italic text-right mt-4">{props.nome}</p>
        </>
    )

}

export default function Section04() {

    return (
        <>
            <div className={`py-12 ${styles.header}`}>
                <div className={`container mx-auto p-12 text-azulastro-700`}>
                    <div className="text-center">
                        <h2 className="text-3xl pb-10 font-semibold">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum distinctio, corporis incidunt facilis delectus amet eaque inventore voluptatibus labore ipsam sint, eveniet minus dolorem necessitatibus harum repudiandae excepturi repellendus?</p>
                    </div>
                    <div className="owl-carousel owl-theme grid grid-cols-12 gap-y-10 md:gap-16 py-12 text-justify">
                        <div className="col-span-12 md:col-span-4">
                            <Depoimento texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum distinctio, corporis incidunt facilis delectus amet eaque inventore"
                                nome="Icaro Albar" />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <Depoimento texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum distinctio, corporis incidunt facilis delectus amet eaque inventore"
                                nome="Icaro Albar" />
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <Depoimento texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum distinctio, corporis incidunt facilis delectus amet eaque inventore"
                                nome="Icaro Albar" />
                        </div>                        
                    </div>
                </div>
                
            </div>
        </>
    )
}