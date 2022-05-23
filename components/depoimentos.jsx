import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/section02.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Depoimento(props) {

    return (
        <div className="col-span-12 md:col-span-4">
            <p><FontAwesomeIcon icon="fa-solid fa-quote-left" />
                &ensp;{props.texto}&ensp;
                <FontAwesomeIcon icon="fa-solid fa-quote-right" /></p>
            <p className="italic text-right mt-4">{props.nome}</p>
        </div>
    )

}

export default function Section04() {

    return (
        <>
            <div className={`py-12 ${styles.header}`}>
                <div className={`container mx-auto p-12 text-azulastro-700`}>
                    <div className="text-center">
                        <h2 className="text-3xl pb-10 font-semibold">Proporcionando grandes realizações!</h2>
                        <p className="text-xl">Temos o orgulho de poder ajudar pessoas à realizar sonhos através do nosso trabalho. Seja o próximo a realizar seus sonhos!</p>
                    </div>
                    <div className="grid grid-cols-12 gap-y-10 md:gap-16 py-12 text-justify">

                        <Depoimento texto="Você com sua simplicidade, me ensinou e deu certo; Nunca tinha visto tanto dinheiro em apenas uma operação e quebrou meu conceito de que somente profissional famoso é quem sabe."
                            nome="Icaro Albar" />

                        <Depoimento texto="Achei que eu nunca iria ter uma sorte dessa: Ganhar bastante dinheiro em dólar em apenas um investimento. Você me ouviu, conversou comigo me deu grandes orientações e indicações e agora eu cheguei em um grande resultado."
                            nome="Thais Oliveira" />

                        <Depoimento texto="Vou indicar você para quem quiser aprender pois tive um grande reultado em apenas uma única moeda."
                            nome="Luiz Carvalho" />

                    </div>
                </div>

            </div>
        </>
    )
}