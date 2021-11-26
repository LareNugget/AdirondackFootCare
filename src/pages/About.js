import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';

const classes = {
    container: 'container mx-auto bg-black m-2'
}

function About() {
    return (
        <div className={classes.container} style={{height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
            <div className="w-1/2 text-center">
                Happy Feet Are Healthy Feet!
            </div>
        </div>
    )
}

export default About;
