import ExperienceItem from "../ExperienceItem"

const Experience = () => {
    const EXPERIENCIE = [
        {
            date: "Diciembre 2023 - Actualmente...",
            title: "Cofundador de RED VIRTUAL",
            description:
                "Lorem ipsum dolor sit amet",
            link: "",
        },
        {
            date: "Agosto 2023 - Actualmente...",
            title: "Docente de Programación - Escuela de Programación",
            description:
                "Lorem ipsum dolor sit amet",
            link: "",
        },
        {
            date: "Agosto 2023",
            title: "Desarrollador Web Front End - Billetera Digital",
            description:
                "Lorem ipsum dolor sit amet",
            link: "",
        },
        {
            date: "Octubre 2022 - Actualmente...",
            title: "Docente de Programación - Casa del Futuro y Conectar LAB Mendoza",
            description:
                "Lorem ipsum dolor sit amet",
            link: "",
        },
        {
            date: "Noviembre 2021",
            title: "Desarrollador Web Front End - Casa del futuro",
            description:
                "Lorem ipsum dolor sit amet",
            link: "",
        }
    ]

    return (
        <section className="py-8">
            <h2 className="text-4xl font-bold pb-4">Experiencia profesional</h2>
            <ol className="relative border-s border-gray-200 ml-3">
                {
                    EXPERIENCIE.map((experiencie, id) => (
                        <li key={id} className="mb-10 ms-4">
                            <ExperienceItem {...experiencie} />
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}

export default Experience



