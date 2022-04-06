import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
    return (
        <>
            <div className={`col-span-12 sm:col-span-6 xl:col-span-3`}>
                <div className={`border border-amareloastro-500 text-white py-14 px-6 rounded-xl flex justify-center items-center overflow-hidden duration-500 bg-gradient-to-r from-azulastro-500 to-azulastro-700 hover:-translate-y-2`}>
                    <div className={`text-center z-10 duration-500 mb-4`}>
                        <FontAwesomeIcon icon={props.icon} size="4x" />
                        <h3 className="text-3xl py-8 text-amareloastro-500">{props.titule}</h3>
                        <p className="text-base font-light z-10 duration-500">{props.info}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Section01() {

    return (
        <>
            <div className="bg-azulastro-500">
                <div className={`container mx-auto p-12`}>
                    <div className="text-center">
                        <h2 className="text-3xl pb-10 font-semibold text-white">Vantagens</h2>
                        <p className="text-amareloastro-500">Com o foco na inovação, a Astrocrypto disponibiliza um método de aprendizado baseado na prática. Nossas aulas têm como foco proporcionar o conhecimento de modo simples e direto. Conheça, agora, os nossos diferenciais:</p>
                    </div>
                    <div className="grid grid-cols-12 gap-4 py-12">
                        <Card titule="Aulas Híbridas" icon="fa-solid fa-book" info="Mentoria que abrange aulas presenciais e online, para que o aluno possa escolher o melhor método. " />
                        <Card titule="Coworking" icon="fa-solid fa-desktop" info="Tire suas dúvidas diretamente com o mentor e participe de debates semanais com os demais alunos. " />
                        <Card titule="Segurança" icon="fa-solid fa-lock" info="Local seguro, com internet e computadores disponibilizados livres e vírus e ameaças externas." />
                        <Card titule="Suporte" icon="fa-solid fa-gears" info="Obtenha suporte online em tempo real através nosso WhatsApp, grupos do Telegram e videoconferências." />
                    </div>
                <div id="depoimentos"></div>
                </div>
            </div>
        </>
    )
}