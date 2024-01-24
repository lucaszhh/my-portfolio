import Image from "next/image"
import { Github, NextJS, Tailwind, React, Css, Html, ArrowRight, JavaScript, StyleComponents, TypeScript, ArrowLeft } from "../Icons"
import { ButtonLink, ButtonSecondaryIcon } from "../Button"
import Link from "next/link"

const Projects = () => {
    const TAGS = {
        NEXT: {
            name: "Next.js",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: NextJS,
        },
        REACT: {
            name: "React",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: React,
        },
        CSS: {
            name: "CSS",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: Css,
        },
        HTML: {
            name: "HTML5",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: Html,
        },
        TAILWIND: {
            name: "Tailwind CSS",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: Tailwind,
        },
        JAVASCRIPT: {
            name: "JavaScript",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: JavaScript,
        },
        TYPESCRIPT: {
            name: "TypeScript",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: TypeScript,
        },
        STYLECOMPONENTS: {
            name: "Style Components",
            className: "bg-black dark:bg-[#63e] text-white",
            icon: StyleComponents,
        },
    }

    const PROJECTS = [
        {
            title: "Git con GitHub",
            subtitle: "Plataforma educativa",
            description:
                "Plataforma gratuita para aprender a utilizar git flow con la consola de Git y el repositorio remoto y colaborativo de GitHub. Creado desde cero con HTML, CSS y JavaScript.",
            link: "https://git-con-github.netlify.app/",
            github: "https://github.com/lucaszhh/git-con-github",
            image: "/projects/png/git-con-github.png",
            tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
        },
        {
            title: "Casa del Futuro Godoy Cruz",
            subtitle: "Landing Page",
            description:
                "Landing page desarrollada para la institución pública Casa del Futuro Godoy Cruz. Creada desde cero con Next.js, React, TypeScript y CSS.",
            link: "https://casa-del-futuro.vercel.app/",
            github: "https://github.com/lucaszhh/casa-del-futuro",
            image: "/projects/png/cdfnext.png",
            tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.CSS],
            cdf: true,
            linkPrev: "/projects",
        },
        {
            title: "Digital Money House",
            subtitle: "Billetera Virtual",
            description:
                "Sitio web que simula una billetera virtual desarrollada para el proyecto final de la carrera de Certified Tech Developer de Digital House, Globant y Mercado Libre. Creada desde cero con Next.js, React, TypeScript y Style Components.",
            link: "https://equipo-12-lucaszhh.vercel.app/",
            github: "https://github.com/lucaszhh/digital-money-house",
            image: "/projects/png/dmh.png",
            tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.STYLECOMPONENTS],
        },
    ]
    return (
        <>
            <section className="py-4">
                <h2 className="text-4xl font-bold ">Proyectos</h2>
            </section>
            <section className="flex flex-col justify-center items-center gap-y-16">
                {
                    PROJECTS.map(({ image, title, description, tags, github, link, cdf, subtitle }, id) => (
                        <article key={id} className="rounded-3xl border p-4 max-w-3xl drop-shadow-md flex flex-col gap-2 lg:p-6 bg">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#63e] dark:text-yellow-200 ">
                                    {title}
                                </h3>
                                <h4 className="tranform -translate-y-1 text-md font-semibold text-[#63e] dark:text-yellow-200">{subtitle}</h4>

                            </div>
                            <p className="text-lg text-pretty">{description}</p>
                            <ul className="flex flex-wrap gap-2 flex-row mb-2">
                                {tags.map((tag, id) => (
                                    <li key={id} >
                                        <span
                                            className={`flex items-center gap-x-2 rounded-full w-auto text-xs font-semibold ${tag.className} py-2 px-4`}
                                        >
                                            <tag.icon />
                                            {tag.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <footer className="flex justify-center items-center flex-col gap-2 lg:flex-row lg:justify-between lg:items-end">
                                <Image
                                    loading="lazy"
                                    src={image}
                                    width={500}
                                    height={500}
                                    alt={`Captura de pantalla del proyecto ${image}`}
                                />
                                <div className="flex flex-col sm:flex-row justify-between w-full gap-2 lg:flex-col ">
                                    {
                                        cdf &&
                                        <>
                                            <p className="text-md text-pretty hidden lg:block">Antes de esta versión habia creado un sitio con HTML y CSS</p>
                                            <Link href="https://casadelfuturogc.netlify.app/" target="_blank" className="w-full flex lg:mb-4" >
                                                <ButtonSecondaryIcon clas="w-full" icon={<ArrowLeft />} description="Ver proyecto anterior" />
                                            </Link>
                                        </>

                                    }
                                    <Link href={github} target="_blank" className="w-full flex" >
                                        <ButtonSecondaryIcon clas="w-full" icon={<Github />} description="Ver código funte" />
                                    </Link>
                                    <Link href={link} target="_blank" className="w-full flex">
                                        <ButtonSecondaryIcon clas="w-full" icon={<ArrowRight />} description="Ir al sitio web" />
                                    </Link>
                                </div>
                            </footer>
                        </article>
                    ))
                }
                {/*
                ADD PAGE PROJECTS
                <ButtonLink url="/" icon={<ArrowRight/>} description="Ver mas proyectos"/> 
                */}
            </section>
        </>
    )
}

export default Projects




