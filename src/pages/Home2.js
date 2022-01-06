import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';
import TreatmentRoom from '../images/treatmentroom.jpg';
import FrontFacing from '../images/frontpark.png';
import { Link } from 'react-router-dom';
import patientPDF from '../files/newPatientPacket.pdf';

const classes = {
    container: 'container mx-auto h-full',
    hoursContent: 'h-6 mt-2 text-center text-green-300 text-sm sm:text-md md:text-md lg:text-md',
    buttonText: 'font-bold text-white text-sm',
}

function Home() {
    return (
        <div className={classes.container} style={{overflowY: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:m-2 pt-16 md:pt-24 text-left w-full" style={{fontFamily: 'Helvetica'}}>
                    <div className="font-bold text-center text-white text-md sm:text-xl md:text-2xl lg:text-3xl m-2" style={{letterSpacing: '2px', fontFamily: 'CortisaProLight'}}>
                        Happy Feet Are Healthy Feet!
                    </div>

                    <div className="p-4 md:px-4 lg:px-4 mx-auto w-full md:w-1/2 lg:mx-auto text-left text-white text-sm sm:text-sm md:text-md lg:text-md" style={{fontFamily: 'Helvetica', letterSpacing: '1px'}}>
                        Our practice is located at 
                        <span className="text-blue-200"> 954 Route 146</span> in 
                        <span className="text-blue-200"> Fountain Professional Park</span>. 
                        We offer a range of podiatry services, including custom orthotics and Swiss Dolorclast treatments. We also sell a variety of podiatry products.                         
                    </div>

                    <div className="h-36 md:h-48 lg:h-64">
                        <img src={FrontFacing} alt="" className="h-full mx-auto"/>
                    </div>


                    <div className="w-full text-center p-4">     
                            
                        <div className="text-sm text-white p-2" style={{fontFamily:'CortisaProLight', fontWeight:'bold', letterSpacing: '2px'}}>Call to schedule an appointment!</div>       

                        <button type="button" className="p-1 mr-2 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                            <a href="tel:5183830302">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className={classes.buttonText} style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>(518) 383 - 0302</span>
                            </a>
                        </button>
                    
                        <button type="button" className="p-1 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                            <a href={patientPDF} target="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline pr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className={classes.buttonText} style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>NEW PATIENT FORM</span>
                            </a>
                        </button>
                    </div>

                    <div className="w-full">

                        <div className="h-6 mb-4 mt-8 text-center text-white text-md sm:text-md md:text-md lg:text-md" style={{fontFamily: 'CortisaProBold', letterSpacing: '4px'}}>
                            <span>Office Hours</span>
                        </div>

                        <div className={classes.hoursContent} style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            MONDAY  <span className="text-green-100 pl-4">7:00AM  -  5:00PM</span>
                        </div>

                        <div className={classes.hoursContent} style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            TUESDAY  <span className="text-green-100 pl-4">9:00AM  -  5:00PM</span>
                        </div>

                        <div className={classes.hoursContent} style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            WEDNESDAY  <span className="text-green-100 pl-4">7:00AM  -  5:00PM</span>
                        </div>

                        <div className={classes.hoursContent} style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            THURSDAY  <span className="text-green-100 pl-4">9:00AM  -  7:00PM</span>
                        </div>

                        <div className={classes.hoursContent} style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            FRIDAY  <span className="text-green-100 pl-4">9:00AM  -  5:00PM</span>
                        </div>

                    </div>
                </div>                   
            </div>
        </div>
    )
}

export default Home;
