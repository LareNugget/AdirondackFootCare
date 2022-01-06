import React from 'react';
import { Link } from 'react-router-dom';

const classes = {
    dropNavButton: "h-6 w-11/12 pt-1 mx-auto m-2 bg-green-900 font-mono text-white text-center text-xs",
}

function DropdownNav({ toggle = {}, isOpen = 'false' }) {
    return (
        <div 
            className={
                (isOpen) ? "grid grid-cols-2 xl:hidden lg:hidden absolute items-center z-10 w-full mt-12 md:mt-16" : "hidden"
            }

            onClick={toggle}
            style={{outline: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 1)', position: 'fixed'}}
        >
            <Link to='/about' className={classes.dropNavButton} style={{outline: '3px solid black', letterSpacing: '1px'}}>INSURANCE</Link>
            <Link to='/staff' className={classes.dropNavButton} style={{outline: '3px solid black', letterSpacing: '1px'}}>MEET OUR STAFF</Link>
            <Link to='/services' className={classes.dropNavButton} style={{outline: '3px solid black', letterSpacing: '1px'}}>OUR SERVICES</Link>
            <Link to='/products' className={classes.dropNavButton} style={{outline: '3px solid black', letterSpacing: '1px'}}>OUR PRODUCTS</Link>
        </div>
    )
}

export default DropdownNav;
