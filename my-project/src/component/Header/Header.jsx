import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className= "flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
            <a href="/" className="logo text-2x1 font-bold text-accent">
                Aryan
            </a>

            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li>
                        <a href='/#about'>About</a>
                    </li>
                    <li>
                        <a href='/#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/#blog'>Blog</a>
                    </li>
                    <li>
                        <a href='/#resume'>Resume</a>
                    </li>

                </ul>
            </nav>

            <button onClick={handleToggle} className='block md:hidden'>
                {!toggle ? <AiOutlineMenu size = {30} /> : <AiOutlineClose size = {30} />}
            </button>
        </header>
    );
};

export default Header;


