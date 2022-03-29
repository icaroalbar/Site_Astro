import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section03() {

    return (
        <>
            <div className={`h-full grid grid-cols-12 justify-items-center text-white ${styles.header}`}>
                <div className="col-span-12 md:col-span-5 p-8 mx-auto flex items-center">
                    <Image className="rounded-full" src="/images/LuizHota.jpg" width={400} height={417} alt="" />
                </div>
                <div className="col-span-12 md:col-span-7 p-12 flex items-center">
                    <div>
                        <h2 className="py-2 text-3xl font-semibold border-b-2 border-amareloastro-500">Lorem ipsum dolor sit amet</h2>
                        <p className="py-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum at iste temporibus dolores voluptatum voluptatibus aspernatur dolorum fuga laboriosam soluta impedit, quaerat veniam corrupti, exercitationem tenetur quibusdam obcaecati! Ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium debitis praesentium.</p>
                    </div>
                </div>
            </div>
        </>
    )
}