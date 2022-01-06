import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';
import cdphp from '../images/insurance/cdphp.jpg';
import empire from '../images/insurance/empire.jpg';
import blueshield from '../images/insurance/blueshield.png';
import aetna from '../images/insurance/aetna.png';
import progressive from '../images/insurance/progressive.png';
import tricare from '../images/insurance/tricare.png';
import aarp from '../images/insurance/aarp.jpg';
import medicare from '../images/insurance/medicare.jpg';
import mvp from '../images/insurance/mvp.png';

const classes = {
    container: 'container mx-auto h-full pt-16 overflow-y-auto text-center',
    heading: 'h-8 w-3/4 md:w-2/3 bg-green-900 text-white text-xs items-center text-center mx-auto mt-4 md:mt-8 pt-2 mb-2',
    infoCard: "w-4/5 m-2 xl:w-1/3 h-24 bg-green-900 inline-flex",
}

function About() {
    return (
        <div className={classes.container}>
            <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                Insurances We Accept
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={cdphp} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                        CDPHP<br/>
                        CDPHP Medicare Choice<br/>
                        CDPHP Medicaid
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={empire} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                        Empire Blue Card<br/>
                        Empire Plan<br/>
                        Empire Healthchoice
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={blueshield} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-4'>
                        Blueshield of NENY<br/>
                        Blueshield Senior Blue
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={aetna} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        Aetna
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={progressive} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        American Progressive
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={tricare} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        WPS Tricare For Life
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={aarp} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        AARP
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={medicare} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        Medicare
                    </div>
                </div>
            </div>

            <div className={classes.infoCard} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                <div className='h-full w-1/3 p-1'>
                    <img className="h-full mx-auto" src={mvp} alt="" style={{borderRadius: '10px', border: '3px solid black'}} />
                </div>
                <div className='h-full w-2/3 text-center'>
                    <div className='mt-8 text-white text-xs lg:text-sm lg:mt-8'>
                        MVP Healthcare
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
