import { ButtonIcon } from "../Button"
import { ArrowRight } from "../Icons"

interface Props {
    title: string
    description: string
    link?: string
    date: string
}

const ExperienceItem = ({ title, description, link, date }: Props) => {
    return (
        <section>
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"
            >
            </div>
            <time
                className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80"
            >{date}
            </time>
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
                {title}
            </h3>
            <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                {description}
            </p>
            {
                link && (
                    <ButtonIcon icon={<ArrowRight/>} description="Saber más..."/>
                )
            }
        </section>
    )
}

export default ExperienceItem








