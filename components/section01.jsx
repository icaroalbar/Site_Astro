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
                    <div className="text-center" id="servicos">
                        <h2 className="text-3xl pb-10 font-semibold text-white">Lorem ipsum</h2>
                        <p className="text-amareloastro-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum distinctio, corporis incidunt facilis delectus amet eaque inventore voluptatibus labore ipsam sint, eveniet minus dolorem necessitatibus harum repudiandae excepturi repellendus?</p>
                    </div>
                    <div className="grid grid-cols-12 gap-4 py-12">
                        <Card titule="Icaro" icon="fa-solid fa-beer-mug-empty" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                            inventore?" />
                        <Card titule="Icaro" icon="fa-solid fa-bell" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                            inventore?" />
                        <Card titule="Icaro" icon="fa-solid fa-battery-half" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                            inventore?" />
                        <Card titule="Icaro" icon="fa-brands fa-bilibili" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
                            inventore?" />
                    </div>
                </div>
            </div>
        </>
    )
}