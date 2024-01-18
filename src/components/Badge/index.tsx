import {  ButtonSecondaryIcon } from "../Button"
import { Github, Linkedin } from "../Icons"
import "./badge.css"
const Badge = () => {
    return (
        <section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4 py-8">
            <section className="drop-shadow-lg  bg row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border  gap-2 justify-end p-6 dark:bg-black xl:col-span-4  lg:p-10">
                <h1 className="text-3xl font-bold">LUCAS MARTÍN ZARANDÓN COSTA</h1>
                <h2 className="font-semibold text-xl">Desarrollador Web FrontEnd</h2>
                <div className="flex gap-4">
                    <ButtonSecondaryIcon icon={<Github />} description="GitHub" />
                    <ButtonSecondaryIcon icon={<Linkedin />} description="Linkedin" />
                </div>
            </section>
            <section className=" drop-shadow-lg  row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border  gap-2 p-4 dark:bg-black xl:col-span-2 lg:px-8">
                <section className="flex flex-col gap-4 justify-center h-full">
                    <h2 className="text-2xl font-bold">Sobre mi</h2>
                    <p className="font-semibold">Docente y Desarrollador Web Front-end con experiencia en diseño, IA y desarrollo de videojuegos</p>
                </section>
            </section>
            <section className="drop-shadow-lg  row-span-1 col-span-3 rounded-3xl bg-white dark:bg-black overflow-hidden border  xl:col-span-1 flex items-center justify-center relative mapboxgl-map">
                <div>
                    <div>
                        <i></i>
                        <p className="font-semibold text-center">Mendoza, Argentina</p>
                    </div>
                </div>
            </section>
            <section className="drop-shadow-lg  row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col  overflow-hidden border  gap-2 items-center justify-center dark:bg-black xl:col-span-1">
                <h2 className="text-6xl font-bold">+2</h2>
                <p className="font-semibold text-xs">Años de experiencia</p>
            </section>
        </section>
    )
}

export default Badge
