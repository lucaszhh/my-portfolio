import AboutMe from "../AboutMe"
import { ButtonSecondary, ButtonSecondaryIcon } from "../Button"
import { Github, Linkedin } from "../Icons"
import "./badge.css"
const Badge = () => {
    return (
        <section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4">
            <section className="bg row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 justify-end p-6 dark:bg-raisin-black xl:col-span-4  lg:p-10">
                <h1 className="text-xl font-bold">LUCAS MARTÍN ZARANDÓN COSTA</h1>
                <h2>Desarrollador Web FrontEnd</h2>
                <div className="flex gap-4">
                    <ButtonSecondaryIcon icon={<Github/>} description="GitHub" />
                    <ButtonSecondaryIcon icon={<Linkedin/>} description="Linkedin" />
                </div>
            </section>
            <section className="row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-raisin-black xl:col-span-2 lg:p-10">
                <AboutMe/>
            </section>
            <section className="row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1">
                <h2>+2</h2>
                <p>Años de experiencia</p>
            </section>
            <section className="row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative mapboxgl-map">
            <div>
                    <div>
                        <i></i>
                        <p>Mendoza, Argentina</p>
                    </div>
                    <div>
                        <i></i>
                        <p>Red Virtual</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Badge
