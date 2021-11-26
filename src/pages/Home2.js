import React from 'react';
import AdirondackLogo from '../images/adirondacklogo.png';
import TreatmentRoom from '../images/treatmentroom.jpg';
import FrontFacing from '../images/frontfacing.PNG';
import { Link } from 'react-router-dom';
import patientForm from './newPatientForm.txt';

const classes = {
    container: 'container mx-auto h-full m-2'
}

function Home() {
    return (
        <div className={classes.container} style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', overflowY: 'auto'}}>
            <div className="flex flex-col lg:flex-row h-3/4 md:h-full">
                <div className="lg:m-2 pt-4 text-left w-full" style={{outline: '1px solid white', backgroundColor: 'rgba(0, 0, 0, 0.8)', fontFamily: 'Helvetica'}}>
                    <div className="font-bold text-center text-white text-md sm:text-xl md:text-2xl lg:text-3xl" style={{letterSpacing: '1px'}}>
                        Happy Feet Are Healthy Feet!
                    </div>

                    <div className="h-36 md:h-48 lg:h-64">
                        <img src={FrontFacing} alt="" className="h-full mx-auto"/>
                    </div>

                    <div className="mt-1 mb-2 px-2 md:px-4 lg:px-4 lg:w-1/2 lg:mx-auto text-center text-white text-sm sm:text-sm md:text-lg lg:text-lg" style={{fontFamily: 'Helvetica', letterSpacing: '1px'}}>
                        Our practice is located at 
                        <span className="text-green-300"> 954 Route 146</span> in 
                        <span className="text-blue-200"> Fountain Professional Park</span>. 
                        We offer a range of podiatry services, from 
                        custom orthotic fitting to 
                        Swiss Dolorclast treatments. 
                        <br />
                        <div className="mt-2 text-lg">Call to schedule an appointment!</div>
                    </div>

                    <div className="w-full text-center">
                        <a href="tel:5183830302">
                            <button type="button" className="p-1 mr-2 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>(518) 383 - 0302</span>
                            </button>

                            <button type="button" className="p-1 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline pr-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>NEW PATIENT FORM</span>
                            </button>
                        </a>
                    </div>

                    <div className="w-full p-4">

                        <div className="h-6 mb-3 text-center text-white text-md sm:text-md md:text-md lg:text-md " style={{fontFamily: 'CortisaProBold', letterSpacing: '4px'}}>
                            <span>Office Hours</span>
                        </div>

                        <div className="h-8 pt-2 mx-6 text-center text-green-300 text-sm sm:text-sm md:text-sm lg:text-sm" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            MONDAY  <span className="text-green-100 pl-4">7:00AM  -  5:00PM</span>
                        </div>

                        <div className="h-8 pt-2 mx-6 text-center text-green-300 text-sm sm:text-sm md:text-sm lg:text-sm " style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            TUESDAY  <span className="text-green-100 pl-4">9:00AM  -  5:00PM</span>
                        </div>

                        <div className="h-8 pt-2 mx-6 text-center text-green-300 text-sm sm:text-sm md:text-sm lg:text-sm " style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            WEDNESDAY  <span className="text-green-100 pl-4">7:00AM  -  5:00PM</span>
                        </div>

                        <div className="h-8 pt-2 mx-6 text-center text-green-300 text-sm sm:text-sm md:text-sm lg:text-sm " style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            THURSDAY  <span className="text-green-100 pl-4">9:00AM  -  7:00PM</span>
                        </div>

                        <div className="h-8 pt-2 mx-6 text-center text-green-300 text-sm sm:text-sm md:text-sm lg:text-sm " style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            FRIDAY  <span className="text-green-100 pl-4">9:00AM  -  5:00PM</span>
                        </div>

                    </div>
                </div>

                <div className="lg:m-2 w-full lg:w-1/3 text-center text-sm md:text-lg lg:text-xl pt-4 lg:h-1/3" style={{outline: '1px solid white', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                    <div className="flex flex-row lg:flex-col">
                        <div className="h-1/4 w-1/2 md:w-full lg:w-full md:mb-4 lg:mb-4">
                            <a href={patientForm}>
                                <button type="button" className="m-1 p-1 px-4 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                    <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>New Patient Form</span>
                                </button>
                            </a>
                        </div>

                        <div className="h-1/4 w-1/2 md:w-full lg:w-full md:mb-4 lg:mb-4">
                            <Link to='/staff'>
                                <button type="button" className="m-1 p-1 px-4 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                    <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>Meet Our Staff</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-row lg:flex-col">
                        <div className="h-1/4 w-1/2 md:w-full lg:w-full md:mb-4 lg:mb-4">
                            <Link to='/services'>
                                <button type="button" className="m-1 p-1 px-4 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                    <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>Services</span>
                                </button>
                            </Link>
                        </div>

                        <div className="h-1/4 w-1/2 md:w-full lg:w-full md:mb-4 lg:mb-4">
                            <Link to='/products'>
                                <button type="button" className="m-1 p-1 px-4 bg-green-900" style={{borderRadius: '10px', border: '2px solid white'}}>
                                    <span className="font-bold text-white" style={{fontFamily:'CortisaProLight', letterSpacing: '1px'}}>Products</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    )
}

export default Home;
