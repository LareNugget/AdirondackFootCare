import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';

const classes = {
    container: 'container mx-auto bg-black m-1 p-1'
}

function Home() {
    return (
        <div className={classes.container} style={{height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
            <div className="flex flex-col md:flex-row h-full mt-1">
                <div className="w-full md:w-1/2 h-2/3 font-bold text-l p-2 text-center" style={{outline: '2px solid black', fontFamily: 'Trebuchet MS', backgroundColor: 'rgba(162, 250, 190, 0.5)'}}>
                    <p className="text-black" style={{letterSpacing: '1px'}}>From ingrown toenails and bunions to custom orthotics and Swiss Dolorclast treatments, we strive to offer you a professional podiatry experience that is personalized to YOU!</p>
                </div>

                <div className="w-full md:w-1/2 h-2/3 bg-green-100 text-l text-center p-1" style={{outline: '2px solid black', fontFamily: 'Trebuchet MS'}}>
                    <p> Hours | Location | Contact </p>
                    <div className="font-bold text-xl">
                        954 Route 146
                        <br />
                        Clifton Park NY
                    </div>
                    
                    <div className="font-bold text-center">~ HOURS ~</div>
                    <div className="w-3/4 text-center mx-auto h-1/3">
                        <div className="flex flex-row font-bold text-l text-center m-1" style={{outline: '1px solid black', backgroundColor: 'beige'}}>
                            <div className="w-1/2" style={{letterSpacing: '2px'}}>MONDAY</div>
                            <div className="w-1/2">7 AM - 4:30 PM</div>
                        </div>

                        <div className="flex flex-row font-bold text-l text-center m-1"  style={{outline: '1px solid black', backgroundColor: 'beige'}}>
                            <div className="w-1/2" style={{letterSpacing: '2px'}}>TUESDAY</div>
                            <div className="w-1/2">8 AM - 4:30 PM</div>
                        </div>

                        <div className="flex flex-row font-bold text-l text-center m-1" style={{outline: '1px solid black', backgroundColor: 'beige'}}>
                            <div className="w-1/2" style={{letterSpacing: '2px'}}>WEDNESDAY</div>
                            <div className="w-1/2">8 AM - 4:30 PM</div>
                        </div>

                        <div className="flex flex-row font-bold text-l text-center m-1"  style={{outline: '1px solid black', backgroundColor: 'beige'}}>
                            <div className="w-1/2" style={{letterSpacing: '2px'}}>THURSDAY</div>
                            <div className="w-1/2">8 AM - 7:00 PM</div>
                        </div>

                        <div className="flex flex-row font-bold text-l text-center m-1"  style={{outline: '1px solid black', backgroundColor: 'beige'}}>
                            <div className="w-1/2" style={{letterSpacing: '2px'}}>FRIDAY</div>
                            <div className="w-1/2">8 AM - 4:30 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
