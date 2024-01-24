import ExperienceItem from "../ExperienceItem"

const Experience = () => {
    const EXPERIENCIE = [
        {
            date: "Diciembre 2023 - Actualmente...",
            title: "Cofundador de RED VIRTUAL",
            description:
                "Junto con mi hermano le dimos identidad a Red Virtual nos especializamos en ofrecer soluciones digitales a entidades comerciales, algunos de nuestros servicios más populares son: carga sube y virtual, creación de sitios web, marketing digital, diseño y reparación de computadoras. Personalmente los servicios que lideró son el desarrollo de sitios web, el diseño y la creación de software de calidad.  Te invito a que veas lo que hacemos y te sumes a nuestra RED VIRTUAL.",
            link: "",
        },
        {
            date: "Agosto 2023 - Actualmente...",
            title: "Docente de Programación - Escuela de Programación",
            description:
                "Dado al crecimiento de los cursos de programación se abrió una oportunidad para la creación de una escuela de programación dentro del municipio, ahora los cursos de programación que estoy dando cuenta con la certificación de la “Universidad Tecnológica Nacional - FRM” y “Lila Software Studio“. A mis talleres de programación web, de HTML, CSS y JavaScript, agregue otros dos talleres React JavaScript y Bases de datos con MySQL, estos pensados en la formación especializada de cada lenguaje.",
            link: "",
        },
        {
            date: "Agosto 2023",
            title: "Desarrollador Web Front End - Billetera Digital",
            description:
                "Luego de dos años de la carrera de Digital House, para el proyecto final de la carrera, junto con un equipo de 4 personas desarrollamos bajo la metodología scrum una billetera digital con Next.js y TypeScript. Principalmente me destaqué en la creación de la interfaz, SSR y el dinamismo de los componentes del front end con Next, también fui responsable de levantar servicios de Vercel para el hosting.",
            link: "",
        },
        {
            date: "Octubre 2022 - Actualmente...",
            title: "Docente de Programación - Casa del Futuro y Conectar LAB Mendoza",
            description:
                "Comencé a trabajar para la municipalidad de Godoy Cruz en el área de Educación, desarrollando y dictando mis propios talleres en nivel inicial y superior sobre tecnologías web como HTML, CSS, JavaScript, Python, Java, Scratch, Godot, Figma, entre otros.  Mi éxito lo encontré en el desarrollo web front end, comunicándome de manera efectiva priorizando la empatía y la escucha activa, logré liderar equipos de hasta 12 personas.",
            link: "",
        },
        {
            date: "Agosto 2022",
            title: "Desarrollador Web Front End - Booking Vehículos",
            description:
                "Al finalizar el primer año de la carrera de Certified Tech Developer junto a un equipo de 5 personas desarrollamos un sitio web sobre reservas de vehículos.Principalmente me destaqué en la creación de la interfaz y el dinamismo de los componentes del front end con React, también fui responsable de levantar servicios EC2, s3 y RDS de AWS para el hosting.",
            link: "",
        },
        {
            date: "Noviembre 2021",
            title: "Desarrollador Web Front End - Casa del futuro",
            description:
                "En casa del futuro encontré mi pasión por la programación en el curso de programación con Python. Luego de terminar el curso seguí formandome como desarrollador web y junto a quien fue mi profesor desarrollamos el sitio web de Casa del futuro. Esta oportunidad de desarrollar un sitio web colaborativo gratuito y de código abierto me iba a servir para conseguir mi primer trabajo IT.",
            link: "",
        }
    ]

    return (
        <section className="py-8">
            <h2 className="text-4xl font-bold pb-4">Experiencia profesional</h2>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    EXPERIENCIE.map((experiencie, id) => (
                        <li key={id} className="mb-10 ms-4 max-w-3xl">
                            <ExperienceItem {...experiencie} />
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}

export default Experience



