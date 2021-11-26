import React from 'react';
import { Link } from 'react-router-dom';

const classes = {
    dropNavButton: "h-10 w-7/8 pt-3 m-2 hover:bg-green-600 font-bold font-mono text-center text-xs",
}

function DropdownNav({ toggle = {}, isOpen = 'false' }) {
    return (
        <div 
            className={
                (isOpen) ? "grid grid-cols-2 xl:hidden absolute justify-center items-center z-10 w-full" : "hidden"
            }

            onClick={toggle}
            style={{outline: '1px solid black', backgroundColor: 'rgba(41, 249, 145, 0.7)'}}
        >
            <Link to='/about' className={classes.dropNavButton} style={{outline: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 1)'}}>ABOUT OUR PRACTICE</Link>
            <Link to='/staff' className={classes.dropNavButton} style={{outline: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 1)'}}>MEET OUR STAFF</Link>
            <Link to='/services' className={classes.dropNavButton} style={{outline: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 1)'}}>OUR SERVICES</Link>
            <Link to='/products' className={classes.dropNavButton} style={{outline: '1px solid black', backgroundColor: 'rgba(255, 255, 255, 1)'}}>OUR PRODUCTS</Link>
        </div>
    )
}

export default DropdownNav;
