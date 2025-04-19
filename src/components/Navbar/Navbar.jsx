/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './Navbar.css'
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`z-10 fixed top-0 left-0 w-full bg-scroll bg-black/30 backdrop-blur-lg  text-white p-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
            }`}>
            <div className="navbar shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            <ul className="sm:flex  gap-6 items-center font-bold justify-between bg-black/50 p-4">
                                {sections.map((section) => (
                                    <li key={section.id} onClick={()=>setActiveSection(section.id)}>
                                        <a
                                            href={`#${section.id}`}
                                            className={`hover:text-purple-600 transition-colors 
                                                ${activeSection === section.id ? 'text-purple-600 font-bold' : 'text-white'}`}
                                        >
                                            {section.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                    <a href="mailto:adib.abc2022@gmail.com" className="btn text-xl">Adib</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ul className="sm:flex  gap-4 items-center font-bold justify-between">
                            {sections.map((section) => (
                                <li key={section.id} onClick={()=>setActiveSection(section.id)}>
                                    <a
                                        href={`#${section.id}`}
                                        className={`hover:text-purple-600 transition-colors ${activeSection === section.id ? 'text-purple-600 font-bold' : 'text-white'
                                            }`}
                                    >
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Resume */}
                    <button className="customized-btn ">
                        <a href="#" download >
                            Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;