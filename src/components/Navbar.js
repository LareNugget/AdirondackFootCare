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
                <Link to='/'>
                    <div className="h-full text-xs  font-bold" style={{fontFamily: 'CortisaProLight', letterSpacing: '1px'}}>
                        <p className="block text-sm md:text-lg mt-2 md:mt-2">ADIRONDACK FOOT CARE</p>
                        <p className="hidden md:inline-block text-xs" style={{letterSpacing: '2px'}}>954 Route 146, Clifton Park NY</p>
                        <p className="block md:hidden text-xs" style={{letterSpacing: '2px'}}>(518) 383 - 0302</p>
                    </div>
                </Link>
                
                
            </div>

            {/* If DESKTOP => Nav buttons */}
            <div className="h-full w-1/3 lg:hidden" >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 m-4 mx-auto cursor-pointer" 
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

            <div className="hidden xl:text-sm lg:block lg:h-full lg:w-2/3 lg:text-xs text-center" style={{fontFamily: 'CortisaProLight', letterSpacing: '1px'}}>
                <Link to='/about' className="inline-block h-full w-1/4 pt-6 hover:bg-green-100" style={{fontWeight: 'bold', letterSpacing: '1px'}}>ABOUT OUR PRACTICE</Link>
                <Link to='/staff' className="inline-block h-full w-1/4 pt-6 hover:bg-green-100" style={{fontWeight: 'bold', letterSpacing: '1px'}}>STAFF</Link>
                <Link to='/services' className="inline-block h-full w-1/4 pt-6 hover:bg-green-100" style={{fontWeight: 'bold', letterSpacing: '1px'}}>SERVICES</Link>
                <Link to='/products' className="inline-block h-full w-1/4 pt-6 hover:bg-green-100" style={{fontWeight: 'bold', letterSpacing: '1px'}}>PRODUCTS</Link>
            </div>
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