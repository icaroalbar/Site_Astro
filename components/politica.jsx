import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/politica.module.css'
import { useEffect } from "react";

export default function Politica() {

    useEffect(() => {
        const valor = localStorage.getItem('politica')
        if(valor) adicionarStorange()
    }, [])

    function adicionarStorange() {
        document.querySelector('.concordo').classList.add('hidden')
        localStorage.setItem('politica', 'ok')
    }

    return (
        <div className={`mx-auto fixed concordo bottom-10 z-50 bg-white border-t-4 border-azulastro-500 p-6 ${styles.containerFluid}`}>
            <div className="text-center md:text-left grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-10">
                    <p>Nós do Grupo HP, para trazer uma melhor experiência em nossos meios de comunicação, utilizamos
                        <i> cookies, localStorange</i> e outras tecnologias semelhantes para personalizar melhor os nosso
                        conteúdos
                        de acordo com o nosso <a href="./termo" className="font-bold hover:border-b-2 border-azulastro-500" target="bland">Termo de Privacidade.</a> Clique em continuar para
                        concordar com estas condições.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-2 flex justify-center">
                    <button onClick={adicionarStorange} type="button" className="inline-block px-6 py-2.5 bg-azulastro-500 text-white font-medium text-xs uppercase rounded hover:bg-blue-900 transition duration-150">Concordo</button>
                </div>
            </div>
        </div>
    )
}