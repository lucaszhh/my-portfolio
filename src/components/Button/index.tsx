import React from 'react'

type Props = {
    description: string | React.ReactNode,
    onClick?: () => void
}


type PropsIcon = {
    description: string | React.ReactNode,
    icon: React.ReactNode,
    onClick?: () => void
}

export const Button = ({ description, onClick }: Props) => {
    return (
        <button onClick={onClick} className='w-auto  flex items-center gap-2 bg-black text-white rounded-3xl dark:text-black dark:bg-white h-10 px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'>
            {description}
        </button>
    )
}

export const ButtonIcon = ({ description, icon, onClick }: PropsIcon) => {
    return (
        <button onClick={onClick} className='w-auto   flex items-center gap-2 bg-black text-white rounded-3xl dark:text-black dark:bg-white h-10 px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'>
            {icon}
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

export const ButtonSecondary = ({ description, onClick }: Props) => {
    return (
        <button onClick={onClick} className='flex items-center border-2 font-medium bg-white px-3 py-2 rounded-lg text-black gap-2 active:scale-[1.1] transition-transform duration-300'>
            {description}
        </button>
    )
}

export const ButtonSecondaryIcon = ({ description, icon, onClick }: PropsIcon) => {
    return (
        <button onClick={onClick} className='flex items-center border-2 font-medium bg-white px-3 py-2 rounded-lg text-black gap-2 active:scale-[1.1] transition-transform duration-300'>
            {icon}
            <span className='text-xs font-bold'>{description}</span>
        </button>
    )
}

