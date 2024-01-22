import Link from 'next/link'
import React from 'react'

type Props = {
    description: string | React.ReactNode,
    onClick?: () => void
}


type PropsIcon = {
    description: string | React.ReactNode,
    icon: React.ReactNode,
    onClick?: () => void,
    url?: string,
    clas?: string
}

type PropsIconLink = {
    description: string | React.ReactNode,
    icon: React.ReactNode,
    onClick?: () => void,
    url: string
}

export const Button = ({ description, onClick }: Props) => {
    return (
        <button onClick={onClick} className='w-auto  flex items-center gap-2 bg-black text-white rounded-3xl dark:text-black dark:bg-violet-bg h-10 px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'>
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

export const ButtonIcon = ({ description, icon, onClick }: PropsIcon) => {
    return (
        <button onClick={onClick} className='w-auto flex items-center gap-2 bg-black text-white rounded-3xl border-2 dark:bg-[#63e] h-full px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'>
            {icon}
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

export const ButtonLink = ({ description, icon, onClick, url }: PropsIconLink) => {
    return (
        <Link href={url}>
            <button onClick={onClick} className='w-auto   flex items-center gap-2 bg-neutral-800 text-white rounded-3xl dark:text-black dark:bg-white h-10 px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'>
                <span className='text-xs font-bold'>{description}</span>
                {icon}
            </button>
        </Link>
    )
}

//checkear aria-label
export const ButtonSecondary = ({ description, onClick }: Props) => {
    return (
        <button aria-label='description' onClick={onClick} className='flex items-center border-2 font-medium bg-white px-3 py-2 rounded-lg text-black gap-2 active:scale-[1.1] transition-transform duration-300'>
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

export const ButtonSecondaryIcon = ({ description, icon, clas, onClick }: PropsIcon) => {
    return (
        <button onClick={onClick} className={`flex items-center border-2 font-medium bg-white px-3 py-2 rounded-lg text-black gap-2 active:scale-[1.1] transition-transform duration-300 ${clas}`}>
            {icon}
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

