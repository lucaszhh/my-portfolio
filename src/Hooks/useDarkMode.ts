"use client"
import { useState } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
    }
    return { darkMode, handleDarkMode }
}

export default useDarkMode