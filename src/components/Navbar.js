import React from 'react';
import { Link } from 'react-router-dom';
import AdirondackLogo from '../images/adirondacklogo.png';

const classes = {
    navBar: "bg-green-200",
    navButton: "mx-2 px-2 h-7 hover:bg-gray-200 rounded-md"
}


function Navbar({ toggle = {}, isOpen = 'false' }) {
    return (
        <nav className="h-12 md:h-16 flex" role='navigation' style={{outline: '2px solid black', backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>

            {/* Logo/Name portion */}
            <div className="h-full w-2/3 lg:w-1/3 flex flex-row">
                <Link to='/'>
                    <img className="h-full pl-4 pb-1" src={AdirondackLogo} alt="" onClick={(isOpen) ? {toggle} : {}} />
                </Link>
                    <div className="h-full text-xs  font-bold" style={{fontFamily: 'CortisaProLight', letterSpacing: '1px'}}>
                        <p className="block text-sm md:text-lg mt-2 md:mt-2">ADIRONDACK FOOT CARE</p>
                        <p className="hidden md:inline-block text-xs" style={{letterSpacing: '2px'}}>954 Route 146, Clifton Park NY</p>
                        <p className="block md:hidden text-xs" style={{letterSpacing: '2px'}}>(518) 383 - 0302</p>
                    </div>
                
            </div>

            {/* If DESKTOP => Nav buttons */}
            <div className="h-full w-1/3 lg:hidden" >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 m-2 md:mt-6 mx-auto cursor-pointer" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{color: 'black', fontWeight: 'bolder'}}
                    onClick={toggle}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                    />
                </svg>
            </div>

            {/* If MOBILE => Nav hamburger 
            <div className="h-full w-1/3 md:hidden bg-blue-500">
                HEY
            </div>

            */}
        </nav>
    );
}

export default Navbar;

/*
            <div className="float-right xl:hidden inline px-4 cursor-pointer" onClick={toggle}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{color: 'black', fontWeight: 'bolder'}}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                    />
                </svg>
            </div>
*/