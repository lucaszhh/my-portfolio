"use client"
import { useEffect, useState } from "react"
import ExperienceItem from "../ExperienceItem"
import { ButtonIcon, ButtonLink } from "../Button"
import { ArrowRight } from "../Icons"

const Experience = () => {
    const EXPERIENCIE = [
        {
            date: "Diciembre 2023 - Actualmente...",
            title: "Cofundador de RED VIRTUAL",
            description:
                "Junto con mi hermano creamos Red Virtual nos especializamos en ofrecer soluciones digitales, nuestros servicios más populares son: carga sube, carga virtual y creación de sitios web. Estoy a cargo del desarrollo de sitios web, el diseño y la creación de software de calidad.",
            linkDescription: "Conocé RED VIRTUAL",
            link: "https://www.instagram.com/redvirtual.oficial/",
        },
        {
            date: "Agosto 2023 - Actualmente...",
            title: "Docente de Programación - Escuela de Programación",
            description:
                "Los cursos que doy cuentan con la certificación de la “Universidad Tecnológica Nacional - FRM” y “Lila Software Studio“. Actualmente estoy capacitando a personas en programación web con HTML, CSS y JavaScript, Git y Github, MySQL Workbench y React js.",
            linkDescription: "Ir al sitio web",
            link: "https://hostpage.vercel.app/",
        },
        {
            date: "Agosto 2023",
            title: "Desarrollador Web Front End - Billetera Digital",
            description:
                "Para el proyecto final de la carrera, junto con un equipo de 4 personas desarrollamos bajo la metodología scrum una billetera digital con Next.js y TypeScript. Principalmente me destaqué en la creación de la interfaz y trabajar con SSR también fui responsable de levantar servicios de Vercel para el hosting.",
            linkDescription: "Ir al sitio web",
            link: "https://equipo-12-lucaszhh.vercel.app/",
        },
        {
            date: "Octubre 2022 - Actualmente...",
            title: "Docente de Programación - Casa del Futuro y Conectar LAB Mendoza",
            description:
                "Actualmente trabajo para la municipalidad de Godoy Cruz en el área de Educación, desarrollando y dictando mis propios talleres en nivel inicial y superior sobre tecnologías web como HTML, CSS, JavaScript, Python, Java, Scratch, Godot, Git, Github, Figma. Mi éxito lo encontré en el desarrollo web front end, comunicándome de manera efectiva priorizando la empatía y la escucha activa, logré liderar equipos de hasta 20 personas.",
            linkDescription: "Ir al sitio web",
            link: "https://casa-del-futuro.vercel.app/",
        },
        {
            date: "Agosto 2022",
            title: "Desarrollador Web Front End - Booking Vehículos",
            description:
                "Al finalizar el primer año de la carrera de Certified Tech Developer junto a un equipo de 5 personas desarrollamos un sitio web sobre reservas de vehículos. Principalmente me destaqué en la creación de la UI con React, también fui responsable de levantar servicios EC2, s3 y RDS en AWS para el hosting.",
            linkDescription: "Ir al sitio web",
            link: "https://digital-booking.netlify.app/",
        },
        {
            date: "Noviembre 2021",
            title: "Desarrollador Web Front End - Casa del futuro",
            description:
                "En casa del futuro encontré mi pasión por la programación en el curso de programación con Python. Luego de terminar el curso seguí formandome como desarrollador web y junto a quien fue mi profesor desarrollamos el sitio web de Casa del futuro. Esta oportunidad de desarrollar un sitio web colaborativo, gratuito y de código abierto me iba a servir para conseguir mi primer trabajo IT.",
            linkDescription: "Ir al sitio web",
            link: "https://casadelfuturogc.netlify.app/",
        }
    ]



    return (
        <section className="py-8">
            <h2 className="text-4xl font-bold pb-4">Experiencia profesional</h2>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    EXPERIENCIE.slice(0,4).map((experiencie, id) => (
                        <li key={id} className="transition ease-in mb-10 ms-4 max-w-3xl">
                            <ExperienceItem {...experiencie} />
                        </li>
                    ))
                }
            </ol>
{/*             <ButtonLink
                icon={<ArrowRight />}
                description={ "Conocé más"}
                url="/experiencie"
            /> */}
        </section>
    )
}

export default Experience;


