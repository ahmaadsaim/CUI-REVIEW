import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavCompo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-slate-900">
            <div className="mycontainer flex items-center justify-between h-16 px-4 py-5">
                <div className="logo font-bold text-2xl text-white flex items-center">
                    <span className="text-green-500">&lt;</span>
                    <span className="text-white">CUI-Review/</span>
                    <span className="text-green-500">&gt;</span>
                </div>
                <div className="flex items-center space-x-4 md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
                <ul className={`md:flex md:items-center md:space-x-7 ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-slate-900 w-full md:relative md:w-auto md:top-auto md:right-auto`}>
                    <li className="flex flex-col md:flex-row">
                        <Link className="text-white hover:bg-slate-800 px-3 py-2 rounded-full" to="/">Home</Link>
                        <Link className="text-white hover:bg-slate-800 px-3 py-2 rounded-full" to="/coming-soon">About</Link>
                        <Link className="text-white hover:bg-slate-800 px-3 py-2 rounded-full" to="/coming-soon">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavCompo;
