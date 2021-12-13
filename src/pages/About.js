import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';

const classes = {
    container: 'container mx-auto bg-black m-2',
    bioContainer: 'container mx-auto h-5/6 mt-2 overflow-y-auto',
    heading: 'h-16 bg-black text-white text-center text-xs md:text-xs lg:text-xl px-1 py-6 mx-4 md:mx-48 md:py-5',
    bioCard: "mb-2 md:h-1/3 flex flex-col md:flex-row",
    bioDescription: "container p-4 text-white text-xs md:text-sm lg:text-md xl:text-lg", 
}

function About() {
    return (
        <div className={classes.container}>
            <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid lightgreen'}}>
                Welcome to Adirondack Foot Care
            </div>

            <div className={classes.bioContainer}>
            </div>
        </div>
    )
}

export default About;
