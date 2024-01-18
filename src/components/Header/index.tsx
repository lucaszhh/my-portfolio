'use client'
import useDarkMode from "../../Hooks/useDarkMode"
import Avatar from "../Avatar"
import { ButtonIcon, ButtonSecondary } from "../Button"
import { Download, Moon, Sun } from "../Icons"
const Header = () => {
    const { darkMode, handleDarkMode } = useDarkMode()

    return (
        <header className="container flex flex-col justify-center items-center w-full ">
            <nav className="flex  w-full my-4 text-xl justify-between">
                <Avatar />
                <div className="flex items-center justify-center gap-2">
                    {darkMode ? 
                    <ButtonSecondary onClick={handleDarkMode} description={<Sun/>} />
                     
                    : <ButtonSecondary onClick={handleDarkMode} description={<Moon/>} />}
                    <ButtonIcon icon={<Download/>} description="Download CV"/>
                </div>
            </nav>
        </header>
    )
}

export default Header