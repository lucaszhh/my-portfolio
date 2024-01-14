const Header = () => {
    return (
        <header className="container flex flex-col justify-center items-center w-full p-36">
            <nav className="flex border-2 rounded w-full">
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
                <img src="" alt="" />
                <div>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </nav>

            <section>
                <img src="" alt="" />
                <div>
                    <h1>LUCAS ZARAND<mark>Ó</mark>N</h1>
                    <h2>Desarrollador Web FrontEnd</h2>
                    <p>Lorem ipsum dolor amet</p>
                    <button >CALL TO ACTION</button>
                </div>
            </section>
        </header>
    )
}

export default Header