import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';

const classes = {
    container: 'container mx-auto h-full mt-2 overflow-y-auto',
    heading: 'h-8 w-11/12 md:w-1/2 lg:w-1/3 bg-green-900 text-white text-xs items-center text-center mx-auto mt-4 md:mt-8 pt-2',
    bioCard: "m-4 lg:h-1/3 flex flex-col lg:flex-row bg-green-900",
    bioDescription: "container p-4 text-white text-xs md:text-xs lg:text-sm xl:text-md", 
}

function About() {
    return (
        <div className={classes.container} style={{justifyContent: 'center', alignItems: 'center'}}>
            <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                Insurances We Accept
            </div>
        </div>
    )
}

export default About;
