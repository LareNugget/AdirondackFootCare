import React from 'react';
import staff_galluzzo from '../images/staff_galluzzo.jpg';
import bioFoam from '../images/biofoam.png';
import braces from '../images/braces.png';
import dolorclast from '../images/dolorclast.png';

const classes = {
    container: 'container mx-auto h-full overflow-y-auto',

    bioContainer: 'container mx-auto h-5/6 w-5/6 mt-2 overflow-y-auto',

    heading: 'h-12 w-full bg-black text-white text-center text-xs md:text-xs lg:text-xl md:pt-4 lg:pt-2 mb-2 mt-2 pt-4',

    bioCard: "mb-2 w-full md:h-1/6 flex flex-col md:flex-row",
    bioNameplate: "w-full h-1/3 md:w-1/3 md:h-full ",
    bioDescription: "w-full h-full md:w-2/3 p-4 text-white text-xs md:text-sm lg:text-md xl:text-sm", 
}

function Services() {
    return (
        <div className={classes.container}>
            <div className={classes.bioContainer}>
                <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid lightgreen'}}>
                    Podiatry Services we offer!
                </div>
                
                {/* Custom Orthotics */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-4/5 w-full text-center align-middle p-1">
                            <div className="h-1 md:h-2" />
                            <img className="h-28 md:h-32 lg:h-32 mx-auto mb-2" src={bioFoam} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', letterSpacing: '1px'}}>

                        <div className="h-1/4 w-full text-center md:text-left font-bold text-green-300 text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '3px'}}>
                            <p>
                                Custom Orthotics
                            </p>
                        </div>
                        <p>
                            Through the use of Bio Foam impression blocks, we capture an accurate impression of your foot as you walk on it. Using this impression, a customized orthotic insert can be created for your shoe!
                        </p>
                    </div>
                </div>

                {/* Support Braces */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-4/5 w-full text-center align-middle p-2">
                            <div className="h-1 md:h-2" />
                            <img className="h-28 md:h-32 lg:h-32 lg:w-48 mx-auto mb-2" src={braces} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', letterSpacing: '1px'}}>

                        <div className="h-1/4 w-full text-center md:text-left font-bold text-green-300 text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '3px'}}>
                            <p>
                                Support Braces
                            </p>
                        </div>
                        <p>
                            We offer a variety of braces that provide support to key areas of the foot and leg, including the ankle and Achilles tendon.
                        </p>
                    </div>
                </div>

                {/* Dolorclast */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-4/5 w-full text-center align-middle p-2">
                            <div className="h-1 md:h-1" />
                            <img className="h-28 md:h-32 lg:h-32 lg:w-36 mx-auto mb-2" src={dolorclast} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', letterSpacing: '1px'}}>

                        <div className="h-1/4 w-full text-center md:text-left font-bold text-green-300 text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '3px'}}>
                            <p>
                                Swiss Dolorclast Treatment
                            </p>
                        </div>
                        <p>
                            The Swiss Dolorclast method is a state of the art treatment that utilizes electroshock technology to stimulate blood flow into areas of the foot requiring healing.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;
